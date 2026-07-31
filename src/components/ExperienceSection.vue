<script setup>
import { useExperienceStore } from '@/stores/experience'

const experience = useExperienceStore()
</script>

<template>
  <section id="experience" class="experience">
    <div class="container">
      <h2 class="section-title reveal">Work Experience</h2>
      <p class="section-subtitle reveal">My professional journey</p>

      <div class="timeline">
        <div class="timeline-line"></div>

        <div
          v-for="(job, index) in experience.jobs"
          :key="index"
          class="timeline-item reveal"
          :style="{ transitionDelay: index * 0.1 + 's' }"
        >
          <div class="timeline-dot" :class="{ current: job.current }">
            <span v-if="job.current" class="dot-pulse"></span>
          </div>

          <div class="timeline-card">
            <div class="timeline-header">
              <span class="timeline-period">{{ job.period }}</span>
              <span v-if="job.current" class="badge-current">Current</span>
            </div>

            <h3 class="timeline-role">{{ job.role }}</h3>
            <p class="timeline-company">
              {{ job.company }}
              <span class="timeline-location">— {{ job.location }}</span>
            </p>

            <p class="timeline-desc">{{ job.description }}</p>

            <ul class="timeline-achievements">
              <li v-for="(achievement, i) in job.achievements" :key="i">
                {{ achievement }}
              </li>
            </ul>

            <div class="timeline-tech">
              <span v-for="tech in job.tech" :key="tech" class="tech-tag">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline {
  position: relative;
  padding-left: 40px;
}

.timeline-line {
  position: absolute;
  left: 11px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(
    to bottom,
    var(--accent),
    var(--accent-2),
    transparent
  );
}

.timeline-item {
  position: relative;
  margin-bottom: 40px;
}

.timeline-dot {
  position: absolute;
  left: -35px;
  top: 6px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--bg-primary);
  border: 2px solid var(--accent);
  z-index: 1;
}

.timeline-dot.current {
  background: var(--accent);
  box-shadow: 0 0 0 4px var(--accent-glow);
}

.dot-pulse {
  position: absolute;
  inset: -2px;
  border-radius: 50%;
  background: var(--accent);
  animation: pulseDot 2s ease-in-out infinite;
}

@keyframes pulseDot {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 0; transform: scale(2); }
}

.timeline-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 28px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    border-color: var(--border-hover);
    background: var(--bg-card-hover);
    transform: translateX(4px);
  }
}

.timeline-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}

.timeline-period {
  font-family: var(--mono);
  font-size: 0.85rem;
  color: var(--accent-light);
}

.badge-current {
  font-size: 0.7rem;
  padding: 2px 10px;
  border-radius: 20px;
  background: var(--accent-bg);
  color: var(--accent-light);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.timeline-role {
  font-size: 1.3rem;
  margin-bottom: 4px;
}

.timeline-company {
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-bottom: 16px;
}

.timeline-location {
  color: var(--text-muted);
  font-size: 0.85rem;
}

.timeline-desc {
  color: var(--text-secondary);
  margin-bottom: 16px;
  line-height: 1.6;
}

.timeline-achievements {
  list-style: none;
  margin-bottom: 20px;

  li {
    position: relative;
    padding-left: 24px;
    margin-bottom: 8px;
    color: var(--text-secondary);
    font-size: 0.9rem;
    line-height: 1.5;

    &::before {
      content: '▹';
      position: absolute;
      left: 0;
      color: var(--accent);
    }
  }
}

.timeline-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-tag {
  font-family: var(--mono);
  font-size: 0.75rem;
  padding: 4px 12px;
  border-radius: 6px;
  background: rgba(99, 102, 241, 0.1);
  color: var(--accent-light);
  border: 1px solid var(--border);
}

@media (max-width: 768px) {
  .timeline {
    padding-left: 30px;
  }

  .timeline-dot {
    left: -27px;
  }

  .timeline-line {
    left: 7px;
  }
}
</style>
