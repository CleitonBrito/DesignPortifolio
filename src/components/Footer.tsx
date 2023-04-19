import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { MdOutlineEmail } from "react-icons/md"

export function Footer(){
    return (
        <div className="w-full min-h-max sm:h-48 border-x-gray-950">
            <div className="grid-cols-none flex flex-col sm:flex-row py-10 sm:py-0 px-0 sm:px-5 h-full items-center text-white">
                <div className="p-3 flex text-2xl sm:text-lg justify-center items-center">
                    Outros Contatos:
                </div>
                <div className="border-r h-1/2 hidden sm:flex"></div>
                <div className="w-full flex flex-col sm:flex-row p-3 gap-4 items-center sm:items-start">
                    <a target='_blank' href="https://www.linkedin.com/in/cleiton-brito-850911252/" className='w-fit flex flex-col p-1'>
                        <div className='flex flex-col items-center'>
                            LinkedIn <AiFillLinkedin size={25} />
                        </div>
                    </a>
                    <a target='_blank' href="https://github.com/CleitonBrito" className='w-fit flex flex-col p-1'>
                        <div className='flex flex-col items-center'>
                            GitHub <AiFillGithub size={25} />
                        </div>
                    </a>
                    <a href="mailto:cleytonbritto3003@gmail.com" className='w-fit flex flex-col p-1'>
                        <div className='flex flex-col items-center'>
                            Email <MdOutlineEmail size={25} />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}