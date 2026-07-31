<script setup>
import { useProjectsStore } from '@/stores/projects'

const projects = useProjectsStore()
</script>

<template>
  <section id="projects" class="projects">
    <div class="container">
      <h2 class="section-title reveal">Projects & Contributions</h2>
      <p class="section-subtitle reveal">Work I've been part of — from research consortiums to full-stack systems</p>

      <div class="projects-grid">
        <div
          v-for="(project, index) in projects.projects"
          :key="project.title"
          class="project-card reveal"
          :style="{ transitionDelay: index * 0.08 + 's' }"
        >
          <div class="project-glow" :class="project.gradient"></div>

          <div class="project-content">
            <div class="project-icon">
              <i :class="project.icon"></i>
            </div>

            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-subtitle">{{ project.subtitle }}</p>
            <p class="project-desc">{{ project.description }}</p>

            <div class="project-tags">
              <span v-for="tag in project.tags" :key="tag" class="project-tag">
                {{ tag }}
              </span>
            </div>

            <a
              v-if="project.link"
              :href="project.link"
              target="_blank"
              rel="noopener"
              class="project-link"
            >
              Visit Project
              <i class="pi pi-external-link"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
}

.project-card {
  position: relative;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 32px;
  overflow: hidden;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    border-color: var(--border-hover);
    transform: translateY(-6px);
    box-shadow: var(--shadow-lg);

    .project-glow {
      opacity: 0.15;
    }
  }
}

.project-glow {
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.05;
  transition: opacity 0.3s ease;
}

.project-glow.gradient-1 { background: var(--accent); }
.project-glow.gradient-2 { background: var(--accent-3); }
.project-glow.gradient-3 { background: var(--accent-2); }

.project-content {
  position: relative;
  z-index: 1;
}

.project-icon {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: var(--accent-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  i {
    font-size: 1.5rem;
    color: var(--accent-light);
  }
}

.project-title {
  font-size: 1.25rem;
  margin-bottom: 4px;
}

.project-subtitle {
  font-size: 0.9rem;
  color: var(--accent-light);
  margin-bottom: 16px;
  font-weight: 500;
}

.project-desc {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 20px;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.project-tag {
  font-family: var(--mono);
  font-size: 0.72rem;
  padding: 4px 10px;
  border-radius: 6px;
  background: rgba(99, 102, 241, 0.08);
  color: var(--text-secondary);
  border: 1px solid var(--border);
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
  padding: 8px 18px;
  border-radius: var(--radius-sm);
  background: var(--gradient-1);
  color: white;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;

  i {
    font-size: 0.8rem;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px var(--accent-glow);
    color: white;
  }
}
</style>
