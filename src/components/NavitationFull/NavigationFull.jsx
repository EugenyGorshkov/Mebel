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
            <div className='block lg:hidden max-w-[34px] ml-4 relative'>
                <img className='w-full' src={logo} alt="#" />
                <div className='absolute top-1 -right-64'>
                    <select name="" id="" >
                                <option value="ru">RU</option>
                                <option value="en">EN</option>
                    </select>
                </div>
            </div>

            {/* Burger icon */}
            <div 
                className={cn('lg:hidden mr-4', styles.burger__icon, activeBurger ? styles._active : '')} 
                onClick={activeBurgerHandler}
            >
                <span></span>
            </div>
            
            {/* Menu body */}
            <div className={cn('block lg:flex w-full lg:justify-center gap-16', styles.burger_body, activeBurger ? styles._active : '')}>
                <ul className='block lg:flex items-center gap-16'>
                    <li className={styleListItemTw} onClick={activeBurgerHandler}>
                        <Link to='/'>Главная</Link>
                    </li>
                    {/* <ul><li></li></ul> */}
                    <li className={styleListItemTw} onClick={activeBurgerHandler}>
                        <Link to='/gallery'>Галлерея</Link>
                    </li>
                </ul>
                {/* Logo 2 Desctop*/}
                <img className='hidden lg:block max-w-[80px]' src={logo} alt="#" />
 
                <ul className='block lg:flex items-center gap-16 relative'>
                    <li className={styleListItemTw} onClick={activeBurgerHandler}>
                        <Link to='/about'>О Компании</Link>
                    </li>
                    <li className={styleListItemTw} onClick={activeBurgerHandler}>
                        <Link to='/contacts'>Контакты</Link>
                    </li>
                    <div className='hidden lg:block absolute top-7 -right-20'>
                        <select name="" id="" >
                            <option value="ru">RU</option>
                            <option value="en">EN</option>
                        </select>
                    </div>
                    
                </ul>
            </div>

        </nav>
    )
}


export default NavigationFull;