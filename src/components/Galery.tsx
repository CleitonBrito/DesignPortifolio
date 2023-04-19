import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import Img1 from "../assets/gallery/PontodoPeixe1.png"
import Img2 from "../assets/gallery/PontodoPeixe2.png"
import Img3 from "../assets/gallery/PontodoPeixe3.png"
import Img4 from "../assets/gallery/Banner Dhevidy 01 - Adquira sua Honda.png"
import Img5 from "../assets/gallery/Banner 02 Dhevidy - Faça um consórcio.png"
import Img6 from "../assets/gallery/Moto Nova-2-2.png"
import Img7 from "../assets/gallery/Crédito-Pay.png"
import Img8 from "../assets/gallery/Banner - 1º Arraía Boa Vista (2).png"
import Img9 from "../assets/gallery/Story-Ferrari Black 50ml.png"
import Img10 from "../assets/gallery/Story-Silver Scent 50ml.png"
import Img11 from "../assets/gallery/Sites-Apps 01.png"

const photos = [
    {
        id: Math.random(),
        title: 'O melhor peixe',
        src: Img1,
        width: 4,
        height: 4
    },
    {
        id: Math.random(),
        title: 'Promoção compre e ganhe',
        src: Img2,
        width: 4,
        height: 4
    },
    {
        id: Math.random(),
        title: 'Deu fome? Pede um Zap',
        src: Img3,
        width: 4,
        height: 4
    },
    {
        id: Math.random(),
        title: 'Adquira sua Honda',
        src: Img4,
        width: 4,
        height: 5.65
    },
    {
        id: Math.random(),
        title: 'Venha fazer seu consórcio',
        src: Img5,
        width: 4,
        height: 5.65
    },
    {
        id: Math.random(),
        title: 'Consórcio em Andamento',
        src: Img6,
        width: 4,
        height: 5.65
    },
    {
        id: Math.random(),
        title: 'Pay Crédito',
        src: Img7,
        width: 4,
        height: 5.65
    },
    {
        id: Math.random(),
        title: 'Arraía Boa Vista',
        src: Img8,
        width: 4,
        height: 5.65
    },
    {
        id: Math.random(),
        title: 'Perfume Ferrari',
        src: Img9,
        width: 4,
        height: 7.1
    },
    {
        id: Math.random(),
        title: 'Perfume Silver Scent',
        src: Img10,
        width: 4,
        height: 7.1
    },
    {
        id: Math.random(),
        title: 'Site Rifas',
        src: Img11,
        width: 4,
        height: 4
    },
];

export function Galery(){
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event : any, { photos, index }: any) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <div className="section-gray px-5 pt-12 sm:px-10 md:px-28 w-full flex justify-center">
            <div className="w-full pt-10 pb-8 max-w-5xl">
                <Gallery photos={ photos } onClick={openLightbox} direction={"column"} />
                <ModalGateway>
                    {viewerIsOpen ? (
                        <Modal onClose={closeLightbox}>
                            <Carousel
                                currentIndex={currentImage}
                                views={photos.map(x => ({
                                    ...x,
                                    srcset: x.src,
                                    caption: x.title
                                }))}
                            />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </div>
        </div>
    )
}