import Marquee from 'react-fast-marquee'
import { Element } from 'react-scroll'
import { Technologie } from './Technologie'
import React from './images/react.svg'
import nodejs from './images/nodeJS.svg'
import js from './images/js.svg'
import express from './images/expressjs.svg'
import ts from './images/ts.svg'
import html from './images/html.svg'
import css from './images/css.svg'
import tailwind from './images/tailwindcss.svg'
import nextjs from './images/nextjs.svg'

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
    img: React,
  },

  {
    id: '6',
    skill: 'NodeJS',
    img: nodejs,
  },
  {
    id: '7',
    skill: 'express',
    img: express,
  },
  {
    id: '8',
    skill: 'NextJS',
    img: nextjs,
  },
  {
    id: '9',
    skill: 'Tailwind',
    img: tailwind,
  },
]

export const SkillsMarquee = () => {
  return (
    <Element name="Skills">
      <div className="mt-0 xl:mt-0 py-2 ">
        <div className="flex-center-col md:flex-center-row gap-2 md:gap-4 py-2 md:py-4 w-screen p-48">
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
