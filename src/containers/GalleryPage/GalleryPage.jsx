import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { FETCH_IMAGES } from "../../apollo/Gallery.js";
import Loader from "../../components/UI/Loader/Loader.jsx";
import GalleryModal from "../../components/GalleryPage/GalleryModal";

const GalleryPage = () => {
    const [activeModal, setActiveModal] = useState(false);

    const activeModalHandler = () => {
        activeModal ? setActiveModal(false) : setActiveModal(true)
    }

    const { loading, error, data } = useQuery(FETCH_IMAGES)

    if (loading) {
        return (
            <div className='container mx-auto flex gap-12 lg:flex-row flex-col justify-center'>
                <Loader />
            </div>
        )
    }

    if (error) {
        return (
            <div className='w-full h-full object-cover object-center'>
                <h2 className='text-center pt-12 font-bold text-xl'>
                    Failed to get data. We are working at problem
                </h2>
            </div>
        )
    }

    return (
        <>
            <div className='container mx-auto'>
                <h2 className="text-center p-5 font-bold text-xl">Примеры работ</h2>
                <GalleryModal 
                    activeModalHandler={activeModalHandler} 
                    activeModal={activeModal}
                />
                <div className="grid lg:grid-cols-3 gap-5 pb-10">
                    {data.galleries.map(el => {
                        return (
                            <div className="ml-5 mr-5 lg:m-0" key={el.content.id} onClick={activeModalHandler}>
                                <img src={el.content.publicUrl} alt='none'/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default GalleryPage


