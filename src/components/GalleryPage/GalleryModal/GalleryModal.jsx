import React, { useEffect, useState } from 'react';
import cn from 'classnames'

import crossX from '../../../assets/closeX.svg'
import { useQuery } from '@apollo/client';
import { FETCH_IMAGES } from '../../../apollo/Gallery';
import Loader from '../../UI/Loader/Loader';

const GalleryModal = ({
    activeModalHandler,
    activeModal,
    currentImgId,
    currentImgUrl,
}) => {
    const [allImg, setAllImg] = useState([])

    const { loading, error, data } = useQuery(FETCH_IMAGES)

    if (loading) {
        return (
            <div className={cn('absolute top-0 left-0 h-full w-full overflow-hidden', activeModal ? 'block' : 'hidden')}>
                <Loader />
            </div>
        )
    }

    if (error) {
        return (
            <div className={cn('absolute top-0 left-0 h-full w-full overflow-hidden', activeModal ? 'block' : 'hidden')}>
                <h2 className='text-center pt-12 font-bold text-xl'>
                    Failed to get data. We are working at problem
                </h2>
            </div>
        )
    }

    return (
        <div className={cn('absolute top-0 left-0 h-full w-full overflow-hidden', activeModal ? 'block' : 'hidden')}>
            {/* bg - modal */}
            <div className={cn('relative z-50 h-full w-full flex justify-center items-center bg-black opacity-70', activeModal ? 'block' : 'hidden')}
                onClick={activeModalHandler}>
            </div>
            <div 
                className={cn('absolute z-50 top-5 right-5', activeModal ? 'block' : 'hidden')}
                onClick={activeModalHandler}
            >
                <img src={crossX} alt="" className='max-h-8'/>
            </div>
            {/* modal body */}
            <div className={cn('z-50 absolute flex top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-h-[80%]', activeModal ? 'block' : 'hidden')}>
                <div className='h-full'><img src={currentImgUrl} alt="" className='h-full'/></div>
            </div>
        </div>
    )
}

export default GalleryModal;