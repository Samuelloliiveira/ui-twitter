import { TextareaAutosize } from '@mui/base'
import { PaperPlaneRight } from 'phosphor-react'
import { FormEvent, KeyboardEvent, useState } from 'react'

import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Tweet } from '../components/Tweet'

export function Status() {
  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswers] = useState([
    'Concordo...',
    'Olha, faz sentido!',
    'Parabéns pelo progresso.'
  ])

  function createNewAnswer(event: FormEvent) {
    event.preventDefault()

    setAnswers([newAnswer, ...answers])
    setNewAnswer('')
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }
  }

  return (
    <main>
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore officia optio illo, asperiores numquam amet quis rem aspernatur assumenda consequuntur possimus vel. Assumenda mollitia dignissimos atque suscipit facere ab beatae!" />

      <Separator />

      <form
        className="py-6 px-5 flex items-end border-b border-gray-secondary gap-2"
        onSubmit={createNewAnswer}
      >
        <label className="flex flex-1 gap-3">
          <img
            src="https://avatars.githubusercontent.com/u/53087945?v=4|"
            alt="Samuel Oliveira"
            className="w-12 h-12 rounded-full"
          />

          <TextareaAutosize
            className="bg-background flex-1 border-0 font-medium mt-4 resize-none focus:outline-none placeholder:text-gray-primary"
            maxLength={280}
            placeholder="Tweete sua resposta"
            value={newAnswer}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => setNewAnswer(event.target.value)}
          />
        </label>
        <button
          type="submit"
          className="ml-auto bg-blue-primary rounded-full py-3 px-6 text-white border-0 hover:brightness-90 max-md:p-3"
        >
          <PaperPlaneRight size={25} className="md:hidden" />
          <span className="font-black max-md:hidden">
            Responder
          </span>
        </button>
      </form>

      {answers.map(answer => {
        return <Tweet
          key={answer}
          content={answer}
        />
      })}
    </main>
  )
}