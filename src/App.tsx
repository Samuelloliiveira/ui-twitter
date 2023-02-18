import { Tweet } from './components/Tweet'

import './styles/global.css'

export function App() {
  return (
    <div>
      <Tweet user="Samuel" >
        Primeiro tweet
      </Tweet>

      <Tweet user="Tamiles"  >
        Qualquer tweet
      </Tweet>

      <Tweet user="Joice" likes={1546} >
        Eu amo ler
      </Tweet>
    </div >
  )
}
