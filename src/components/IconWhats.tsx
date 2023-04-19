import { FaWhatsapp } from 'react-icons/fa';


export function IconWhats(){
    return (
        <a href="https://wa.me/5574991392211?text=Olá, Cleiton! Vi seu site de artes gráficas para marketing e estou interessado(a)." target='_blank'>
            <div className='iconWhats flex justify-center items-center animate-bounce'>
                <FaWhatsapp size={30} color='#fff' />
            </div>
        </a>
    )
}