<script setup>
import { useSkillsStore } from '@/stores/skills'

const skills = useSkillsStore()
</script>

<template>
  <section id="skills" class="skills">
    <div class="container">
      <h2 class="section-title reveal">Skills & Education</h2>
      <p class="section-subtitle reveal">Technologies I work with and where I learned</p>

      <div class="skills-grid">
        <div
          v-for="(cat, index) in skills.categories"
          :key="cat.name"
          class="skill-card reveal"
          :style="{ transitionDelay: index * 0.08 + 's' }"
        >
          <div class="skill-icon">
            <i :class="cat.icon"></i>
          </div>
          <h3 class="skill-name">{{ cat.name }}</h3>
          <div class="skill-items">
            <span v-for="item in cat.items" :key="item" class="skill-tag">
              {{ item }}
            </span>
          </div>
        </div>
      </div>

      <div class="education-languages">
        <div class="education-section reveal">
          <h3 class="subsection-title">
            <i class="pi pi-graduation-cap"></i>
            Education
          </h3>
          <div class="education-list">
            <div v-for="edu in skills.education" :key="edu.title" class="education-item">
              <span class="edu-period">{{ edu.period }}</span>
              <div class="edu-details">
                <h4>{{ edu.title }}</h4>
                <p>{{ edu.institution }} — {{ edu.location }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="languages-section reveal">
          <h3 class="subsection-title">
            <i class="pi pi-globe"></i>
            Languages
          </h3>
          <div class="languages-list">
            <div v-for="lang in skills.languages" :key="lang.name" class="language-item">
              <div class="lang-header">
                <span class="lang-name">{{ lang.name }}</span>
                <span class="lang-level">{{ lang.level }}</span>
              </div>
              <div class="lang-bar">
                <div
                  class="lang-bar-fill"
                  :style="{ width: lang.proficiency + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="interests-section reveal">
        <h3 class="subsection-title">
          <i class="pi pi-star"></i>
          Beyond the Code
        </h3>
        <div class="interests-grid">
          <div v-for="interest in skills.interests" :key="interest.label" class="interest-card">
            <i :class="interest.icon"></i>
            <h4>{{ interest.label }}</h4>
            <p>{{ interest.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 64px;
}

.skill-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 28px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    border-color: var(--border-hover);
    background: var(--bg-card-hover);
    transform: translateY(-4px);
  }
}

.skill-icon {
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

.skill-name {
  font-size: 1.05rem;
  margin-bottom: 16px;
}

.skill-items {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-tag {
  font-family: var(--mono);
  font-size: 0.8rem;
  padding: 5px 12px;
  border-radius: 6px;
  background: rgba(99, 102, 241, 0.08);
  color: var(--text-secondary);
  border: 1px solid var(--border);
  transition: all 0.2s;

  &:hover {
    color: var(--accent-light);
    border-color: var(--border-hover);
  }
}

.education-languages {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-bottom: 64px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.subsection-title {
  font-size: 1.3rem;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 10px;

  i {
    color: var(--accent);
  }
}

.education-item {
  display: flex;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid var(--border);

  &:last-child {
    border-bottom: none;
  }
}

.edu-period {
  font-family: var(--mono);
  font-size: 0.85rem;
  color: var(--accent-light);
  white-space: nowrap;
  min-width: 100px;
}

.edu-details h4 {
  font-size: 1rem;
  margin-bottom: 4px;
}

.edu-details p {
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.language-item {
  margin-bottom: 20px;
}

.lang-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  .lang-name {
    font-weight: 600;
    color: var(--text-primary);
  }

  .lang-level {
    font-family: var(--mono);
    font-size: 0.85rem;
    color: var(--accent-light);
  }
}

.lang-bar {
  height: 6px;
  background: var(--bg-secondary);
  border-radius: 3px;
  overflow: hidden;
}

.lang-bar-fill {
  height: 100%;
  background: var(--gradient-1);
  border-radius: 3px;
  transition: width 1s ease;
}

.interests-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}

.interest-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 24px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--border-hover);
    transform: translateY(-4px);
  }

  i {
    font-size: 1.8rem;
    color: var(--accent-light);
    margin-bottom: 12px;
  }

  h4 {
    font-size: 0.95rem;
    margin-bottom: 6px;
  }

  p {
    font-size: 0.8rem;
    color: var(--text-secondary);
  }
}
</style>
