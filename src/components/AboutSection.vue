<script setup>
import { useProfileStore } from '@/stores/profile'

const profile = useProfileStore()
</script>

<template>
  <section id="about" class="about">
    <div class="container">
      <h2 class="section-title reveal">About Me</h2>
      <p class="section-subtitle reveal">A bit about my journey</p>

      <div class="about-grid">
        <div class="about-text reveal">
          <p class="bio">{{ profile.bio }}</p>
          <p class="bio-extended">{{ profile.bioExtended }}</p>

          <div class="about-info">
            <div class="info-item">
              <i class="pi pi-map-marker"></i>
              <span>{{ profile.location }}</span>
            </div>
            <div class="info-item">
              <i class="pi pi-envelope"></i>
              <span>{{ profile.email }}</span>
            </div>
          </div>
        </div>

        <div class="about-highlights reveal">
          <div v-for="h in profile.highlights" :key="h.label" class="highlight-card">
            <div class="highlight-icon">
              <i :class="h.icon"></i>
            </div>
            <div class="highlight-content">
              <h4>{{ h.label }}</h4>
              <p>{{ h.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 48px;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}

.bio {
  font-size: 1.15rem;
  color: var(--text-primary);
  margin-bottom: 20px;
  line-height: 1.7;
}

.bio-extended {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 28px;
}

.about-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--text-secondary);
  font-size: 0.95rem;

  i {
    color: var(--accent);
    font-size: 1.1rem;
  }
}

.about-highlights {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.highlight-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 24px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: var(--bg-card-hover);
    border-color: var(--border-hover);
    transform: translateY(-4px);
  }
}

.highlight-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: var(--accent-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;

  i {
    font-size: 1.3rem;
    color: var(--accent-light);
  }
}

.highlight-content h4 {
  font-size: 1rem;
  margin-bottom: 4px;
}

.highlight-content p {
  font-size: 0.85rem;
  color: var(--text-secondary);
}

@media (max-width: 480px) {
  .about-highlights {
    grid-template-columns: 1fr;
  }
}
</style>
