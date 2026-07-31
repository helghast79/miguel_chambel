<script setup>
import { useScrollReveal } from '@/composables/useScrollReveal'
import TheNavbar from '@/components/TheNavbar.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import TheFooter from '@/components/TheFooter.vue'

useScrollReveal()
</script>

<template>
  <div class="app-dark">
    <TheNavbar />
    <main>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
    <TheFooter />
  </div>
</template>
