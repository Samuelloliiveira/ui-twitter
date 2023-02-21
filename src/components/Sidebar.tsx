import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  Pencil,
  User
} from 'phosphor-react'
import { Link, NavLink } from 'react-router-dom'

import twitterLogo from '../assets/logo-twitter.svg'

export function Sidebar() {
  return (
    <aside className="py-6 px-5 flex flex-col gap-8 border-r border-gray-secondary max-md:px-3 max-md:items-center" >
      <img
        src={twitterLogo}
        alt="twitter logo"
        className="w-8 h-8"
      />

      <nav className="flex flex-col gap-8">
        <NavLink
          to="/"
          className="flex items-center gap-5 no-underline"
        >
          <House size={25} weight="fill" />
          <span className="max-md:hidden text-xl">
            Home
          </span>
        </NavLink>
        <Link
          to="#"
          className="flex items-center gap-5 no-underline"
        >
          <Hash size={25} />
          <span className="max-md:hidden text-xl">
            Explore
          </span>
        </Link>
        <Link
          to="#"
          className="flex items-center gap-5 no-underline"
        >
          <Bell size={25} />
          <span className="max-md:hidden text-xl">
            Notifications
          </span>
        </Link>
        <Link
          to="#"
          className="flex items-center gap-5 no-underline"
        >
          <Envelope size={25} />
          <span className="max-md:hidden text-xl">
            Messages
          </span>
        </Link>
        <Link
          to="#"
          className="flex items-center gap-5 no-underline"
        >
          <BookmarkSimple size={25} />
          <span className="max-md:hidden text-xl">
            Bookmarks
          </span>
        </Link>
        <Link
          to="#"
          className="flex items-center gap-5 no-underline"
        >
          <FileText size={25} />
          <span className="max-md:hidden text-xl">
            Lists
          </span>
        </Link>
        <Link
          to="#"
          className="flex items-center gap-5 no-underline"
        >
          <User size={25} />
          <span className="max-md:hidden text-xl">
            Profile
          </span>
        </Link>
        <Link
          to="#"
          className="flex items-center gap-5 no-underline"
        >
          <DotsThreeCircle size={25} />
          <span className="max-md:hidden text-xl">
            More
          </span>
        </Link>
      </nav>

      <button
        className="bg-blue-primary rounded-full p-4 w-full text-white font-black border-0 hover:brightness-90"
      >
        <Pencil size={25} className="md:hidden" />
        <span className="max-md:hidden text-xl">
          Tweet
        </span>
      </button>
    </aside >
  )
}

// Contexto -> Existe locais no React que conseguimos ter acessos a informações e em outros não.