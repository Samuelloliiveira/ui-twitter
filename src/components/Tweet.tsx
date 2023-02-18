interface TweetProps {
  user: string
  children: string
  likes?: number
}

export function Tweet(props: TweetProps) {
  return (
    <div className="p-4 border border-gray-secondary rounded-lg m-3">
      <strong>{props.user}</strong>
      <p>{props.children}</p>
      <button>Like {props.likes ?? 0}</button>
    </div>
  )
}
