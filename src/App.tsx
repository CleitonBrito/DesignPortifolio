import './styles/global.css'
import { Header } from './components/Header'
import { Galery } from './components/Galery'
import { Footer } from './components/Footer'

import { IconWhats } from './components/IconWhats'
import { IconTop } from './components/IconTop'

function App() {
  return (
      <div className='w-full h-full flex justify-center px-md-4 px-0 bg-zinc-800'>
          <div className='w-full flex-col gap-16'>
            <div className='curve-start flex'/>
                <Header />
                <div className="curve-end flex" />
                <Galery />
                <IconWhats />
                <IconTop />
                <Footer />
          </div>
      </div>
  )
}

export default App
