import Image from 'next/image'

interface TechnologieProps {
  skill: string
  srcImg: string
}

export const Technologie = ({ skill, srcImg }: TechnologieProps) => {
  return (
    <div className=" min-w-[100px] md:mr-8 flex md:flex-col justify-center items-center">
      <img
        width={30}
        height={30}
        alt={skill}
        className="block w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] mt-2 object-contain hover:scale-125 transition-all duration-200"
        src={srcImg}
      />
      <p className=" tracking-widest font-semibold text-[.625rem] md:text-xs">
        {skill}
      </p>
    </div>
  )
}
