/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-no-comment-textnodes */
import Presentation from '@/components/Presentation'
import ProfileImage from '@/components/ProfileImage'
import { ProjectMainPage } from '@/components/Projects/ProjectMainPage'
import Skills from '@/components/Skills'
import SocialMedias from '@/components/SocialMedias'
import { MousePointerClick } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen">
        <div className="bg-gradient-to-b from-zinc-900 via-slate-900 to-slate-900">
          <div className="flex w-full px-40 pt-40 pb-20 justify-center">
            <section className="flex flex-col gap-12 flex-1">
              <Presentation
                techs={['Desenvolvedor Full Stack', 'UX/UI', 'API Rest']}
              />

              <div className="flex w-full">
                <p className="flex font-mono text-slate-500 w-4/5">
                  /// Desenvolvedor Full Stack que ama tecnologia, apaixonado em
                  transformar ideias e conceitos em realidade. Ajudando você a
                  se conectar com o mundo!
                </p>
              </div>

              <div>
                <button className="text-3xl duration-200 shadow-inner shadow-purple-950 font-bold px-16 py-1.5 rounded-3xl bg-gradient-to-br hover:from-green-400 hover:to-blue-500 from-pink-500 to-yellow-500 text-zinc-800 hover:text-slate-200 transition-all">
                  CV
                </button>
              </div>
            </section>
            <div className="flex justify-center gap-24 flex-1">
              <ProfileImage />

              <SocialMedias />
            </div>
          </div>
        </div>
        <Skills />

        <div className="flex w-full justify-center py-40">
          <ProjectMainPage />
        </div>

        <div className="w-screen flex flex-col items-center px-40 pt-20 pb-5 bg-slate-950">
          <section className="flex flex-col gap-5 pb-20 font-bold items-center">
            <h1 className="text-5xl">Bora construir um futuro juntos?</h1>
            <Link
              href={
                'mailto:pedro.klein.sl@gmail.com?subject=Construindo um futuro!'
              }
              className="flex w-fit text-3xl duration-200 shadow-inner shadow-slate-950 font-bold px-14 py-5 rounded-full bg-gradient-to-br hover:from-green-400 hover:to-blue-500 from-pink-500 to-yellow-500 text-zinc-800 hover:text-rose-50 transition-all items-center gap-4"
            >
              CLIQUE AQUI
              <MousePointerClick className="w-8 h-8" />
            </Link>
          </section>
          <div className="flex gap-5 font-mono text-slate-600">
            <p>Pedro Henrique Fermino Klein </p>|
            <Link
              target="_blank"
              className="text-cyan-700 hover:text-blue-500 transition-all duration-200"
              href={'https://linktr.ee/pedrohenrikle'}
            >
              {' '}
              Social Medias
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
