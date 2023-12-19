import Image from 'next/image'

export default function ProfileImage() {
  return (
    <div className="flex justify-center">
      <div className="p-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full transition-all">
        <Image
          className="rounded-full"
          alt="Profile picture"
          src={'https://github.com/pedrohenrikle.png'}
          width={400}
          height={400}
        />
      </div>
    </div>
  )
}
