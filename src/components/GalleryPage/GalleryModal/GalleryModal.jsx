import React, { useEffect, useState } from 'react';
import cn from 'classnames'

import crossX from '../../../assets/closeX.svg'
import arrrowRight from '../../../assets/arrows/white-chevron-right.png'
import arrrowLeft from '../../../assets/arrows/white-chevron-left.png'
import { useQuery } from '@apollo/client';
import { FETCH_IMAGES } from '../../../apollo/Gallery';
import Loader from '../../UI/Loader/Loader';

import styles from './GalleryModal.module.scss'

const GalleryModal = ({
    allImg,
    activeModalHandler,
    activeModal,
    currentImgId,
    currentImgUrl,
    currentImgPosition,
    setCurrentImgPostion,
    setCurrentImgUrl,
}) => {
    //тут не используется пока что стейты все стейты из пропсов
    const [disableLeftArrow, setDisaleLeftArrow] = useState(false);
    const [disableRightArrow, setDisaleRightArrow] = useState(false);

    const { loading, error, data } = useQuery(FETCH_IMAGES)

    // условные обработчики данных
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
    // функции обработчики событий 
    const arrowRightHandler = () => {
        let index = 0;
        for(let element of allImg) {
            console.log(element);
            if (index === currentImgPosition) {
                setCurrentImgPostion(index+1)
                setCurrentImgUrl(allImg[index+1].content.publicUrl)
                console.log(currentImgPosition);
                break
            }
            index++
        }
    }
    const arrowLeftHandler = () => {
        let index = 0;
        for(let element of allImg) {
            if (index === currentImgPosition) {
                console.log(currentImgPosition);
                setCurrentImgPostion(index-1)
                setCurrentImgUrl(allImg[index-1].content.publicUrl)
                
                break
            }
            index++
        }
    }
    const scrollHandler = () => {

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
            <div className={cn('z-50 absolute flex top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-h-[80%]', activeModal ? 'block' : 'hidden',styles.modalBody)}>
                <div className='h-full relative'>
                    {/* Arrrow Left */}
                    <img 
                        src={arrrowLeft} 
                        alt="" 
                        className={cn('absolute top-[50%] left-0 translate-y-[-50%]', styles.arrows)}
                        onClick={arrowLeftHandler} 
                    />
                    {/* Main Pic */}
                    <img 
                        src={currentImgUrl} 
                        alt="" 
                        className='h-full'
                    />
                    {/* Arrrow Left */}
                    <img 
                        src={arrrowRight} 
                        alt="" 
                        className={cn('absolute top-[50%] right-0 translate-y-[-50%]', styles.arrows)}
                        onClick={arrowRightHandler}
                    />
                </div>
            </div>
        </div>
    )
}

export default GalleryModal;