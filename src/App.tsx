import './styles/global.css'
import { Header } from './components/Header'
import { Galery } from './components/Galery'
import Curve from "./assets/wave-haikei.svg"

function App() {
  return (
      <div className='w-full h-full flex justify-center py-24 px-md-4 bg-zinc-800'>
          <div className='w-full max-w-5xl px-6 flex-col gap-16'>
                <Header />
                <Galery />
                <div className='curve'
                  style={{ backgroundImage: Curve }}
                ></div>
          </div>
      </div>
  )
}

export default App
