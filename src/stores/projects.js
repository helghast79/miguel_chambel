import { defineStore } from 'pinia'

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    projects: [
      {
        title: 'ProCancer-I',
        subtitle: 'European AI Platform for Prostate Cancer',
        description:
          'Participated in a European consortium developing an AI platform for prostate cancer imaging analysis, contributing to ML model integration and data management workflows.',
        tags: ['Medical Imaging', 'AI/ML', 'Consortium'],
        icon: 'pi pi-heart-fill',
        gradient: 'gradient-2',
      },
      {
        title: 'Bounce',
        subtitle: 'Breast Cancer Recovery Prediction',
        description:
          'Contributed to a worldwide consortium building predictive models for breast cancer patient recovery, integrating clinical and imaging data into research platforms.',
        tags: ['Medical Imaging', 'Predictive Models', 'Research'],
        icon: 'pi pi-chart-line',
        gradient: 'gradient-1',
      },
      {
        title: 'ReStage',
        subtitle: 'Cancer Staging & Research Platform',
        description:
          'Worked on a platform supporting cancer staging research, with tools for medical imaging data curation and secure storage across institutional infrastructure.',
        tags: ['Research', 'Data Curation', 'PACS'],
        icon: 'pi pi-database',
        gradient: 'gradient-3',
      },
      {
        title: 'PACS Infrastructure',
        subtitle: 'Medical Imaging & PACS Systems',
        description:
          'Developed and integrated software systems for medical imaging and PACS infrastructure, supporting both backend services and frontend viewers for clinical and research use.',
        tags: ['PACS', 'Full-Stack', 'OHIF Viewer'],
        icon: 'pi pi-desktop',
        gradient: 'gradient-1',
      },
      {
        title: 'MLOps Pipeline',
        subtitle: 'ML Model Lifecycle Management',
        description:
          'Led DevOps and MLOps practices within the research group, building pipelines with MLflow and Docker for reproducible ML model training, tracking, and deployment.',
        tags: ['MLOps', 'Docker', 'MLflow'],
        icon: 'pi pi-cog',
        gradient: 'gradient-2',
      },
      {
        title: 'Client/Server Web Apps',
        subtitle: 'Full-Stack Application Architecture',
        description:
          'Architected, deployed, and tested client/server web applications for administrative, web, and mobile systems using Node.js and related tools at Delta Soluções.',
        tags: ['Node.js', 'Architecture', 'Web Apps'],
        icon: 'pi pi-globe',
        gradient: 'gradient-3',
      },
    ],
  }),
})
