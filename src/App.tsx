import './styles/global.css'

import { Tweet } from './components/Tweet'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Separator } from './components/Separator'

export function App() {
  return (
    <div className="m-auto max-w-[1000rem] grid grid-cols-[300px,1fr]">

      <Sidebar />

      <div className="border-l border-r border-gray-secondary">
        <main>
          <Header title="Home" />

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

          <Separator />

          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
        </main>
      </div>
    </div >
  )
}
