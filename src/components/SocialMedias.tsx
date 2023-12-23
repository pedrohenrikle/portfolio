import { Github, Linkedin, Mail, Instagram, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function SocialMedias() {
  return (
    <div>
      <ul className="flex flex-col justify-between h-full">
        <Link href={'https://github.com/pedrohenrikle'} target="_blank">
          <li className="justify-center align-middle bg-gray-700 p-4 rounded-full hover:text-gray-100 hover:bg-gray-800 hover:scale-125 transition-all">
            <Github />
          </li>
        </Link>
        <Link href={'https://www.linkedin.com/in/pedro-klein/'} target="_blank">
          <li className="justify-center align-middle bg-gray-700 p-4 rounded-full hover:text-blue-600 hover:bg-gray-800 hover:scale-125 transition-all">
            <Linkedin />
          </li>
        </Link>
        <Link href={'mailto:pedro.klein.sl@gmail.com'} target="_blank">
          <li className="justify-center align-middle bg-gray-700 p-4 rounded-full hover:text-red-600 hover:bg-gray-800 hover:scale-125 transition-all">
            <Mail />
          </li>
        </Link>
        <Link href={'https://www.instagram.com/pedro.klein1/'} target="_blank">
          <li className="justify-center align-middle bg-gray-700 p-4 rounded-full hover:text-pink-500 hover:bg-gray-800 hover:scale-125 transition-all">
            <Instagram />
          </li>
        </Link>
        <Link href={'https://twitter.com/pedro_klein1'} target="_blank">
          <li className="justify-center align-middle bg-gray-700 p-4 rounded-full hover:text-sky-500 hover:bg-gray-800 hover:scale-125 transition-all">
            <Twitter />
          </li>
        </Link>
      </ul>
    </div>
  )
}
