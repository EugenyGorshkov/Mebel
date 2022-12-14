import React from 'react';

import Instagram from '../../assets/Instagram.svg'
import Facebook from '../../assets/Facebook.svg'
import VK from '../../assets/VK.svg'
import Logo from '../../assets/logo white.svg'
import Arrow from '../../assets/Arrow.svg'

const Footer = () => {
    return (
        <footer className='bg-gray-500 text-center'>
            <div className='container mx-auto flex flex-col lg:flex-row gap-10 p-8 lg:items-center lg:justify-center'>
                <button className='flex self-center items-center h-12 bg-[#FF9619] pl-3 pt-2 pb-2 uppercase text-white font-medium lg:order-5'>
                    Персональная консультация
                    <img src={Arrow} alt="Arrow" className='block pl-1 pr-3'/>
                </button>
                <div className='flex flex-col ml-12 mr-12 items-center gap-3 lg:order-3'>
                    <div className='flex gap-3'>
                        <a href="" className='border-2 rounded-full border-white p-[6px] w-9 h-9 flex items-center justify-center object-cover object-center'>
                            <img src={Instagram} alt="Instagram" />
                        </a>
                        <a href="" className='border-2 rounded-full border-white p-[6px] w-9 h-9 flex items-center justify-center object-cover object-center'>
                            <img src={Facebook} alt="Instagram" />
                        </a>
                        <a href="" className='border-2 rounded-full border-white p-[6px] w-9 h-9 flex items-center justify-center object-cover object-center'>
                            <img src={VK} alt="Instagram" />
                        </a>
                    </div>
                    <div className='text-white'>+38 (099)-638-45-37</div>
                </div>
                <img src={Logo} alt="Logo" className='max-h-11 lg:order-1 lg:max-h-20'/>
                <div className='text-white lg:order-2'>© 1993–2021 Интернет-магазин «EKMI™» — меблі</div>
            </div>
        </footer>
    )
}

export default Footer;