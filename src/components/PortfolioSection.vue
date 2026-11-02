<script setup>
import { usePortfolioStore } from '@/stores/portfolio'

const portfolio = usePortfolioStore()

function typeIcon(type) {
  if (type === 'app') return 'pi pi-mobile'
  return 'pi pi-globe'
}
</script>

<template>
  <section id="portfolio" class="portfolio">
    <div class="container">
      <h2 class="section-title reveal">{{ portfolio.sectionTitle }}</h2>
      <p class="section-subtitle reveal">{{ portfolio.sectionSubtitle }}</p>

      <div v-if="portfolio.items.length" class="portfolio-grid">
        <article
          v-for="(item, index) in portfolio.items"
          :key="item.title"
          class="portfolio-item reveal"
          :style="{ transitionDelay: index * 0.08 + 's' }"
        >
          <div class="portfolio-media">
            <img
              v-if="item.image"
              :src="item.image"
              :alt="item.title"
              class="portfolio-image"
              loading="lazy"
            />
            <div v-else class="portfolio-placeholder">
              <i :class="typeIcon(item.type)"></i>
            </div>

            <span v-if="item.type" class="portfolio-type">
              <i :class="typeIcon(item.type)"></i>
              {{ item.type }}
            </span>
          </div>

          <div class="portfolio-body">
            <div class="portfolio-heading">
              <h3 class="portfolio-title">{{ item.title }}</h3>
              <span v-if="item.year" class="portfolio-year">{{ item.year }}</span>
            </div>

            <p class="portfolio-desc">{{ item.description }}</p>

            <div v-if="item.tags?.length" class="portfolio-tags">
              <span v-for="tag in item.tags" :key="tag" class="portfolio-tag">
                {{ tag }}
              </span>
            </div>

            <div v-if="item.url || item.github" class="portfolio-links">
              <a
                v-if="item.url"
                :href="item.url"
                target="_blank"
                rel="noopener"
                class="portfolio-link primary"
              >
                <i class="pi pi-external-link"></i>
                View live
              </a>
              <a
                v-if="item.github"
                :href="item.github"
                target="_blank"
                rel="noopener"
                class="portfolio-link secondary"
              >
                <i class="pi pi-github"></i>
                Code
              </a>
            </div>
          </div>
        </article>
      </div>

      <p v-else class="portfolio-empty reveal">
        Add entries in <code>src/stores/portfolio.js</code> and optional images in
        <code>public/portfolio/</code>.
      </p>
    </div>
  </section>
</template>

<style scoped>
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 28px;
}

.portfolio-item {
  display: flex;
  flex-direction: column;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  backdrop-filter: blur(10px);
  transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: var(--border-hover);
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);

    .portfolio-image {
      transform: scale(1.03);
    }
  }
}

.portfolio-media {
  position: relative;
  aspect-ratio: 16 / 10;
  background: var(--bg-secondary);
  overflow: hidden;
}

.portfolio-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.portfolio-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    radial-gradient(ellipse at 30% 20%, rgba(99, 102, 241, 0.25), transparent 55%),
    radial-gradient(ellipse at 80% 80%, rgba(6, 182, 212, 0.18), transparent 50%),
    var(--bg-secondary);

  i {
    font-size: 2.5rem;
    color: var(--accent-light);
    opacity: 0.7;
  }
}

.portfolio-type {
  position: absolute;
  top: 12px;
  left: 12px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: capitalize;
  color: var(--text-primary);
  background: rgba(10, 14, 26, 0.75);
  border: 1px solid var(--border);
  backdrop-filter: blur(8px);

  i {
    font-size: 0.75rem;
    color: var(--accent-light);
  }
}

.portfolio-body {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 24px;
  gap: 12px;
}

.portfolio-heading {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
}

.portfolio-title {
  font-size: 1.2rem;
  margin: 0;
}

.portfolio-year {
  font-family: var(--mono);
  font-size: 0.8rem;
  color: var(--text-muted);
  flex-shrink: 0;
}

.portfolio-desc {
  font-size: 0.92rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
}

.portfolio-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.portfolio-tag {
  font-family: var(--mono);
  font-size: 0.72rem;
  padding: 4px 10px;
  border-radius: 6px;
  background: rgba(99, 102, 241, 0.08);
  color: var(--text-secondary);
  border: 1px solid var(--border);
}

.portfolio-links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: auto;
  padding-top: 8px;
}

.portfolio-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: var(--radius-sm);
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.25s ease;

  i {
    font-size: 0.85rem;
  }

  &.primary {
    background: var(--gradient-1);
    color: white;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 20px var(--accent-glow);
      color: white;
    }
  }

  &.secondary {
    background: transparent;
    color: var(--text-primary);
    border: 1px solid var(--border-hover);

    &:hover {
      border-color: var(--accent);
      color: var(--accent-light);
      transform: translateY(-2px);
    }
  }
}

.portfolio-empty {
  color: var(--text-secondary);
  font-size: 0.95rem;

  code {
    font-family: var(--mono);
    font-size: 0.85rem;
    color: var(--accent-light);
  }
}

@media (max-width: 768px) {
  .portfolio-grid {
    grid-template-columns: 1fr;
  }
}
</style>
