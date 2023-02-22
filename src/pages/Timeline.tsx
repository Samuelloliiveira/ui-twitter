import { FormEvent, KeyboardEvent, useState } from 'react'
import { TextareaAutosize } from '@mui/base'

import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Tweet } from '../components/Tweet'

export function Timeline() {
  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState([
    'Em 1996, era registrado o domínio da rede social MySpace',
    'WhatsApp estaria trabalhando em recurso para inscrição em newsletters',
    'Microsoft está injetando anúncios enormes na página de download do Chrome para tentar convencer usuários a permanecerem no Edge',
    'Ministério da Justiça bloqueia os dois maiores sites de pirataria de anime no Brasil',
    'TikTok está supostamente usando tecnologias de “reconhecimento de emoções” para vender anúncios',
    'Microsoft usa ChatGPT para controlar braços robóticos, drones e assistentes domésticos por meio de linguagem natural',
    'Em 1986, era lançado o primeiro jogo da série The Legend of Zelda para o console NES, chamado de Nintendinho no Brasil. '
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

          <TextareaAutosize
            className="bg-background flex-1 border-0 font-medium mt-3 resize-none focus:outline-none placeholder:text-gray-primary"
            maxLength={280}
            placeholder="O que está acontecendo?"
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

      <div className="overflow-y-auto h-[40rem] md:h-[39rem]">
        {tweets.map(tweet => {
          return <Tweet
            key={tweet}
            content={tweet}
          />
        })}
      </div>

    </main>
  )
}