import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Tweet } from '../components/Tweet'

const answers = [
  'Concordo...',
  'Olha, faz sentido!',
  'Parabéns pelo progresso.'
]

export function Status() {
  return (
    <main>
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore officia optio illo, asperiores numquam amet quis rem aspernatur assumenda consequuntur possimus vel. Assumenda mollitia dignissimos atque suscipit facere ab beatae!" />

      <Separator />

      <form className="py-6 px-5 flex items-center border-b border-gray-secondary gap-2">
        <label className="flex flex-1 items-center gap-3">
          <img
            src="https://avatars.githubusercontent.com/u/53087945?v=4|"
            alt="Samuel Oliveira"
            className="w-12 h-12 rounded-full"
          />
          <textarea
            placeholder="Tweete sua resposta"
            className="bg-background flex-1 border-0 text-base font-medium mt-8 resize-none focus:outline-none placeholder:text-gray-primary"
          />
        </label>
        <button
          type="submit"
          className="ml-auto bg-blue-primary rounded-full py-3 px-6 text-white text-base font-black border-0 hover:brightness-90"
        >
          Responder
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

// auto grow textarea react