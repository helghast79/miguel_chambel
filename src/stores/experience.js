import { defineStore } from 'pinia'

export const useExperienceStore = defineStore('experience', {
  state: () => ({
    jobs: [
      {
        period: '2019 — Present',
        role: 'Software Engineer',
        company: 'Fundação Champalimaud — CCIG',
        location: 'Lisboa, Portugal',
        current: true,
        description:
          'Collaborating on medical imaging projects, implementing ML/DL models and data science tools for research and clinical platforms.',
        achievements: [
          'Developed and integrated software systems for medical imaging and PACS infrastructure (backend & frontend)',
          'Lead DevOps and MLOps practices within the research group',
          'Administer databases, ensuring data curation and secure storage',
          'Oversee hardware and software management for workstations and servers',
          'Support master\'s and PhD students with medical systems and data management',
          'Participated in European and worldwide consortiums (Bounce, ProCancer-i, ReStage)',
        ],
        tech: ['JavaScript', 'Node.js', 'Python', 'Vue', 'React', 'Docker', 'MLflow', 'PostgreSQL', 'MongoDB', 'OHIF Viewer'],
      },
      {
        period: '2016 — 2019',
        role: 'Lead Programmer',
        company: 'Delta Soluções',
        location: 'Lisboa, Portugal',
        current: false,
        description:
          'Led programming tasks including enhancements, maintenance, and support for client applications and interfaces.',
        achievements: [
          'Architected and participated in the design, deployment, and testing of client/server web applications',
          'Developed, maintained, and supported application programs for administrative, web, and mobile systems using Node.js',
          'Mentored junior programmers in programming methodologies and best practices',
        ],
        tech: ['Node.js', 'JavaScript', 'PHP', 'MySQL', 'SQL Server'],
      },
      {
        period: '2013 — 2015',
        role: 'Mechanical Engineer — Superintendent',
        company: 'SCMA — Sociedade de Consultores Marítimos Lda.',
        location: 'Lisboa, Portugal',
        current: false,
        description:
          'Responsible for the maintenance of passenger ships according to their maintenance plan.',
        achievements: [
          'Coordination of statutory and class surveys',
          'Elaboration of inspection reports and resolution of technical nonconformities',
          'Production of technical and safety drawings (fire control plan, damage control plan, evacuation plan, etc.)',
        ],
        tech: ['Technical Drawing', 'Naval Architecture', 'Safety Planning'],
      },
      {
        period: '2009 — 2013',
        role: 'Commercial Sales Representative',
        company: 'Cemetal — Centro Experimental de Transformaciones Metalurgicas S.L.',
        location: 'Madrid, Spain',
        current: false,
        description:
          'Business prospection for machining of automotive parts in series.',
        achievements: [
          'Negotiation of procurement contracts of automotive parts',
          'Customer management in Portugal',
        ],
        tech: ['B2B Sales', 'Contract Negotiation'],
      },
      {
        period: '2006 — 2008',
        role: 'Engineer',
        company: 'Holland Trading, Lda.',
        location: 'Malveira, Portugal',
        current: false,
        description:
          'Development of floriculture projects and supporting infrastructures.',
        achievements: [
          'Presentation of investment projects to government entities in Azores Islands',
        ],
        tech: ['Project Management', 'Infrastructure Design'],
      },
      {
        period: '2005 — 2006',
        role: 'Technical Sales Engineer',
        company: 'Hexatool, S.A.',
        location: 'Marinha Grande, Portugal',
        current: false,
        description:
          'Business prospection and technical support to the metal industry in the region of Lisbon.',
        achievements: [
          'Preparation and negotiation of business proposals',
          'Technical support to the metal industry (CNC Machining area)',
        ],
        tech: ['CNC Machining', 'Technical Support', 'Sales'],
      },
    ],
  }),
})
