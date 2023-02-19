import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'

export function Tweet() {
  return (
    <a
      href="#"
      className="py-6 px-5 grid grid-cols-[3rem,1fr] gap-3 border-b border-gray-secondary no-underline"
    >
      <img
        src="https://avatars.githubusercontent.com/u/53087945?v=4"
        alt="Samuel Oliveira"
        className="w-12 h-12 rounded-full"
      />

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1">
          <strong>Samuel Oliveira</strong>
          <span className="text-sm text-gray-primary">
            @samuka42
          </span>
        </div>

        <p className="leading-5">
          Acabei de migrar um projeto React GIGANTE de create-react-app para Vite e os resultados foram: <br />
          <br />
          ✅ npm start: De 32s para 400ms (sim, demorava 30s) <br />
          ✅ npm build: De 120s para 22s <br />
          <br />
          Além disso, troquei do Yarn para o PNPM e o install das deps mudou de 24s para 8s 🔥
        </p>

        <div className="flex items-center gap-12 mt-3">
          <button className="flex items-center gap-2 bg-transparent border-0 text-sm text-gray-primary hover:text-blue-primary">
            <ChatCircle size={25}/>
            20
          </button>
          <button className="flex items-center gap-2 bg-transparent border-0 text-sm text-gray-primary hover:text-blue-primary">
            <ArrowsClockwise size={25}/>
            20
          </button>
          <button className="flex items-center gap-2 bg-transparent border-0 text-sm text-gray-primary hover:text-blue-primary">
            <Heart size={25}/>
            20
          </button>
        </div>
      </div>
    </a>
  )
}
