import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import cn from 'classnames';

import logo from '../../assets/logo.svg'
import styles from './NavigationFull.module.scss'


const NavigationFull = () => {
    const [activeBurger, setActiveBurger] = useState(false);
    const [activeSubTitle, setActiveSubTitle] = useState(false);

    const styleListItemTw = 'whitespace-nowrap uppercase font-semibold text-sm'

    // Burger toggle func
    const activeBurgerHandler = () => {
        activeBurger ? setActiveBurger(false) : setActiveBurger(true)
    }

    // Subtitle menu toggle func
    const activeSubTitleHandler = () => {
        activeSubTitle ? setActiveSubTitle(false) : setActiveSubTitle(true)
    }

    return (
        <nav 
            className='flex z-50 bg-white bg-opacity-90 backdrop-blur-[5px] fixed h-[64px] justify-between items-center lg:justify-center max-w-none lg:h-[120px] top-0 left-[50%] w-full translate-x-[-50%]'
        >
            {/* Logo 1 Mobile*/}
            <img className='block lg:hidden max-w-[34px] ml-4' src={logo} alt="#" />

            {/* Burger icon */}
            <div 
                className={cn('lg:hidden mr-4', styles.burger__icon, activeBurger ? styles._active : '')} 
                onClick={activeBurgerHandler}
            >
                <span></span>
            </div>
            
            {/* Menu body */}
            <div className={cn('block lg:flex gap-16', styles.burger_body, activeBurger ? styles._active : '')}>
                <ul className='block lg:flex items-center gap-16'>
                    <li className={styleListItemTw}>
                        <Link to='/'>Главная</Link>
                    </li>
                    {/* <ul><li></li></ul> */}
                    <li className={styleListItemTw}>
                        <Link to='/gallery'>Галлерея</Link>
                    </li>
                </ul>
                {/* Logo 2 Desctop*/}
                <img className='hidden lg:block max-w-[80px]' src={logo} alt="#" />
 
                <ul className='block lg:flex items-center gap-16'>
                    <li className={styleListItemTw}>
                        <Link to='/about'>О Компании</Link>
                    </li>
                    <li className={styleListItemTw}>
                        <Link to='/contacts'>Контакты</Link>
                    </li>
                    <li className={styleListItemTw}>
                        Ru
                    </li>
                </ul>
            </div>

        </nav>
    )
}


export default NavigationFull;