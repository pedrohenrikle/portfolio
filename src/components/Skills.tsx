import { SkillsMarquee } from './SkillsList/SkillsMarquee'

export default function Skill() {
  return (
    <>
      <div className="pl-40 font-mono">
        <h1 className="text-xl">
          <span className="text-pink-400">const</span>{' '}
          <span className="text-green-400">Techs</span>{' '}
          <span className="text-pink-400">=</span> [
        </h1>
      </div>
      <div className="flex w-full bg-gradient-to-t to-[#000A1D] from-[rgb(0,0,0,0.3)] justify-center align-middles">
        <SkillsMarquee />
      </div>
      <p className="pl-40 text-2xl">]</p>
    </>
  )
}
