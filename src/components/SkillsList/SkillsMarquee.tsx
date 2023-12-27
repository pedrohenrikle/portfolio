import Marquee from 'react-fast-marquee'
import { Element } from 'react-scroll'
import { Technologie } from './Technologie'
import react from './images/react.svg'
import nodejs from './images/nodejs.svg'
import js from './images/js.svg'
import express from './images/express.svg'
import ts from './images/ts.svg'
import html from './images/html.svg'
import css from './images/css.svg'
import tailwind from './images/tailwind.svg'
import nextjs from './images/nextjs.svg'
import prisma from './images/prisma.jpg'
import sqlite from './images/sqlite.png'

const dataSkills = [
  {
    id: '1',
    skill: 'HTML',
    img: html,
  },
  {
    id: '2',
    skill: 'CSS',
    img: css,
  },
  {
    id: '3',
    skill: 'Javascript',
    img: js,
  },
  {
    id: '4',
    skill: 'Typescript',
    img: ts,
  },
  {
    id: '5',
    skill: 'ReactJS',
    img: react,
  },
  {
    id: '6',
    skill: 'React Native',
    img: react,
  },
  {
    id: '7',
    skill: 'NodeJS',
    img: nodejs,
  },
  {
    id: '8',
    skill: 'express',
    img: express,
  },
  {
    id: '9',
    skill: 'NextJS',
    img: nextjs,
  },
  {
    id: '10',
    skill: 'Tailwind',
    img: tailwind,
  },
  {
    id: '11',
    skill: 'Prisma',
    img: prisma,
  },
  {
    id: '12',
    skill: 'SQLite',
    img: sqlite,
  },
]

export const SkillsMarquee = () => {
  return (
    <Element name="Skills" className="w-full">
      <div className="mt-0 xl:mt-0 py-2 w-full">
        <div className="flex w-full flex-center-col md:flex-center-row gap-2 md:gap-4 py-2 md:py-4">
          <Marquee autoFill speed={60}>
            {dataSkills.map(({ id, skill, img }) => (
              <Technologie key={id} srcImg={img} skill={skill} />
            ))}
          </Marquee>
        </div>
      </div>
    </Element>
  )
}
