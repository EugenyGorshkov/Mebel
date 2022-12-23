import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Photos } from './photos';

import chevronLeft from '../../../assets/arrows/chevron-left.png'
import chevronRight from '../../../assets/arrows/chevron-right.png'

import styles from './Carousel.module.scss'

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

    const slider = React.useRef(null);

    return (
        <>
            <Slider ref={slider} {...settings}>
                {Photos.map((el) => {
                    return (
                        <div key={el.id} className='p-5'>
                            <img src={el.url} alt={el.title} />
                        </div>
                    )
                })}
            </Slider>
        </>
    )
}

export default Carousel;