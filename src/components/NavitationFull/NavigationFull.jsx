import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import logo from '../../assets/logo.svg'
import styles from './NavigationFull.module.css'


const NavigationFull = () => {
    const [activeBurger, setActiveBurger] = useState(false);

    const activeHandler = () => {
        activeBurger ? setActiveBurger(false) : setActiveBurger(true)
    }

    return (
        <nav className='block lg:flex justify-center max-w-none relative'>
            <span className='absolute top-0 right-5 lg:hidden' onClick={activeHandler}>x</span>
            <div className={'block lg:flex gap-16'}>
                <ul className='block lg:flex items-center gap-16'>
                    <li className='whitespace-nowrap'><Link to='/'>Главная</Link></li>
                    <ul><li></li></ul>
                    <li className='whitespace-nowrap'><Link to='/contacts'>Контакты</Link></li>
                </ul>

                <img className='hidden lg:block max-w-[80px]' src={logo} alt="#" />
 
                <ul className='block lg:flex items-center gap-16'>
                    <li className='whitespace-nowrap'><Link to='/about'>О Компании</Link></li>
                    <li className='whitespace-nowrap'><Link to='/12'>8-800-555-35-35</Link></li>
                    <li className='whitespace-nowrap'>Ru</li>
                </ul>
            </div>

        </nav>
    )
}


export default NavigationFull;