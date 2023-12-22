import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'

import igniteCall from './images/ignitecall.png'
import uploadAi from './images/uploadai.png'
import igniteShop from './images/igniteshop.png'
import nlwSpacetime from './images/nlwspacetime.png'
import designSystem from './images/designsystem.png'
import githubBlog from './images/githubblog.png'
import testme from './images/testme.png'

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
    linkPreview: 'https://next-ignite-shop.vercel.app/',
    linkGithub: 'https://github.com/pedrohenrikle/next-ignite-shop',
    imagePreview: igniteShop,
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
    linkPreview: 'https://pedrohenrikle.github.io/design-system/',
    linkGithub: 'https://github.com/pedrohenrikle/design-system',
    imagePreview: designSystem,
  },
  {
    id: 5,
    name: 'NLW Spacetime',
    linkPreview: '',
    linkGithub: 'https://github.com/pedrohenrikle/nlw-spacetime',
    imagePreview: nlwSpacetime,
  },
  {
    id: 6,
    linkPreview: 'https://github-blog-lime.vercel.app/',
    linkGithub: 'https://github.com/pedrohenrikle/github-blog',
    imagePreview: githubBlog,
  },
]

export default function Project({
  linkPreview,
  linkGithub,
  imagePreview,
  name,
}: ProjectProps) {
  return (
    <article
      id="card"
      className="grid shadow-xl place-items-center w-fit mt-8 bg-gradient-to-tr from-gray-700 via-gray-900 to-slate-800 p-10 rounded-2xl"
    >
      <div className="w-96 relative">
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
            <h1
              id="title"
              className="absolute inset-0 mx-auto w-fit mt-10 h-fit bg-gray-50 text-2xl text-cyan-950 font-bold px-5 py-3 rounded-lg"
            >
              {name}
            </h1>
          ) : (
            <Image
              height={500}
              width={500}
              src={testme}
              alt=""
              className="w-48 mx-auto inset-0 absolute rounded-2xl box-shadow"
              id="title"
            />
          )}
        </Link>
      </div>
    </article>
  )
}
