<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import meAvatar from '@/assets/me_avatar.webp'

const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

function handleScroll() {
  scrolled.value = window.scrollY > 50
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
}

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

function handleKeydown(event) {
  if (event.key === 'Escape') closeMobileMenu()
}

watch(mobileMenuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <nav class="navbar" :class="{ scrolled: scrolled }">
    <div
      v-if="mobileMenuOpen"
      class="nav-backdrop"
      aria-hidden="true"
      @click="closeMobileMenu"
    ></div>

    <div class="nav-container">
      <a href="#home" class="nav-logo" @click="closeMobileMenu" aria-label="Home">
        <img :src="meAvatar" alt="Miguel" class="nav-avatar" />
      </a>

      <button
        class="mobile-toggle"
        :aria-expanded="mobileMenuOpen"
        :aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'"
        @click="toggleMobileMenu"
      >
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
            @click="closeMobileMenu"
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

.nav-backdrop {
  display: none;
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
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  text-decoration: none;
  border-radius: 50%;
  overflow: hidden;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  border: 2px solid var(--accent);
  transform-origin: top left;

  &:hover {
    z-index: 10;
    transform: scale(2);
    box-shadow: 0 0 16px color-mix(in srgb, var(--accent) 45%, transparent);
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
  position: relative;
  z-index: 1002;
  padding: 4px;
  line-height: 1;
}

@media (max-width: 768px) {
  .mobile-toggle {
    display: block;
  }

  .nav-backdrop {
    display: block;
    position: fixed;
    inset: 0;
    z-index: 1000;
    background: rgba(10, 14, 26, 0.55);
    backdrop-filter: blur(2px);
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: min(280px, 85vw);
    height: 100vh;
    height: 100dvh;
    background: var(--bg-secondary);
    flex-direction: column;
    justify-content: center;
    padding: 40px;
    gap: 24px;
    transition: right 0.3s ease;
    border-left: 1px solid var(--border);
    z-index: 1001;
    margin: 0;

    &.open {
      right: 0;
    }
  }
}
</style>
