import React from 'react';
import { FaReact, FaServer } from 'react-icons/fa';
import { CgWorkAlt } from 'react-icons/cg';
import { LuGraduationCap } from 'react-icons/lu';

import type { iExperience } from '@/translations/translations.types';

export const engExperiences: iExperience[] = [
  {
    title: 'Freelances',
    location: 'From Home',
    description:
      'After 2 years of intensive study, I was able to complete the web development foundation',
    icon: React.createElement(LuGraduationCap),
    date: '2020 - 2022',
  },
  {
    title: 'Web Development with PHP',
    location: 'Senac-RS, Rio Grande do Sul, Brazil',
    description:
      'I did the course, where I was certified with knowledge of PHP, MySQL database and the use of basic web languages.',
    icon: React.createElement(FaServer),
    date: '2022',
  },
  {
    title: 'Full-Stack Developer',
    location: 'From Home',
    description:
      "Currently I am a full stack developer developing personal projects. My stack includes ReactJS, NodeJS, TypeScript, Tailwind, PrismaORM, Java, SpringFramework, Python, PostgreSQL and Redis. I am open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: '2023 - present',
  },
];

export const ptBrExperiences: iExperience[] = [
  {
    title: 'Estudo próprio',
    location: 'De Casa',
    description:
      'Após 2 anos de estudo intensivo, consegui concluir a base do desenvolvimento web',
    icon: React.createElement(LuGraduationCap),
    date: '2020 - 2022',
  },
  {
    title: 'Desenvolvimento web com PHP',
    location: 'Senac-RS, Rio Grande do Sul, Brasil',
    description:
      'Fiz o curso, onde fui certificado com conhecimentos de PHP, banco MySQL e o uso das linguagens básicas da web.',
    icon: React.createElement(FaServer),
    date: '2022',
  },
  {
    title: 'Desenvolvedor Full Stack',
    location: 'De Casa',
    description:
      'Atualmente sou um desenvolvedor full stack desenvolvendo projetos pessoais. Minha stack inclui ReactJS, NodeJS, TypeScript, Tailwind, PrismaORM, Java, SpringFramework, Python, PostgreSQL e Redis. Estou aberto a oportunidades em período integral.',
    icon: React.createElement(FaReact),
    date: '2023 - presente',
  },
];

const experiencesObj: Record<Langs, iExperience[]> = {
  'pt-br': ptBrExperiences,
  'eng': engExperiences,
};

export const getExperiences = (lang: Langs) => experiencesObj[lang];