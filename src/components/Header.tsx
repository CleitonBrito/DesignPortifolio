import logo from '../assets/MinhaLogo-CB Designer.svg'
import arrow from '../assets/Arrow.svg'

import HeadShake from 'react-reveal/HeadShake'
import LightSpeed from 'react-reveal/LightSpeed'

export function Header(){
    return (
        <div className='header w-full max-w-3xl mx-auto flex px-10 sm:px-0 flex-col justify-center items-center'>
            <div className="dotted"></div>
            <img className="mb-2 w-16 h-16" src={logo} />
            <LightSpeed left><h1 className="msg-hello text-slate-200 font-medium text-5xl leading-0 mb-0">Olá, eu sou <span className='text-amber-300'>Cleiton Brito</span>.</h1></LightSpeed>
            <hr className='line' />
            <h3 className="text-slate-200 font-medium text-xl mt-0">Sejam bem vindos à minha galeria de artes gráficas.</h3>
            <a href="#galery">
                <img className='w-14 h-14 animate-bounce mt-14 mx-auto' src={ arrow }  />
                <HeadShake>
                    <span className='text-amber-400 text-10'>NÃO DESÇA!</span>
                </HeadShake>
            </a>
        </div>
    )
}