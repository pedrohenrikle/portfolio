import { FormButton } from './FormButton'
import SocialMedias from './SocialMedias'

export function Footer() {
  return (
    <div className="w-screen flex flex-col items-center px-10 pt-14 md:pt-20 pb-5 bg-slate-950">
      <section className="flex flex-col gap-5 pb-20 font-bold items-center">
        <h1 className="text-3xl text-center md:text-5xl">
          Bora construir um futuro juntos?
        </h1>
        <FormButton />
      </section>
      <div className="mb-10">
        <SocialMedias vertical={false} />
      </div>
      <div className="flex gap-5 font-mono text-slate-600 max-[676px]:text-base">
        <p className="flex-1">Pedro Henrique Fermino Klein </p>
      </div>
    </div>
  )
}
