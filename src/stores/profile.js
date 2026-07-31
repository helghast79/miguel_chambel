import { defineStore } from 'pinia'

export const useProfileStore = defineStore('profile', {
  state: () => ({
    name: 'Miguel Chambel',
    title: 'Software Engineer',
    tagline: 'Building things with code, curiosity, and care',
    location: 'Lisbon, Portugal',
    email: 'M.a.chambel@gmail.com',
    linkedin: 'https://www.linkedin.com/in/miguelchambel',
    github: 'https://github.com/helghast79',
    bio: `I'm a software engineer passionate about building meaningful tools at the intersection of technology and healthcare. Currently at Fundação Champalimaud, I work on medical imaging platforms, ML/DL models, and full-stack systems that support cancer research and clinical workflows.`,
    bioExtended: `With a background in Mechanical Engineering and a career journey that spans from naval maintenance to sales to software, I bring a unique perspective to problem-solving. I thrive in environments where I can learn, build, and mentor — whether that's architecting web applications, deploying ML pipelines, or helping PhD students manage their research data.`,
    highlights: [
      { icon: 'pi pi-heart', label: 'Medical Imaging', desc: 'ML/DL models for cancer research' },
      { icon: 'pi pi-server', label: 'Full-Stack', desc: 'Backend, frontend & DevOps' },
      { icon: 'pi pi-bolt', label: 'MLOps', desc: 'MLflow, Docker, CI/CD' },
      { icon: 'pi pi-users', label: 'Mentor', desc: 'Supporting MSc & PhD students' },
    ],
  }),
})
