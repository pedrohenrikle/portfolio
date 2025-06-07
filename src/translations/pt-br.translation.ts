import { yearsOfExpirence } from '@/constants';
import { getLinks } from '@/data/links.data';
import { skillsData } from '@/data/skills.data';
import { getProjects } from '@/data/projects.data';
import { getExperiences } from '@/data/experiences.data';

import type { iTranslation } from './translations.types';

export const ptBr: iTranslation = {
  lang: 'pt-br',
  experiencesData: {
    sectionHeading: 'Experiências',
    experiences: getExperiences('pt-br'),
  },
  links: getLinks('pt-br'),
  projects: {
    sectionName: 'Projetos',
    projects: getProjects('pt-br'),
  },
  skillsData: {
    sectionName: 'Minhas Habilidades',
    skills: skillsData,
  },
  intro: {
    contactText: 'Converse Comigo',
    introContent: [
      { type: 'span', className: 'font-bold', content: 'Olá, me chamo Pedro.' },
      { type: 'text', content: ' Eu sou um ' },
      {
        type: 'span',
        className: 'font-bold',
        content: 'desenvolvedor full-stack',
      },
      { type: 'text', content: ' com ' },
      {
        type: 'span',
        className: 'font-bold',
        content: `${yearsOfExpirence} anos`,
      },
      { type: 'text', content: ' de experiência. Eu gosto de construir ' },
      { type: 'span', className: 'italic', content: 'aplicações e interfaces' },
      { type: 'text', content: '. Atualmente meu foco é ' },
      {
        type: 'span',
        className: 'underline',
        content: 'C e Go',
      },
    ],
  },
  about: {
    sectionHeading: 'Sobre mim',
    paragraph1:
      'Olá! Me chamo Pedro, sou apaixonado desde jovem por tecnologia, principalmente sobre ',
    highlight1: 'jogos',
    highlight2: 'lógica.',
    paragraph1_continuation:
      'O carinho se tornou uma paixão quando participei pela primeira vez de uma',
    highlight3: 'aula de algorítmos',
    paragraph1_continuation2: ', despertando meu interesse em',
    highlight4: 'lógica de programação',
    paragraph1_continuation3: '',
    highlight5: '',
    paragraph2: 'Com vontade de aprender, mergulhei no universo do',
    highlight6: 'desenvolvimento de software.',
    paragraph2_continuation: `Ao longo de ${yearsOfExpirence} anos, explorei diversas áreas de conhecimento.`,
    highlight7: '',
    paragraph2_continuation2:
      'Meu objetivo agora é ampliar minha rede de contatos e aprimorar ainda mais minhas habilidades.',
    paragraph3:
      'Estou sempre aberto a novas oportunidades e conexões. Se você está procurando colaborações ou simplesmente deseja trocar ideias, não hesite em me chamar. Vamos construir algo incrível juntos! 👊',
  },
  contactData: {
    sectionHeading: 'Faça Contato',
    contactText: 'Por favor me chame diretamente aqui ',
    orText: 'ou pelo formulário abaixo',
    emailInputPlaceholder: 'Seu email',
    textAreaPlaceholder: 'Sua mensagem',
    submitButtonText: 'Enviar',
  },
  footer: {
    copyRightText: 'Todos os direitos reservados.',
    aboutBoldText: 'Sobre esse site:',
    aboutText:
      'construído com React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, hospedagem na plataforma Vercel.',
  },
};
