import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  User
} from 'phosphor-react'
import { Link, NavLink } from 'react-router-dom'

import twitterLogo from '../assets/logo-twitter.svg'

export function Sidebar() {
  return (
    <aside className="py-6 px-5 flex flex-col gap-8" >
      <img
        src={twitterLogo}
        alt="twitter logo"
        className="w-8 h-8"
      />

      <nav className="flex flex-col gap-8">
        <NavLink
          to="/"
          className="flex items-center gap-5 text-xl no-underline"
        >
          <House size={25} weight="fill" />
          Home
        </NavLink>
        <Link
          to="#"
          className="flex items-center gap-5 text-xl no-underline"
        >
          <Hash size={25} />
          Explore
        </Link>
        <Link
          to="#"
          className="flex items-center gap-5 text-xl no-underline"
        >
          <Bell size={25} />
          Notifications
        </Link>
        <Link
          to="#"
          className="flex items-center gap-5 text-xl no-underline"
        >
          <Envelope size={25} />
          Messages
        </Link>
        <Link
          to="#"
          className="flex items-center gap-5 text-xl no-underline"
        >
          <BookmarkSimple size={25} />
          Bookmarks
        </Link>
        <Link
          to="#"
          className="flex items-center gap-5 text-xl no-underline"
        >
          <FileText size={25} />
          Lists
        </Link>
        <Link
          to="#"
          className="flex items-center gap-5 text-xl no-underline"
        >
          <User size={25} />
          Profile
        </Link>
        <Link
          to="#"
          className="flex items-center gap-5 text-xl no-underline"
        >
          <DotsThreeCircle size={25} />
          More
        </Link>
      </nav>

      <button
        className="bg-blue-primary rounded-full p-4 w-full text-white text-xl font-black border-0 hover:brightness-90"
      >
        Tweet
      </button>
    </aside >
  )
}

// Contexto -> Existe locais no React que conseguimos ter acessos a informações e em outros não.