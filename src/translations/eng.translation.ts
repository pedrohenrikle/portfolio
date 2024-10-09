import { yearsOfExpirence } from '@/constants';
import { getLinks } from '@/data/links.data';
import { skillsData } from '@/data/skills.data';
import { getProjects } from '@/data/projects.data';
import { getExperiences } from '@/data/experiences.data';

import { iTranslation } from './translations.types';

export const eng: iTranslation = {
  lang: 'eng',
  experiencesData: {
    sectionHeading: 'Experiences',
    experiences: getExperiences('eng'),
  },
  links: getLinks('eng'),
  projects: {
    sectionName: 'Projects',
    projects: getProjects('eng'),
  },
  skillsData: {
    sectionName: 'My Skils',
    skills: skillsData,
  },
  intro: {
    contactText: 'Contact Me',
    introContent: [
      {
        type: 'span',
        className: 'font-bold',
        content: "Hello, I'm Pedro.",
      },
      {
        type: 'text',
        content: " I'm a ",
      },
      {
        type: 'span',
        className: 'font-bold',
        content: 'full-stack engineer',
      },
      {
        type: 'text',
        content: ' with ',
      },
      {
        type: 'span',
        className: 'font-bold',
        content: `${yearsOfExpirence} years`,
      },
      {
        type: 'text',
        content: ' of experience. I enjoy building ',
      },
      {
        type: 'span',
        className: 'italic',
        content: 'apps and interfaces',
      },
      {
        type: 'text',
        content: '. My focus is ',
      },
      {
        type: 'span',
        className: 'underline',
        content: 'NodeJS, Java and C#',
      },
    ],
  },
  about: {
    sectionHeading: 'About me',
    paragraph1:
      "Hello! I'm Pedro, and I've been passionate about technology, especially",
    highlight1: 'games',
    highlight2: 'logic',
    paragraph1_continuation:
      'since I was young. This passion became even stronger when I participated in my first',
    highlight3: 'algorithms class,',
    paragraph1_continuation2: ' sparking my interest in',
    highlight4: 'programming logic',
    paragraph1_continuation3: '',
    highlight5: '',
    paragraph2:
      'With a strong desire to learn, I dove into the world of',
    highlight6: 'software development',
    paragraph2_continuation:
      `Over the past ${yearsOfExpirence} years, I've explored various areas of knowledge`,
    highlight7: '',
    paragraph2_continuation2:
      'My current goal is to expand my network and further enhance my skills.',
    paragraph3:
      "I'm always open to new opportunities and connections. If you're looking for collaborations or just want to exchange ideas, feel free to reach out. Let's build something amazing together! 👊",
  },
  contactData: {
    sectionHeading: 'Contact Me',
    contactText: 'Please contact me directly at ',
    orText: 'or through this form.',
    emailInputPlaceholder: 'Your email',
    textAreaPlaceholder: 'Your message',
    submitButtonText: 'Send',
  },
  footer: {
    copyRightText: 'All rights reserved.',
    aboutBoldText: 'About this website:',
    aboutText:
      'built with React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.',
  },
};
