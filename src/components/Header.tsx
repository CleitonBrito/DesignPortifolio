import logo from '../assets/Logo-CB.png'

export function Header(){
    return (
        <div className='w-full max-w-3xl mx-auto flex flex-col justify-center items-center'>
            <img className="mb-2" src={logo} />
            <h1 className="text-slate-200 font-medium font-sans text-xl leading-0 mb-0">Olá, eu sou <span className='text-amber-300'>Cleiton Brito</span>.</h1>
            <h3 className="text-slate-200 font-medium font-sans text-xl mt-0">Bem vindo a minha galeria de design gráficos.</h3>
        </div>
    )
}