import { FormEvent, KeyboardEvent, useState } from 'react'

import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Tweet } from '../components/Tweet'

export function Timeline() {
  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState([
    'Meu primeiro tweet',
    'Zeri e Irelia são as maiores',
    'Vamos INTZ, volta a ganhar',
    'Bem que poderia chover o resto da semana',
    'Estudando o dia praticamente todo',
    'Essa aplicação está ficnado massa',
    'Quero conseguir logo minha primeira oportunidade na área'
  ])

  function createNewTweet(event: FormEvent) {
    event.preventDefault()

    setTweets([newTweet, ...tweets])
    setNewTweet('')
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setTweets([newTweet, ...tweets])
      setNewTweet('')
    }
  }

  return (
    <main>
      <Header title="Home" />

      <form
        className="py-6 px-5 flex flex-col gap-2"
        onSubmit={createNewTweet}
      >
        <label className="flex gap-3">
          <img
            src="https://avatars.githubusercontent.com/u/53087945?v=4|"
            alt="Samuel Oliveira"
            className="w-12 h-12 rounded-full"
          />
          <textarea
            placeholder="O que está acontecendo?"
            className="bg-background flex-1 border-0 text-base font-medium mt-3 resize-none focus:outline-none placeholder:text-gray-primary"
            value={newTweet}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => setNewTweet(event.target.value)}
          />
        </label>
        <button
          type="submit"
          className="ml-auto bg-blue-primary rounded-full py-3 px-6 text-white font-black border-0 hover:brightness-90"
        >
          Tweet
        </button>
      </form>

      <Separator />

      {tweets.map(tweet => {
        return <Tweet
          key={tweet}
          content={tweet}
        />
      })}
    </main>
  )
}