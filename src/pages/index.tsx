/* eslint-disable react/jsx-no-comment-textnodes */
import Presentation from '@/components/Presentation'
import ProfileImage from '@/components/ProfileImage'
import Project from '@/components/Project'
import Skills from '@/components/Skills'
import SocialMedias from '@/components/SocialMedias'

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-b from-zinc-900 via-slate-900 to-slate-900">
        <div className="flex w-full px-40 pt-40 pb-20 justify-center">
          <section className="flex flex-col gap-12 flex-1">
            <Presentation
              techs={['Desenvolvedor Full Stack', 'UX/UI', 'API Rest']}
            />

            <div className="flex w-full">
              <p className="flex font-mono text-slate-500 w-4/5">
                /// Desenvolvedor Full Stack que ama tecnologia, apaixonado em
                transformar ideias e conceitos em realidade. Ajudando você a se
                conectar com o mundo!
              </p>
            </div>

            <div>
              <button className="text-3xl duration-200 shadow-inner shadow-purple-950 font-bold px-16 py-1.5 rounded-3xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 hover:text-zinc-800 transition-all">
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
        <div className="flex-1 px-40">
          <h1 className="text-xl font-mono">
            <span className="text-pink-400">const</span>{' '}
            <span className="text-green-400">Projects</span>{' '}
            <span className="text-pink-400">=</span> [
          </h1>
          <div className="flex flex-wrap gap-16">
            <Project />
            <Project />
            <Project />
            <Project />
          </div>
        </div>
      </div>
    </>
  )
}
