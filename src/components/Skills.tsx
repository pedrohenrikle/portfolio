import { SkillsMarquee } from './SkillsList/SkillsMarquee'

export default function Skill() {
  return (
    <>
      <div className="px-10 lg:px-40 font-mono flex flex-col">
        <div>
          <h1 className="text-base md:text-xl font-mono">
            <span className="text-pink-400">const</span>{' '}
            <span className="text-green-400">Techs</span>{' '}
            <span className="text-pink-400">=</span> [
          </h1>
        </div>
        <div className="flex w-full border-gray-500 border-l-2 border-opacity-30 bg-gradient-to-t to-[#000A1D] from-[rgb(0,0,0,0.3)] justify-center align-middles">
          <SkillsMarquee />
        </div>
        <p className="text-base md:text-xl font-mono">]</p>
      </div>
    </>
  )
}
