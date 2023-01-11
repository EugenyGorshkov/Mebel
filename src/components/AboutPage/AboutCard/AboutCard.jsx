import React from 'react';
import cn from 'classnames'



const AboutCard = ({
    theme,
    title,
    mainText,
    img,
}) => {

    const themeOrder1 = 'lg:order-2';
    const themeOrder2 = 'lg:order-1';

    const themeAbsolute1 = 'top-8 -right-8 2xl:right-16 xl:right-4 lg:right-0';
    const themeAbsolute2 = 'top-8 -left-8 2xl:left-16 xl:left-4 lg:left-0';

    const themeBgColor1 = 'bg-[#A9C2BE]'
    const themeBgColor2 = 'bg-[#5B5B5B]'

    return (
        <>
            <div className='flex flex-col lg:flex-row overflow-hidden pb-8 pt-8'>
                <div className={cn('flex justify-start basis-3/7 m-6 lg:m-0 order-2', theme === 'one' ? themeOrder1 : themeOrder2)}>
                    <div className='relative w-full lg:h-60 xl:h-80'>
                        <img src={img} alt="#" className='z-10 w-full lg:h-60 xl:h-80'/>
                        <div className={cn('-z-10 absolute h-full w-56 xl:h-80 lg:h-64 lg:w-72 ',theme === 'one' ? themeAbsolute1 + ' ' + themeBgColor1 : themeAbsolute2 + ' ' + themeBgColor2)}></div>
                    </div>
                    
                </div>
                <div className={cn('basis-4/7 order-1 mr-10 ml-10', theme === 'one' ? themeOrder2 : themeOrder1)}>
                    <h2 className='font-medium text-lg lg:text-3xl mb-5 lg:mb-10 first-letter:bg-[#A9C2BE]'>
                            {/* <div className='-z-10 absolute -top-3 -left-7 lg:-top-2  h-10 w-10 lg:h-12 lg:w-12 bg-[#A9C2BE]'></div> */}
                            {title}
                    </h2>
                    <p className='font-light text-sm lg:text-lg'>{mainText}</p>
                </div>
            </div>
        </>
    )
}

export default AboutCard;