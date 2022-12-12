import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import cn from 'classnames';

import logo from '../../assets/logo.svg'
import styles from './NavigationFull.module.scss'


const NavigationFull = () => {
    const [activeBurger, setActiveBurger] = useState(false);
    const [activeSubTitle, setActiveSubTitle] = useState(false);



    const activeBurgerHandler = () => {
        activeBurger ? setActiveBurger(false) : setActiveBurger(true)
    }

    const activeSubTitleHandler = () => {
        activeSubTitle ? setActiveSubTitle(false) : setActiveSubTitle(true)
    }

    return (
        <nav className='flex relative h-[64px] justify-between items-center lg:justify-center max-w-none lg:h-[120px]'>
            <img className='block lg:hidden max-w-[34px] ml-4' src={logo} alt="#" />

            <div className={cn('lg:hidden mr-4', styles.burger__icon, activeBurger ? styles._active : '')} onClick={activeBurgerHandler}>
                <span></span>
            </div>
            
            <div className={cn('block lg:flex gap-16', styles.burger_body, activeBurger ? styles._active : '')}>
                <ul className='block lg:flex items-center gap-16'>
                    <li className='whitespace-nowrap uppercase font-semibold text-sm'><Link to='/'>Главная</Link></li>
                    <ul><li></li></ul>
                    <li className='whitespace-nowrap uppercase font-semibold text-sm'><Link to='/contacts'>Контакты</Link></li>
                </ul>

                <img className='hidden lg:block max-w-[80px]' src={logo} alt="#" />
 
                <ul className='block lg:flex items-center gap-16'>
                    <li className='whitespace-nowrap uppercase font-semibold text-sm'><Link to='/about'>О Компании</Link></li>
                    <li className='whitespace-nowrap uppercase font-semibold text-sm'><Link to='/12'>8-800-555-35-35</Link></li>
                    <li className='whitespace-nowrap uppercase font-semibold text-sm'>Ru</li>
                </ul>
            </div>

        </nav>
    )
}


export default NavigationFull;