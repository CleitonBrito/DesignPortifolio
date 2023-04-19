import './styles/global.css'
import { Header } from './components/Header'
import { Galery } from './components/Galery'
import { IconWhats } from './components/IconWhats'

function App() {
  return (
      <div className='w-full h-full flex justify-center px-md-4 px-0 bg-zinc-800'>
          <div className='w-full flex-col gap-16'>
            <div className='curve-start flex'/>
                <Header />
                <div className="curve-end flex" />
                <Galery />
                <IconWhats />
          </div>
      </div>
  )
}

export default App
