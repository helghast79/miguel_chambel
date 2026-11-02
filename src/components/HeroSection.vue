<script setup>
import { useProfileStore } from '@/stores/profile'
import MatrixRain from '@/components/MatrixRain.vue'

const profile = useProfileStore()
</script>

<template>
  <section id="home" class="hero">
    <div class="hero-bg">
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="orb orb-3"></div>
      <div class="grid-overlay"></div>
      <MatrixRain :opacity="0.5" />
    </div>

    <div class="container hero-content">
      <p class="hero-greeting animate-in">Hello, I'm</p>
      <h1 class="hero-name animate-in" style="animation-delay: 0.1s">
        {{ profile.name }}
      </h1>
      <h2 class="hero-title animate-in" style="animation-delay: 0.2s">
        <span class="text-gradient">{{ profile.title }}</span>
      </h2>
      <p class="hero-tagline animate-in" style="animation-delay: 0.3s">
        {{ profile.tagline }}
      </p>

      <div class="hero-cta animate-in" style="animation-delay: 0.4s">
        <a href="#projects" class="btn btn-primary">
          <i class="pi pi-folder-open"></i>
          View My Work
        </a>
        <a href="#contact" class="btn btn-secondary">
          <i class="pi pi-envelope"></i>
          Get In Touch
        </a>
      </div>

      <div class="hero-socials animate-in" style="animation-delay: 0.5s">
        <a :href="profile.github" target="_blank" rel="noopener" aria-label="GitHub">
          <i class="pi pi-github"></i>
        </a>
        <a :href="profile.linkedin" target="_blank" rel="noopener" aria-label="LinkedIn">
          <i class="pi pi-linkedin"></i>
        </a>
        <a :href="'mailto:' + profile.email" aria-label="Email">
          <i class="pi pi-envelope"></i>
        </a>
      </div>
    </div>

    <div class="scroll-indicator">
      <div class="mouse">
        <div class="wheel"></div>
      </div>
      <span>Scroll</span>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 120px 0 60px;
  overflow: hidden;
  position: relative;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
  animation: float 8s ease-in-out infinite;
}

.orb-1 {
  width: 400px;
  height: 400px;
  background: var(--accent);
  top: 10%;
  left: 5%;
}

.orb-2 {
  width: 350px;
  height: 350px;
  background: var(--accent-2);
  bottom: 10%;
  right: 5%;
  animation-delay: 2s;
}

.orb-3 {
  width: 300px;
  height: 300px;
  background: var(--accent-3);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: 4s;
  opacity: 0.2;
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(99, 102, 241, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(99, 102, 241, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-greeting {
  font-size: 1.2rem;
  color: var(--accent-light);
  margin-bottom: 8px;
  font-family: var(--mono);
}

.hero-name {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 8px;
  letter-spacing: -2px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
}

.hero-title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
}

.hero-tagline {
  font-size: 1.15rem;
  color: var(--text-secondary);
  max-width: 500px;
  margin: 0 auto 32px;
}

.hero-cta {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-bottom: 32px;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  border-radius: var(--radius-sm);
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn-primary {
  background: var(--gradient-1);
  color: white;
  box-shadow: 0 4px 20px var(--accent-glow);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px var(--accent-glow);
    color: white;
  }
}

.btn-secondary {
  background: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border-hover);

  &:hover {
    background: var(--bg-card);
    border-color: var(--accent);
    color: var(--text-primary);
    transform: translateY(-2px);
  }
}

.hero-socials {
  display: flex;
  gap: 16px;
  justify-content: center;

  a {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: var(--bg-card);
    border: 1px solid var(--border);
    color: var(--text-secondary);
    font-size: 1.2rem;
    transition: all 0.3s ease;

    &:hover {
      color: var(--accent-light);
      border-color: var(--accent);
      transform: translateY(-4px);
      box-shadow: var(--shadow-glow);
    }
  }
}

.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: var(--text-muted);
  font-size: 0.8rem;
  z-index: 1;
}

.mouse {
  width: 24px;
  height: 38px;
  border: 2px solid var(--text-muted);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  padding-top: 6px;
}

.wheel {
  width: 4px;
  height: 8px;
  background: var(--text-muted);
  border-radius: 2px;
  animation: scrollWheel 1.5s ease-in-out infinite;
}

@keyframes scrollWheel {
  0% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(12px); }
}
</style>
