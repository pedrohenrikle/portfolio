import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'

import igniteCall from './images/ignitecall.png'
import uploadAi from './images/uploadai.png'
import igniteShop from './images/igniteshop.png'
import nlwSpacetime from './images/nlwspacetime.png'
import designSystem from './images/designsystem.png'
import githubBlog from './images/githubblog.png'
import algorithmInJs from './images/algorithminjs.png'
import { Github, Play } from 'lucide-react'

/* eslint-disable @next/next/no-img-element */
interface ProjectProps {
  linkPreview: string
  linkGithub: string
  imagePreview: StaticImageData
  name?: string
}

export const ProjectsList = [
  {
    id: 1,
    linkPreview: 'https://ignite-call-pink-two.vercel.app/',
    linkGithub: 'https://github.com/pedrohenrikle/ignite-call',
    imagePreview: igniteCall,
  },
  {
    id: 2,
    linkPreview: 'https://algorithms-in-js.vercel.app/',
    linkGithub: 'https://github.com/pedrohenrikle/algorithms-in-js',
    imagePreview: algorithmInJs,
  },
  {
    id: 3,
    name: 'upload.ai',
    linkPreview: '',
    linkGithub: 'https://github.com/pedrohenrikle/upload-ai?tab=readme-ov-file',
    imagePreview: uploadAi,
  },
  {
    id: 4,
    linkPreview: 'https://next-ignite-shop.vercel.app/',
    linkGithub: 'https://github.com/pedrohenrikle/next-ignite-shop',
    imagePreview: igniteShop,
  },
  {
    id: 5,
    linkPreview: 'https://pedrohenrikle.github.io/design-system/',
    linkGithub: 'https://github.com/pedrohenrikle/design-system',
    imagePreview: designSystem,
  },
  {
    id: 6,
    name: 'NLW Spacetime',
    linkPreview: '',
    linkGithub: 'https://github.com/pedrohenrikle/nlw-spacetime',
    imagePreview: nlwSpacetime,
  },
  {
    id: 7,
    linkPreview: 'https://github-blog-lime.vercel.app/',
    linkGithub: 'https://github.com/pedrohenrikle/github-blog',
    imagePreview: githubBlog,
  },
]

export default function Project({
  linkPreview,
  linkGithub,
  imagePreview,
}: ProjectProps) {
  return (
    <article
      id="card"
      className="grid shadow-xl place-items-center w-fit mt-8 bg-gradient-to-tr from-gray-700 via-gray-900 to-slate-800 p-10 rounded-2xl"
    >
      <div className="w-96 relative max-[676px]:w-64">
        <div>
          <Link href={linkGithub} target="_blank">
            <Image
              src={imagePreview}
              alt=""
              className="w-full object-cover aspect-[16/9] rounded-lg opacity-50"
              id="inner"
            />{' '}
          </Link>
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
  )
}
