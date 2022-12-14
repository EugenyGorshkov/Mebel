import React from 'react';

import QuestionForm from '../../components/HomePage/QuestionForm';

import mainImg from '/src/assets/10000_Post01.svg'
import secondImg from '/src/assets/Rectangle.svg'

const HomePage = () => {
    return (
        <>
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
            <div>
                <div className='container h-screen flex gap-12 mx-auto items-center justify-center'>
                    <div className='w-96 h-96 bg-amber-600'>1</div>
                    <div className='w-96 h-96 bg-amber-600'>2</div>
                    <div className='w-96 h-96 bg-amber-600'>3</div>
                </div>
            </div>
            <div className="h-screen">
                С чего все началось
                <div className='container mx-auto h-screen flex items-center justify-center'>
                    <div className='relative'>
                        <img className='static z-0' src={mainImg} alt='none'/>
                        <div className='absolute bottom-0 left-0'>
                            <img className='z-10 lg:mb-52 -ml-52' src={secondImg} alt='none'/>
                        </div>
                    </div>
                </div>
            </div>
            <QuestionForm />
            <div className="h-screen">Партнеры</div>
        </>
    )
}

export default HomePage;