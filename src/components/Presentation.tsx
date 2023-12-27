import Typewriter from 'typewriter-effect'

interface PresentationProps {
  techs: string[]
}

export default function Presentation({ techs }: PresentationProps) {
  return (
    <div>
      <div className="font-bold xl:text-5xl max-[767px]:text-3xl bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent bg-clip-text">
        Pedro Henrique Fermino Klein
      </div>

      <div className="flex w-fit h-fit lg:text-3xl max-[767px]:text-lg mt-6 font-bold">
        <div className="flex gap-2 font-mono">
          $
          <Typewriter
            options={{
              strings: techs,
              autoStart: true,
              loop: true,
              delay: 75,
              cursor: '|',
            }}
          />
        </div>
      </div>
    </div>
  )
}
