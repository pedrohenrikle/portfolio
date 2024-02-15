/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-no-comment-textnodes */
import { Footer } from '@/components/Footer'
import Presentation from '@/components/Presentation'
import ProfileImage from '@/components/ProfileImage'
import { ProjectMainPage } from '@/components/Projects/ProjectMainPage'
import Skills from '@/components/Skills'
import SocialMedias from '@/components/SocialMedias'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | Pedro Henrique Fermino Klein</title>
      </Head>

      <div className="h-full w-">
        <div className="bg-gradient-to-b from-zinc-900 via-slate-900 to-slate-900">
          <div className="flex w-full lg:px-40 lg:pt-40 pb-20 justify-center md:px-20 md:pt-20 max-[767px]:px-10 max-[767px]:pt-10">
            <section className="flex flex-col gap-12 flex-1 max-[767px]:flex-2/3 max-[767px]:gap-6 max-[767px]:">
              <Presentation
                techs={['Full Stack Developer', 'UX/UI', 'API Rest']}
              />

              <div className="flex w-full">
                <p className="flex font-mono text-slate-500 w-4/5 text-xs md:text-xl">
                  {'/*'} Desenvolvedor Full Stack e amante de tecnologia,
                  mergulho de cabeça na missão de transformar ideias em
                  realidade. Sou movido pela paixão de aprender os conceitos por
                  trás das coisas! {'*/'}
                </p>
              </div>

              <Link
                href={
                  'https://drive.google.com/uc?export=download&id=1nYYJy3Im6W7CiP06eU7AGwYRoI8Hwt6A'
                }
              >
                <button className="text-3xl duration-200 shadow-inner shadow-purple-950 font-bold px-16 py-1.5 rounded-3xl bg-gradient-to-br hover:from-green-400 hover:to-blue-500 from-pink-500 to-yellow-500 text-zinc-800 hover:text-slate-200 transition-all">
                  CV
                </button>
              </Link>
            </section>
            <div className="flex justify-center lg:gap-24 md:gap-10 lg:flex-1 max-[600px]:gap-24">
              <ProfileImage />

              <SocialMedias />
            </div>
          </div>
        </div>

        <Skills />

        <div className="flex w-full py-28">
          <ProjectMainPage />
        </div>

        <Footer />
      </div>
    </>
  )
}
