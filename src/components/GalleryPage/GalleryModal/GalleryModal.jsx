import React, { useState } from 'react';
import cn from 'classnames'


const GalleryModal = ({
    activeModalHandler,
    activeModal,
}) => {

    return (
        <>
        <div className={cn('z-50 absolute h-full w-full top-0 left-0 flex justify-center items-center bg-black opacity-70', activeModal ? 'block' : 'hidden')} 
            onClick={activeModalHandler}> 
            
        </div>
        <div className={cn('z-50 absolute flex top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white', activeModal ? 'block' : 'hidden')}>
        я модалка
        </div>
        </>
    )
}

export default GalleryModal;