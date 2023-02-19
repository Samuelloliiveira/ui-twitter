import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'

interface TweetProps {
  content: string
}

export function Tweet(props: TweetProps) {
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
          {props.content}
        </p>

        <div className="flex items-center gap-12 mt-3">
          <button className="flex items-center gap-2 bg-transparent border-0 text-sm text-gray-primary hover:text-blue-primary">
            <ChatCircle size={25} />
            20
          </button>
          <button className="flex items-center gap-2 bg-transparent border-0 text-sm text-gray-primary hover:text-blue-primary">
            <ArrowsClockwise size={25} />
            20
          </button>
          <button className="flex items-center gap-2 bg-transparent border-0 text-sm text-gray-primary hover:text-blue-primary">
            <Heart size={25} />
            20
          </button>
        </div>
      </div>
    </a>
  )
}
