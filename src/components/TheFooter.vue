<script setup>
import { useProfileStore } from '@/stores/profile'

const profile = useProfileStore()
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <span class="logo-bracket">&lt;</span>
          <span class="logo-text">MC</span>
          <span class="logo-bracket">/&gt;</span>
        </div>
        <p class="footer-text">
          {{ profile.name }} — {{ profile.title }} · {{ profile.location }}
        </p>
        <div class="footer-socials">
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
      <p class="footer-copy">
        &copy; {{ new Date().getFullYear() }} {{ profile.name }}. Built with Vue.js, Vite, Pinia & PrimeVue.
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 48px 0 32px;
  border-top: 1px solid var(--border);
  background: var(--bg-secondary);
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}

.footer-brand {
  font-family: var(--mono);
  font-size: 1.3rem;
  font-weight: 700;
}

.logo-bracket {
  color: var(--accent);
}

.logo-text {
  color: var(--text-primary);
}

.footer-text {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.footer-socials {
  display: flex;
  gap: 16px;

  a {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: var(--bg-card);
    border: 1px solid var(--border);
    color: var(--text-secondary);
    transition: all 0.3s ease;

    &:hover {
      color: var(--accent-light);
      border-color: var(--accent);
      transform: translateY(-3px);
    }
  }
}

.footer-copy {
  text-align: center;
  color: var(--text-muted);
  font-size: 0.8rem;
}
</style>
