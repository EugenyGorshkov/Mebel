import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Photos } from './photos';

import chevronLeft from '../../../assets/arrows/chevron-left.png'
import chevronRight from '../../../assets/arrows/chevron-right.png'

import styles from './Carousel.module.scss'
import { useQuery } from '@apollo/client';
import { FETCH_IMAGES } from '../../../apollo/Gallery';
import Loader from '../../UI/Loader/Loader';

function SampleNextArrow(props) {

    const { onClick } = props;
    return (
      <div className={styles.next} onClick={onClick}>
        <img src={chevronRight} alt="" />
      </div>   
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className={styles.prev} onClick={onClick}>
            <img src={chevronLeft} alt="" />
        </div>
    );
  }

const Carousel = () => {
    const settings = {
        autoplaySpeed: 4000,
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>
    };

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
            <Slider {...settings}>
                {data.galleries.map((el) => {
                    return (
                        <div key={el.content.id} className='p-5' >
                            <img src={el.content.publicUrl} className='object-fill h-96 w-96' alt={el.content.id} />
                        </div>
                    )
                })}
            </Slider>
        </>
    )
}

export default Carousel;