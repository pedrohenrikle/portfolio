import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'

import { dataSkills } from '../SkillsList/SkillsMarquee'

import igniteCall from './images/ignitecall.png'
import uploadAi from './images/uploadai.png'
import igniteShop from './images/igniteshop.png'
import polls from './images/polls.png'
import algorithmInJs from './images/algorithminjs.png'
import { Github, Play } from 'lucide-react'

/* eslint-disable @next/next/no-img-element */
interface ProjectProps {
  linkPreview: string
  linkGithub: string
  imagePreview: StaticImageData
  name?: string
  technologies?: number[]
  description: string
}

export const ProjectsList = [
  {
    id: 1,
    name: 'Ignite Call',
    description:
      'O Ignite Call é uma aplicação de agendamento de chamadas. Este projeto serviu de base para reforçar os conhecimentos no framework NextJs, junto ao conceitos de API Routes, páginas SSG e SSR. Além disso, a aplicação possui conectividade com o GoogleAPIs, podendo marcar agendamentos no Google Calendar, além de gerar salas no Google Meet para as reuniões automaticamente.',
    linkPreview: 'https://ignite-call-pink-two.vercel.app/',
    linkGithub: 'https://github.com/pedrohenrikle/ignite-call',
    imagePreview: igniteCall,
    technologies: [1, 2, 3, 4, 5, 7, 8, 9, 12, 15],
  },
  {
    id: 2,
    name: 'Algorithms in JavaScript',
    description:
      'Este é um projeto pessoal que surgiu de uma necessidade. Buscando aprender sobre algorítmos de ordenação e busca, vi que normalmente são usadas outras linguagens de exemplo, como Python, C, C++ e Java. A partir disso, nasceu a ideia de trazer um local de consulta e aprendizado para a comunidade no ambiente JavaScript.',
    linkPreview: 'https://algorithms-in-js.vercel.app/',
    linkGithub: 'https://github.com/pedrohenrikle/algorithms-in-js',
    imagePreview: algorithmInJs,
    technologies: [1, 2, 3, 4, 5, 8, 9],
  },
  {
    id: 3,
    name: 'upload.ai',
    description:
      'O upload.ai é uma aplicação com integração a API da OpenAI para realizar requisições a IA. Aqui, podemos fazer o upload do vídeo desejado e passar um contexto para melhor precisão na resposta. Podemos (até o momento) gerar títulos de vídeos e descrições.',
    linkPreview: '',
    linkGithub: 'https://github.com/pedrohenrikle/upload-ai?tab=readme-ov-file',
    imagePreview: uploadAi,
    technologies: [1, 2, 3, 4, 5, 8, 9, 11, 12, 15],
  },
  {
    id: 4,
    name: 'Polls',
    description:
      'Este é um projeto back-end do desenvolvimento de uma API para criação, votação e checagem em tempo real via WebSockets de votações.',
    linkPreview: '',
    linkGithub: 'https://github.com/pedrohenrikle/polls',
    imagePreview: polls,
    technologies: [4, 9, 11, 12, 13, 14, 15],
  },
  {
    id: 5,
    name: 'Ignite Shop',
    description:
      'O Ignite Shop é uma loja online para venda de camisetas. Este projeto serviu de base para aprender os fundamentos do framework NextJs, junto ao conceitos de API Routes, Fallback e páginas SSG e SSR 💡.',
    linkPreview: 'https://next-ignite-shop.vercel.app/',
    linkGithub: 'https://github.com/pedrohenrikle/next-ignite-shop',
    imagePreview: igniteShop,
    technologies: [1, 2, 3, 4, 5, 7, 9],
  },
]

export default function Project({
  name,
  linkPreview,
  linkGithub,
  imagePreview,
  technologies,
  description,
}: ProjectProps) {
  return (
    <div className="flex items-center gap-10 antialiased">
      <article
        id="card"
        className="grid shadow-xl place-items-center w-fit mt-8 bg-gradient-to-tr from-gray-700 via-gray-900 to-slate-800 p-10 rounded-2xl"
      >
        <div className="w-96 relative max-[676px]:w-64">
          <div>
            <Image
              src={imagePreview}
              alt=""
              className="w-full object-cover aspect-[16/9] rounded-lg opacity-50 cursor-default"
              id="inner"
            />{' '}
          </div>

          <Link
            href={linkPreview}
            target="_blank"
            className={!linkPreview ? 'pointer-events-none' : ''}
            aria-disabled={!linkPreview}
            tabIndex={!linkPreview ? -1 : undefined}
          >
            {!linkPreview ? (
              ''
            ) : (
              <h1
                id="title"
                className="max-[676px]:-mt-6 flex text-slate-300 border border-opacity-30 border-slate-300 font-bold w-fit h-fit text-2xl gap-3 items-center justify-center mx-auto inset-0 absolute rounded-2xl box-shadow from-gray-900 to-gray-950 bg-gradient-to-br hover:from-green-400 hover:to-blue-500 hover:text-slate-900 px-6 py-4"
              >
                Test!
                <Play />
              </h1>
            )}
          </Link>

          <Link href={linkGithub} target="_blank">
            <button
              id="title"
              className="flex text-slate-300 font-bold w-fit h-fit text-2xl gap-3 ml-auto inset-0 absolute rounded-2xl box-shadow bg-gray-950 border border-opacity-30 border-slate-300 px-4 py-4 mt-28 max-[676px]:mt-16 mr-2 hover:text-gray-950 hover:bg-slate-300"
            >
              <Github />
            </button>
          </Link>
        </div>
      </article>

      <div className="hidden lg:flex lg:flex-col">
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl font-semibold">{name}</h1>
          <p className="leading-relaxed text-base opacity-90">{description}</p>
          <div className="w-full bg-white h-[1px] opacity-20" />
          <div className="flex gap-5 w-full">
            {technologies?.map((techId) => {
              const matchingSkill = dataSkills.find(
                (skill) => skill.id === techId,
              )
              return matchingSkill ? (
                <div
                  key={matchingSkill.id}
                  className="hover:scale-125 transition-all duration-500"
                >
                  <Image
                    key={matchingSkill.id}
                    src={matchingSkill.img}
                    height={45}
                    width={45}
                    alt=""
                  />
                </div>
              ) : null
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
