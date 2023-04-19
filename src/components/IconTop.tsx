import { BiArrowToTop } from 'react-icons/bi';
import ScrollToTop from "react-scroll-to-top";


export function IconTop(){
    return (
        <ScrollToTop top={1000} smooth component={<div className='iconTop flex justify-center items-center'>
                <BiArrowToTop size={30} color='#fff' />
        </div>} />
    )
}