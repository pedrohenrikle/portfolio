import type { iProject } from '@/translations/translations.types';
import {
  gssh,
  gympassApi
} from '@/assets';

export const engProjects: iProject[] = [
  {
    title: 'gSSH',
    description:
    'A remote connection tool made in Go using gRPC to streamline remote access and automate command execution across servers.',
    imageUrl: gssh,
    tags: ['Go', 'gRPC', 'PTY', 'TLS', 'Viper', 'Docker'],
  },
  {
    title: 'GympassAPI',
    description:
      'A API to management of user access to gyms services, providing real-time information on availability and check-ins.',
    tags: ['NodeJS', 'Fastify', 'PrismaORM', 'PostgreSQL', 'Docker'],
    imageUrl: gympassApi,
  },
];

export const ptBrProjects: iProject[] = [
  {
    title: 'gSSH',
    description:
    'Uma ferramenta de conexão remota feita em Go usando gRPC para agilizar o acesso remoto e automatizar a execução de comandos entre servidores.',
    imageUrl: gssh,
    tags: ['Go', 'gRPC', 'PTY', 'TLS', 'Viper', 'Docker'],
  },
  {
    title: 'GympassAPI',
    description:
      'Uma API de gerenciamento de acesso de usuários a serviços de academias, baseado em localizações e com validade de check-ins',
    tags: ['NodeJS', 'Fastify', 'PrismaORM', 'PostgreSQL', 'Docker'],
    imageUrl: gympassApi,
  },
];

const projectsObj: Record<Langs, iProject[]> = {
  'pt-br': ptBrProjects,
  'eng': engProjects,
};

export const getProjects = (lang: Langs) => projectsObj[lang];
