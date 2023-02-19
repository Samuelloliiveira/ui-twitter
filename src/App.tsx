import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  Sparkle,
  User
} from 'phosphor-react'

import './styles/global.css'
import twitterLogo from './assets/logo-twitter.svg'

import { Tweet } from './components/Tweet'

export function App() {
  return (
    <div className="m-auto max-w-[1000rem] grid grid-cols-[300px,1fr]">
      <aside className="py-6 px-5 flex flex-col gap-8">
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
            <User size={25} />
            Profile
          </a>
          <a
            href=""
            className="flex items-center gap-5 text-xl no-underline"
          >
            <DotsThreeCircle size={25} />
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
        <main>
          <div className="py-6 px-5 flex items-center justify-between text-xl font-bold border-b border-gray-secondary">
            Home
            <Sparkle size={25} className="text-blue-primary" />
          </div>

          <form className="py-6 px-5 flex flex-col gap-2">
            <label className="flex gap-3">
              <img
                src="https://avatars.githubusercontent.com/u/53087945?v=4|"
                alt="Samuel Oliveira"
                className="w-12 h-12 rounded-full"
              />
              <textarea
                placeholder="O que está acontecendo?"
                className="bg-background flex-1 border-0 text-xl font-medium mt-3 resize-none focus:outline-none placeholder:text-gray-primary"
              />
            </label>
            <button
              type="submit"
              className="ml-auto bg-blue-primary rounded-full py-3 px-6 text-white text-base font-black border-0 hover:brightness-90"
            >
              Tweet
            </button>
          </form>

          <div className="bg-gray-tertiary border-t border-b border-t-gray-secondary border-b-gray-secondary h-3" />

          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
        </main>
      </div>
    </div >
  )
}
