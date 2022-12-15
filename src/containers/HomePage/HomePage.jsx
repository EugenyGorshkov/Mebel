import React from 'react';

import QuestionForm from '../../components/HomePage/QuestionForm';

import mainImg from '/src/assets/10000_Post01.svg'
import secondImg from '/src/assets/Rectangle.svg'
import zaraLogo from '/src/assets/logoSponcer/1280px-Zara_Logo.svg'
import appleLogo from '/src/assets/logoSponcer/Apple-icon.svg'
import vogueLogo from '/src/assets/logoSponcer/vogue-logo-1.svg'
import samsungLogo from '/src/assets/logoSponcer/pngwing.svg'

const HomePage = () => {
    return (
        <>
            {/*Стартовое отображение*/}
            <div className='h-screen'>
                <div className='bg-homeColor1 h-3/5'>
                    <div className='container mx-auto flex lg:flex-row flex-col'>
                        <div className='basis-1/3 ml-[15px] mr-[15px]'>
                            <div className='lg:mt-96'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet dolorum
                                    est excepturi facere illum, impedit ipsa ipsam, labore laboriosam magni nemo neque
                                    nulla obcaecati odit praesentium quasi quisquam sunt?</p>
                            </div>
                        </div>
                        <div className='basis-2/3 lg:mr-[15px]'>
                            <div className='lg:mt-36'>
                                <img src={mainImg} alt='none'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*Блоки с примерами товаром*/}
            <div className='container mx-auto h-screen flex flex-col'>
                <h1 className=''>Мои работы</h1>
                <div className='flex lg:flex-row flex-col items-center justify-center gap-12 mt-24'>
                    <div className='max-w-96 max-h-96 lg:h-96 lg:w-96 bg-amber-600'>1</div>
                    <div className='max-w-96 max-h-96 lg:h-96 lg:w-96  bg-amber-600'>2</div>
                    <div className='max-w-96 max-h-96 lg:h-96 lg:w-96  bg-amber-600'>3</div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <button
                        className='h-10 bg-[#FF9619] mt-36 mb-5 text-sm text-white font-bold uppercase w-1/2'>Перейти в
                        галерею
                    </button>
                </div>
            </div>


            <div className='container mx-auto h-screen flex flex-col'>
                <h1>С чего все началось</h1>
                <div className='flex items-center justify-center mt-24'>
                    <div className='lg:relative '>
                        <img className='static z-0' src={mainImg} alt='none'/>
                        <div className='lg:absolute lg:bottom-0 lg:left-0'>
                            <div className='bg-gray-700 lg:z-10 lg:mb-52 lg:-ml-52 lg:h-96 lg:w-96 max-h-96 max-w-96'>
                                <p className='m-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
                                    amet dolorum
                                    est excepturi facere illum, impedit ipsa ipsam, labore laboriosam magni nemo neque
                                    nulla obcaecati odit praesentium quasi quisquam sunt?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <QuestionForm/>

            {/*Партнеры*/}
            <div className='container mx-auto h-screen flex lg:flex-col'>
                <div>
                    <h1>Партнеры</h1>
                </div>
                <div className='flex lg:flex-row flex-wrap lg:mt-24 justify-between max-h-10 max-w-10'>
                    <img src={zaraLogo} alt='none'/>
                    <img src={samsungLogo} alt='none'/>
                    <img src={appleLogo} alt='none'/>
                    <img src={vogueLogo} alt='none'/>
                </div>
                <div className='flex lg:flex-row flex-wrap lg:mt-24 justify-between max-h-10 max-w-10'>
                    <img src={zaraLogo} alt='none'/>
                    <img src={samsungLogo} alt='none'/>
                    <img src={appleLogo} alt='none'/>
                    <img src={vogueLogo} alt='none'/>
                </div>
                <div className='flex lg:flex-row flex-wrap  lg:mt-24 justify-between max-h-10 max-w-10'>
                    <img src={zaraLogo} alt='none'/>
                    <img src={samsungLogo} alt='none'/>
                    <img src={appleLogo} alt='none'/>
                    <img src={vogueLogo} alt='none'/>
                </div>
            </div>
        </>
    )
}

export default HomePage;