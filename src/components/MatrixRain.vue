<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const props = defineProps({
  color: { type: String, default: '6, 182, 212' },
  fontSize: { type: Number, default: 16 },
  opacity: { type: Number, default: 0.45 },
})

const canvasRef = ref(null)

const CHARSET =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+-=[]{}|;:,.<>?/~`'

function randomChar() {
  return CHARSET[Math.floor(Math.random() * CHARSET.length)]
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min)
}

function brightnessForAge(ageMs, lifeMs) {
  const peakMs = 120
  const settleMs = 300

  if (ageMs <= 0) return 0.01
  if (ageMs < peakMs) return Math.max(ageMs / peakMs, 0.01)

  if (ageMs < settleMs) {
    const t = (ageMs - peakMs) / (settleMs - peakMs)
    const eased = 1 - Math.pow(1 - t, 2)
    return 1 - eased * 0.2
  }

  const fadeDuration = Math.max(lifeMs - settleMs, 1)
  const t = Math.min((ageMs - settleMs) / fadeDuration, 1)
  return 0.8 * (1 - t * t)
}

// Plain object avoids Vue script-setup rebinding of top-level `let`s
// which can desync the rAF closure from onMounted assignments.
const state = {
  rafId: 0,
  resizeObserver: null,
  columns: [],
  width: 0,
  height: 0,
  lastTs: 0,
  running: false,
}

function createColumn(x, startVisible, fontSize) {
  return {
    x,
    y: startVisible
      ? randomBetween(0, state.height)
      : randomBetween(-state.height, 0),
    speed: randomBetween(55, 140),
    trailLength: Math.floor(randomBetween(8, 24)),
    nextSpawnGap: fontSize,
    glyphs: [],
    spawnAccumulator: fontSize,
    pauseUntil: 0,
  }
}

function rebuildColumns() {
  const canvas = canvasRef.value
  if (!canvas) return

  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  const rect = canvas.getBoundingClientRect()
  const nextW = Math.max(1, Math.floor(rect.width))
  const nextH = Math.max(1, Math.floor(rect.height))

  if (nextW === state.width && nextH === state.height && state.columns.length) {
    return
  }

  state.width = nextW
  state.height = nextH

  canvas.width = Math.floor(state.width * dpr)
  canvas.height = Math.floor(state.height * dpr)

  const ctx = canvas.getContext('2d')
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

  const fontSize = Number(props.fontSize) || 16
  const colCount = Math.max(1, Math.floor(state.width / (fontSize * 1.2)))
  const gap = state.width / colCount
  state.columns = Array.from({ length: colCount }, (_, i) =>
    createColumn(i * gap + gap * 0.2, i % 3 !== 0, fontSize),
  )
}

function spawnGlyph(column, now) {
  column.glyphs.push({
    x: column.x,
    y: column.y,
    char: randomChar(),
    bornAt: now,
    lifeMs: randomBetween(1600, 3600),
  })

  if (column.glyphs.length > column.trailLength + 4) {
    column.glyphs.splice(0, column.glyphs.length - column.trailLength - 4)
  }
}

function tick(ts) {
  if (!state.running) return
  state.rafId = requestAnimationFrame(tick)

  const canvas = canvasRef.value
  if (!canvas || state.width < 1 || state.height < 1) return

  if (!state.lastTs) state.lastTs = ts
  const dt = Math.min((ts - state.lastTs) / 1000, 0.05)
  state.lastTs = ts
  const now = performance.now()
  const fontSize = Number(props.fontSize) || 16

  const ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, state.width, state.height)
  ctx.font = `${fontSize}px "JetBrains Mono", ui-monospace, monospace`
  ctx.textBaseline = 'top'

  for (const column of state.columns) {
    if (now >= column.pauseUntil) {
      column.y += column.speed * dt
      column.spawnAccumulator += column.speed * dt

      if (!Number.isFinite(column.nextSpawnGap) || column.nextSpawnGap <= 0) {
        column.nextSpawnGap = fontSize
      }
      if (!Number.isFinite(column.spawnAccumulator)) {
        column.spawnAccumulator = fontSize
      }

      while (column.spawnAccumulator >= column.nextSpawnGap) {
        column.spawnAccumulator -= column.nextSpawnGap
        spawnGlyph(column, now)
        column.nextSpawnGap = fontSize * randomBetween(0.85, 1.35)
      }

      if (column.y > state.height + column.trailLength * fontSize) {
        column.y = randomBetween(-state.height * 0.3, 0)
        column.speed = randomBetween(55, 140)
        column.trailLength = Math.floor(randomBetween(8, 24))
        column.spawnAccumulator = fontSize
        column.pauseUntil = now + randomBetween(150, 1200)
      }
    }

    const alive = []
    for (const glyph of column.glyphs) {
      const age = now - glyph.bornAt
      // Keep glyph for its full life — don't prune on brightness or age-0
      // (new glyphs start at 0 brightness and must survive to fade in)
      if (age > glyph.lifeMs) continue

      alive.push(glyph)

      const brightness = brightnessForAge(age, glyph.lifeMs)
      if (brightness <= 0.01) continue

      if (Math.random() < 0.015) glyph.char = randomChar()

      ctx.fillStyle = `rgba(${props.color}, ${props.opacity * brightness})`
      ctx.fillText(glyph.char, glyph.x, glyph.y)
    }
    column.glyphs = alive
  }
}

function handleVisibility() {
  if (document.hidden) {
    state.running = false
    cancelAnimationFrame(state.rafId)
    state.rafId = 0
    state.lastTs = 0
  } else if (!state.running) {
    state.running = true
    state.lastTs = 0
    state.rafId = requestAnimationFrame(tick)
  }
}

onMounted(() => {
  rebuildColumns()

  state.resizeObserver = new ResizeObserver(() => {
    rebuildColumns()
  })
  const canvas = canvasRef.value
  if (canvas) state.resizeObserver.observe(canvas.parentElement ?? canvas)

  document.addEventListener('visibilitychange', handleVisibility)
  state.running = true
  state.rafId = requestAnimationFrame(tick)
})

onUnmounted(() => {
  state.running = false
  cancelAnimationFrame(state.rafId)
  state.resizeObserver?.disconnect()
  document.removeEventListener('visibilitychange', handleVisibility)
})
</script>

<template>
  <canvas ref="canvasRef" class="matrix-rain" aria-hidden="true"></canvas>
</template>

<style scoped>
.matrix-rain {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}
</style>
