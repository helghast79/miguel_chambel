<script setup>
import { useProfileStore } from '@/stores/profile'

const profile = useProfileStore()
</script>

<template>
  <section id="contact" class="contact">
    <div class="container">
      <h2 class="section-title reveal">Get In Touch</h2>
      <p class="section-subtitle reveal">Let's build something together</p>

      <div class="contact-content reveal">
        <p class="contact-text">
          I'm always open to discussing new projects, creative ideas, or opportunities
          to be part of something exciting. Feel free to reach out!
        </p>

        <a :href="'mailto:' + profile.email" class="contact-email">
          <i class="pi pi-envelope"></i>
          {{ profile.email }}
        </a>

        <div class="contact-links">
          <a :href="profile.github" target="_blank" rel="noopener" class="contact-link">
            <i class="pi pi-github"></i>
            <span>GitHub</span>
          </a>
          <a :href="profile.linkedin" target="_blank" rel="noopener" class="contact-link">
            <i class="pi pi-linkedin"></i>
            <span>LinkedIn</span>
          </a>
          <a :href="'mailto:' + profile.email" class="contact-link">
            <i class="pi pi-envelope"></i>
            <span>Email</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  text-align: center;
}

.contact-content {
  max-width: 600px;
  margin: 0 auto;
}

.contact-text {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 32px;
}

.contact-email {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-primary);
  padding: 16px 32px;
  border-radius: var(--radius);
  background: var(--bg-card);
  border: 1px solid var(--border);
  transition: all 0.3s ease;
  margin-bottom: 40px;

  i {
    color: var(--accent-light);
    font-size: 1.4rem;
  }

  &:hover {
    border-color: var(--accent);
    box-shadow: var(--shadow-glow);
    transform: translateY(-2px);
    color: var(--text-primary);
  }
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: var(--radius-sm);
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text-secondary);
  font-weight: 500;
  transition: all 0.3s ease;

  i {
    font-size: 1.1rem;
  }

  &:hover {
    color: var(--accent-light);
    border-color: var(--border-hover);
    transform: translateY(-3px);
  }
}
</style>
