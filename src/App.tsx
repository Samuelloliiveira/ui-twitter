import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, User } from 'phosphor-react'

import './styles/global.css'
import twitterLogo from './assets/logo-twitter.svg'

export function App() {
  return (
    <div className="m-auto max-w-[1000rem] grid grid-cols-[300px,1fr]">
      <aside className="px-6 py-5 flex flex-col gap-8">
        <img
          src={twitterLogo}
          alt="twitter logo"
          className="w-8 h-8"
        />

        <nav className="flex flex-col gap-8">
          <a
            href=""
            className="flex items-center gap-5 text-xl no-underline text-blue-primary"
          >
            <House size={25} weight="fill" />
            Home
          </a>
          <a
            href=""
            className="flex items-center gap-5 text-xl no-underline"
          >
            <Hash size={25} />
            Explore
          </a>
          <a
            href=""
            className="flex items-center gap-5 text-xl no-underline"
          >
            <Bell size={25} />
            Notifications
          </a>
          <a
            href=""
            className="flex items-center gap-5 text-xl no-underline"
          >
            <Envelope size={25} />
            Messages
          </a>
          <a
            href=""
            className="flex items-center gap-5 text-xl no-underline"
          >
            <BookmarkSimple size={25} />
            Bookmarks
          </a>
          <a
            href=""
            className="flex items-center gap-5 text-xl no-underline"
          >
            <FileText size={25} />
            Lists
          </a>
          <a
            href=""
            className="flex items-center gap-5 text-xl no-underline"
          >
            <User size={25}/>
            Profile
          </a>
          <a
            href=""
            className="flex items-center gap-5 text-xl no-underline"
          >
            <DotsThreeCircle size={25}/>
            More
          </a>
        </nav>

        <button
          className="bg-blue-primary rounded-full p-4 w-full text-white text-xl font-black border-0 hover:brightness-90"
        >
          Tweet
        </button>
      </aside>
      <div className="border-l border-r border-gray-secondary">
        content
      </div>
    </div >
  )
}
