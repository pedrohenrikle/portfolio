import type { iProject } from '@/translations/translations.types';
import {
  polls,
  gympassApi
} from '@/assets';

export const engProjects: iProject[] = [
  {
    title: 'GympassAPI',
    description:
      'A API to management of user access to gyms services, providing real-time information on availability and check-ins.',
    tags: ['NodeJS', 'Fastify', 'PrismaORM', 'PostgreSQL', 'Docker'],
    imageUrl: gympassApi,
  },
  {
    title: 'polls',
    description:
      'A API to management the creation and voting on polls in real-time, using WebSockets for updates.',
    imageUrl: polls,
    tags: ['NodeJS', 'Fastify', 'PrismaORM', 'PostgreSQL', 'Redis', 'Docker'],
  },
];

export const ptBrProjects: iProject[] = [
  {
    title: 'GympassAPI',
    description:
      'Uma API de gerenciamento de acesso de usuários a serviços de academias, baseado em localizações e com validade de check-ins',
    tags: ['NodeJS', 'Fastify', 'PrismaORM', 'PostgreSQL', 'Docker'],
    imageUrl: gympassApi,
  },
  {
    title: 'polls',
    description:
      'Uma API para gerenciar a criação e votação em enquetes em tempo real, usando WebSockets para atualizações.',
    imageUrl: polls,
    tags: ['NodeJS', 'Fastify', 'PrismaORM', 'PostgreSQL', 'Redis', 'Docker'],
  },
];

const projectsObj: Record<Langs, iProject[]> = {
  'pt-br': ptBrProjects,
  'eng': engProjects,
};

export const getProjects = (lang: Langs) => projectsObj[lang];
