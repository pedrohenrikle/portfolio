import { SkillsMarquee } from './SkillsList/SkillsMarquee'

export default function Skill() {
  return (
    <>
      <div className="px-40 font-mono ">
        <div>
          <h1 className="text-xl">
            <span className="text-pink-400">const</span>{' '}
            <span className="text-green-400">Techs</span>{' '}
            <span className="text-pink-400">=</span> [
          </h1>
        </div>
        <div className="flex  border-gray-500 border-l-2 border-opacity-30 w-full bg-gradient-to-t to-[#000A1D] from-[rgb(0,0,0,0.3)] justify-center align-middles">
          <SkillsMarquee />
        </div>
        <p className="text-2xl">]</p>
      </div>
    </>
  )
}
