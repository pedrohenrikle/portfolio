import Image from 'next/image'

export default function ProfileImage() {
  return (
    <div className="flex justify-center">
      <div className="p-1">
        <Image
          className="rounded-full border-dashed border-pink-500 border-4"
          alt="Profile picture"
          src={'https://github.com/pedrohenrikle.png'}
          width={400}
          height={400}
        />
      </div>
    </div>
  )
}
