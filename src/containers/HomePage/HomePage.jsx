import React from 'react';

import QuestionForm from '../../components/HomePage/QuestionForm';

import mainImg from '/src/assets/10000_Post01.svg'
import zaraLogo from '/src/assets/logoSponcer/1280px-Zara_Logo.svg'
import appleLogo from '/src/assets/logoSponcer/Apple-icon.svg'
import vogueLogo from '/src/assets/logoSponcer/vogue-logo-1.svg'
import samsungLogo from '/src/assets/logoSponcer/pngwing.svg'

const HomePage = () => {
    return (
        <>
            {/*Стартовое отображение*/}
            <div className='relative lg:mb-36 overflow-hidden'>
                <div className='z-0 absolute top-0 left-0 bg-[#CCB2A3] w-full h-[600px]'></div>
                <div className='z-10 relative container mx-auto flex lg:flex-row flex-col'>
                    <div className='basis-1/3 lg:ml-[130px] mr-[15px]'>
                        <div className='lg:mt-24'>
                            <p className='font-semibold text-2xl lg:font-bold lg:text-5xl text-white p-5'>
                                <span className='text-[#FF9619]'>Л</span>УЧШАЯ <br className='hidden lg:block'/> 
                                ЖИЗНЬ, <br className='hidden lg:block'/> 
                                СОЗДАННАЯ <br className='hidden lg:block'/> 
                                ДЛЯ ВАС!
                            </p>
                            <button
                                className='hidden lg:block h-10 bg-[#FF9619] pr-4 pl-4 pt-2 pb-2 mt-20 text-sm text-white font-bold uppercase'>Перейти в
                                галерею
                            </button>
                        </div>
                    </div>
                    <div className='basis-2/3 lg:mr-[15px]'>
                        <div className='lg:mt-24'>
                            <img src={mainImg} alt='none'></img>
                        </div>
                    </div>
                    <button
                        className='lg:hidden block h-10 bg-[#FF9619] pr-4 pl-4 pt-2 pb-2 mt-12 m-3 mb-12 text-sm text-white font-bold uppercase'>Перейти в галерею
                    </button>
                </div>
            </div>

            {/*Блоки с примерами товара*/}
            <div className='container mx-auto flex flex-col mb-24'>
                <h1 className='lg:ml-32 font-bold text-3xl p-2 lg:p-0'><span className='text-[#FF9619]'>М</span>ои работы</h1>
                <div className='flex lg:flex-row flex-col items-center justify-center gap-12 mt-24'>
                    <div className='max-w-96 max-h-96 lg:h-96 lg:w-96 bg-amber-600'>1</div>
                    <div className='max-w-96 max-h-96 lg:h-96 lg:w-96  bg-amber-600'>2</div>
                    <div className='max-w-96 max-h-96 lg:h-96 lg:w-96  bg-amber-600'>3</div>
                </div>
            </div>

            {/* Секция про индивидульную мебель */}
            <div className='w-full flex flex-col lg:flex-row lg:items-center max-w-full lg:max-h-[450px] lg:mb-24'>
                <div className='order-2 lg:order-1 lg:basis-4/7 justify-center flex lg:justify-end lg:h-[450px] relative'>
                        <div className='pl-5 pr-5 lg:pr-0 lg:w-[600px] z-20'>
                            <img 
                                className='w-full object-cover object-center lg:mt-[1.2rem] lg:pb-[1.2rem]' 
                                src={mainImg} 
                                alt="#" 
                            />
                        </div>
                        <div className='z-10 absolute w-[70%] h-[260px] lg:h-[390px] -bottom-12 right-0 lg:top-0 lg:w-full object-fill bg-greenBg'></div>
                        <div className='block z-0 absolute h-[190px] w-full lg:w-[25rem] lg:bottom-0 bg-[#5B5B5B]'></div>
                        <div className='z-10 absolute h-[42px] w-[67px] lg:h-[100px] lg:w-[200px] lg:left-[35rem] -bottom-5 left-20 bg-[#FF9619]'></div>
                </div>
                <div className='order-1 lg:order-2 flex items-center lg:flex-auto lg:h-[450px] lg:basis-3/7 bg-[#5B5B5B] z-10'>
                        <div className='flex flex-col p-5 order-1 lg:order-2 w-full lg:max-w-[400px]'>
                            <div className='pr-30'>
                                <h2 className='font-bold text-3xl text-white'>
                                    <span className='text-[#FF9619]'>И</span>ндивидуальная мебель
                                </h2>
                                <p className='font-medium text-xl text-white pt-5'>
                                    Полный цикл производства.
                                </p>
                                <p className='font-light text-white pt-3'>
                                    Качество мягкой мебели начинается задолго до начала ее производства.
                                </p>
                            </div>
                        </div>
                </div>
            </div>
            

            {/* Блок истории */}
            <div className='container mx-auto flex flex-col lg:mb-24 mt-24'>
                <h1 className='lg:ml-32 font-bold text-3xl mt-10 p-2 lg:p-0'><span className='text-[#FF9619]'>С</span> чего все началось</h1>
                <div className='flex flex-col lg:relative mt-4'>
                    <div className='lg:absolute top-40 left-32 bg-[#5B5B5B] p-5 lg:p-10 lg:w-[540px] text-white z-10'>
                        <h2 className='font-medium text-xl mb-6'>Наработки длинной в 25 лет</h2>
                        <p className='font-light text-lg'>Каждый производитель заявляет, что делает все для своих покупателей, но не каждый производитель способен подтвердить свои заявления многолетней историей </p>
                    </div>
                    <div className='lg:self-end p-4 pt-0 lg:p-0 relative'>
                        <img className='static z-0 lg:mr-32' src={mainImg} alt='#' />
                        <div className='bg-[#FF9619] h-11 w-12 lg:h-14 lg:w-28 absolute -top-4 right-0 lg:top-96 lg:-left-2 z-10'></div>
                    </div>
                    
                </div>
            </div>

            {/* Форма для обратного звонка */}
            <QuestionForm />

            

            {/*Партнеры*/}
            <div className='container mx-auto'>
                <div className='flex flex-col'>
                    <h1 className='lg:ml-32 font-bold text-3xl mt-16 p-2 lg:p-0'>
                        <span className='text-[#FF9619]'>П</span>артнеры
                    </h1>
                    <div className='flex flex-col justify-center items-center lg:flex-row mt-24 lg:justify-around mb-10'>
                        <img src={zaraLogo} className='h-64 w-64' alt='none' />
                        <img src={samsungLogo} className='h-64 w-64' alt='none' />
                        <img src={appleLogo} className='h-64 w-64' alt='none' />
                        <img src={vogueLogo} className='h-64 w-64' alt='none' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage;