import React from 'react';
import { Link } from 'react-router-dom';

import QuestionForm from '../../components/HomePage/QuestionForm';

import mainImg from '/src/assets/1.jpg'
import mainImg2 from '/src/assets/23.jpg'
import zaraLogo from '/src/assets/logoSponcer/1280px-Zara_Logo.svg'
import appleLogo from '/src/assets/logoSponcer/Apple-icon.svg'
import vogueLogo from '/src/assets/logoSponcer/vogue-logo-1.svg'
import samsungLogo from '/src/assets/logoSponcer/pngwing.svg'
import Carousel from '../../components/HomePage/Carousel';
import { Translation } from 'react-i18next';

const HomePage = () => {

    return (
        <>
            {/*Стартовое отображение*/}
            <div className='relative lg:mb-36 overflow-hidden lg:pb-8'>
                <div className='z-0 absolute top-0 left-0 bg-[#CCB2A3] w-full h-full lg:h-[600px]'></div>
                <div className='z-10 relative container mx-auto flex lg:flex-row flex-col'>
                    <div className='basis-1/3  xl:ml-6 lg:pl-8 mr-[15px]'>
                        <div className='lg:mt-24'>
                            <Translation>
                                {
                                    t =>
                                        <p className='font-semibold text-2xl lg:font-bold lg:text-5xl text-white p-5 first-letter:text-color-home whitespace-pre-line'>
                                            {t("HomePage.StartBlock")}
                                        </p>
                                }
                            </Translation>
                            <button
                                className='hidden lg:block lg:w-[65%] h-10 bg-[#FF9619] pr-4 pl-4 pt-2 pb-2 mt-20 ml-4 text-sm text-white font-bold uppercase'>
                                <Translation>
                                    {
                                        t => <Link to='/gallery'>
                                            {t("HomePage.ButtonStartBlock")}
                                        </Link>
                                    }
                                </Translation>
                            </button>
                        </div>
                    </div>
                    <div className='basis-2/3 lg:mr-[15px]'>
                        <div className='lg:mt-24 flex justify-center'>
                            <img src={mainImg} className="object-fill h-[600px] w-[800px]" alt='none'></img>
                        </div>
                    </div>
                    <button
                        className='lg:hidden block h-10 bg-[#FF9619] pr-4 pl-4 pt-2 pb-2 mt-12 m-3 mb-12 text-sm text-white font-bold uppercase'>
                        <Translation>
                            {
                                t => <Link to='/gallery'>
                                    {t("HomePage.ButtonStartBlock")}
                                </Link>
                            }
                        </Translation>
                    </button>
                </div>
            </div>

            {/*Блоки с примерами товара*/}
            <div className='container mx-auto flex flex-col mb-10 lg:mb-24'>
                <Translation>
                    {
                        t => <h1 className='font-bold text-3xl p-5 lg:p-0 first-letter:text-color-home'>
                            {t("HomePage.MyWorksBlock")}
                        </h1>
                    }
                </Translation>
                <Carousel />
            </div>

            {/* Секция про индивидульную мебель */}
            <div className='w-full flex flex-col lg:flex-row lg:items-center max-w-full lg:max-h-[450px] lg:mb-24'>
                <div className='order-2 lg:order-1 lg:basis-4/7 justify-center flex lg:justify-end lg:h-[450px] relative'>
                    <div className='pl-5 pr-5 lg:pr-0 lg:w-[600px] z-20'>
                        <img
                            className='w-full object-cover object-center lg:mt-[1.2rem] lg:pb-[1.2rem]'
                            src={mainImg2}
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
                            <Translation>
                                {
                                    t =>
                                        <h2 className='font-bold text-3xl text-white first-letter:text-color-home'>
                                            {t("HomePage.IndividualBlockPart1")}
                                        </h2>
                                }
                            </Translation>
                            <Translation>
                                {
                                    t =>
                                        <p className='font-medium text-xl text-white pt-5'>
                                            {t("HomePage.IndividualBlockPart2")}
                                        </p>
                                }
                            </Translation>
                            <Translation>
                                {
                                    t =>
                                        <p className='font-light text-white pt-3'>
                                            {t("HomePage.IndividualBlockPart3")}
                                        </p>
                                }
                            </Translation>
                        </div>
                    </div>
                </div>
            </div>

            {/* Блок истории */}
            <div className='container mx-auto flex flex-col lg:mb-24 mt-24'>
                <Translation>
                    {
                        t =>
                            <h1 className='font-bold text-3xl lg:mt-10 p-5 lg:p-0 first-letter:text-color-home'>
                                {t("HomePage.AllStartedBlockPart1")}
                            </h1>
                    }
                </Translation>
                <div className='flex flex-col lg:relative mt-4'>
                    <div className='lg:absolute top-20 bg-[#5B5B5B] p-5 lg:p-10 lg:w-[750px] text-white z-10'>
                        <Translation>
                            {
                                t =>
                                    <h2 className='font-medium text-xl mb-6'>
                                        {t("HomePage.AllStartedBlockPart2")}
                                    </h2>
                            }
                        </Translation>
                        <Translation>
                            {
                                t =>
                                    <p className='font-light text-lg'>
                                        {t("HomePage.AllStartedBlockPart3")}
                                    </p>
                            }
                        </Translation>
                    </div>
                    <div className='lg:self-end p-4 pt-0 lg:p-0 relative'>
                        <img className='static z-0 object-fill h-[600px] w-[800px]' src={mainImg} alt='#' />
                        <div className='bg-[#FF9619] h-11 w-12 lg:h-14 lg:w-28 absolute -top-4 right-0 lg:top-[16.5rem] lg:-left-14 z-10'></div>
                    </div>

                </div>
            </div>

            {/* Форма для обратного звонка */}
            <QuestionForm />

            {/*Партнеры*/}
            <div className='container mx-auto'>
                <div className='flex flex-col'>
                    <Translation>
                        {
                            t =>
                                <h1 className='font-bold text-3xl mt-16 p-5 lg:p-0 first-letter:text-color-home'>
                                    {t("HomePage.PartnersBlock")}
                                </h1>
                        }
                    </Translation>
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