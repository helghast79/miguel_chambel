import { defineStore } from 'pinia'

export const useSkillsStore = defineStore('skills', {
  state: () => ({
    categories: [
      {
        name: 'Primary Languages & Technologies',
        icon: 'pi pi-code',
        items: ['JavaScript', 'Node.js', 'TypeScript', 'Python', 'CSS', 'HTML'],
      },
      {
        name: 'Frameworks & Libraries',
        icon: 'pi pi-bolt',
        items: ['Quasar', 'Electron', 'Vue', 'React', 'OHIF Viewer'],
      },
      {
        name: 'DevOps & MLOps',
        icon: 'pi pi-server',
        items: ['MLflow', 'Docker', 'CI/CD'],
      },
      {
        name: 'Database Management',
        icon: 'pi pi-database',
        items: ['MongoDB', 'PostgreSQL', 'MySQL', 'SQL Server'],
      },
      {
        name: 'Additional Languages',
        icon: 'pi pi-flag',
        items: ['PHP', 'Golang', 'ASP', 'Java', 'C++', 'VB.Net', 'Fortran'],
      },
    ],
    languages: [
      { name: 'Portuguese', level: 'Native', proficiency: 100 },
      { name: 'English', level: 'C2', proficiency: 95 },
      { name: 'Spanish', level: 'B2', proficiency: 65 },
    ],
    education: [
      {
        period: '2015 — 2016',
        title: 'Programming Bootcamp',
        institution: 'Academia de Código',
        location: 'Lisboa, Portugal',
      },
      {
        period: '1997 — 2004',
        title: 'Mechanical Engineering Degree',
        institution: 'Instituto Superior Técnico',
        location: 'Lisboa, Portugal',
      },
    ],
    interests: [
      { icon: 'pi pi-plane', label: 'Private Pilot Licence', desc: 'JAR-FCL PPL(A) — VFR, piston engine' },
      { icon: 'pi pi-send', label: 'Marine Skipper', desc: 'Recreational marine driver — Local skipper' },
      { icon: 'pi pi-hammer', label: 'Carpentry', desc: 'Basic carpentry skills' },
      { icon: 'pi pi-music', label: 'Musical Instruments', desc: 'Construction of musical instruments' },
      { icon: 'pi pi-bolt', label: 'Electronics', desc: 'General electronics enthusiast' },
    ],
  }),
})
