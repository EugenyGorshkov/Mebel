import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { FETCH_IMAGES } from "../../apollo/Gallery.js";
import Loader from "../../components/UI/Loader/Loader.jsx";
import GalleryModal from "../../components/GalleryPage/GalleryModal";
import { Translation } from 'react-i18next';

const GalleryPage = ({
    setScrollModal
}) => {
    const [activeModal, setActiveModal] = useState(false);
    const [currentImgId, setCurrentImgId] = useState('')
    const [currentImgUrl, setCurrentImgUrl] = useState('')
    const [currentImgPosition, setCurrentImgPostion] = useState(0)

    // открытие модалки и стартовые данные сразу уходят в модалку
    const activeModalHandler = (id, url, index) => {
        activeModal ? setActiveModal(false) : setActiveModal(true)
        activeModal ? setScrollModal(false) : setScrollModal(true)
        setCurrentImgId(id)
        setCurrentImgUrl(url)
        setCurrentImgPostion(index)
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
            <Translation>
                        {
                            t => 
                <h2 className="text-center p-5 font-bold text-xl">{t("Gallery.Title")}</h2>
            }
            </Translation> 
                <GalleryModal 
                    allImg={data.galleries}
                    activeModalHandler={activeModalHandler} 
                    activeModal={activeModal}
                    currentImgId={currentImgId}
                    currentImgUrl={currentImgUrl}
                    currentImgPosition={currentImgPosition}
                    setCurrentImgPostion={setCurrentImgPostion}
                    setCurrentImgUrl={setCurrentImgUrl}
                />
                <div className="grid lg:grid-cols-3 gap-5 pb-10">
                    {data.galleries.map((el, index) => {
                        return (
                            <div 
                                className="ml-5 mr-5 lg:m-0" 
                                key={el.content.id} 
                                onClick={()=>{activeModalHandler(el.content.id,el.content.publicUrl,index)}}
                            >
                                <img src={el.content.publicUrl} className='object-fill object-center h-96 w-96' alt='none'/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default GalleryPage


