<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import meAvatar from '@/assets/me_avatar.webp'

const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function handleScroll() {
  scrolled.value = window.scrollY > 50
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav class="navbar" :class="{ scrolled: scrolled }">
    <div class="nav-container">
      <a href="#home" class="nav-logo" @click="closeMobileMenu" aria-label="Home">
        <img :src="meAvatar" alt="Miguel" class="nav-avatar" />
      </a>

      <button class="mobile-toggle" @click="mobileMenuOpen = !mobileMenuOpen">
        <i :class="mobileMenuOpen ? 'pi pi-times' : 'pi pi-bars'"></i>
      </button>

      <ul class="nav-links" :class="{ open: mobileMenuOpen }">
        <li v-for="link in navLinks" :key="link.href">
          <a :href="link.href" @click="closeMobileMenu">{{ link.label }}</a>
        </li>
        <li>
          <a
            href="https://github.com/helghast79"
            target="_blank"
            rel="noopener"
            class="nav-github"
          >
            <i class="pi pi-github"></i>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 20px 0;
  transition: all 0.3s ease;
}

.navbar.scrolled {
  padding: 12px 0;
  background: rgba(10, 14, 26, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}

.nav-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  border-radius: 50%;
  overflow: hidden;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 2px solid var(--accent);

  &:hover {
    transform: scale(1.08);
    box-shadow: 0 0 12px color-mix(in srgb, var(--accent) 40%, transparent);
  }
}

.nav-avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;

  a {
    color: var(--text-secondary);
    font-size: 0.95rem;
    font-weight: 500;
    text-decoration: none;
    transition: color 0.2s;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--gradient-1);
      transition: width 0.3s ease;
    }

    &:hover {
      color: var(--text-primary);
      &::after {
        width: 100%;
      }
    }
  }
}

.nav-github {
  font-size: 1.2rem !important;
}

.mobile-toggle {
  display: none;
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
}

@media (max-width: 768px) {
  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 250px;
    height: 100vh;
    background: var(--bg-secondary);
    flex-direction: column;
    justify-content: center;
    padding: 40px;
    gap: 24px;
    transition: right 0.3s ease;
    border-left: 1px solid var(--border);

    &.open {
      right: 0;
    }
  }
}
</style>
