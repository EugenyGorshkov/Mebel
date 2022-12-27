import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import cn from 'classnames';

import logo from '../../assets/logo.svg'
import styles from './NavigationFull.module.scss'
import { Translation } from 'react-i18next';

const NavigationFull = ({changeLanguage}) => {
    const [activeBurger, setActiveBurger] = useState(false);
    const [activeSubTitle, setActiveSubTitle] = useState(false);

    const [ln, setLn] = useState("en")

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
                <Link to='/'><img className='w-full' src={logo} alt="#" /></Link>
            </div>


            {/* Burger icon and select*/}
            <div className='flex items-center gap-4'>
                <div className='block lg:hidden'>
                        <select value={ln} onChange={e => setLn(() => changeLanguage(e.target.value))}>
                            <option value="ru">RU</option>o
                            <option value="en">EN</option>
                        </select>
                </div>
                <div
                    className={cn('lg:hidden mr-4', styles.burger__icon, activeBurger ? styles._active : '')}
                    onClick={activeBurgerHandler}
                >
                    <span ></span>
                </div>
            </div>
            
            {/* Menu body */}
            <div 
                className={cn('block lg:flex w-full lg:justify-center', styles.burger_body, activeBurger ? styles._active : '')} 
                onClick={activeBurgerHandler}
            >

                {/* Logo 2 Desctop*/}
                <img className='hidden lg:block absolute top-[50%] translate-y-[-50%] max-w-[80px]' src={logo} alt="#" />

                <ul className='block lg:flex justify-center items-center relative lg:ml-10' >
                    <li className={cn(styleListItemTw, 'lg:mr-14')}>
                        <Translation>
                            {
                                t => <Link to='/'>{t("NavigationTitle.part1")}</Link>
                            }
                        </Translation>
                    </li>
                    <li className={cn(styleListItemTw, 'lg:mr-[90px]')}>
                        <Translation>
                            {
                                t => <Link to='/gallery'>{t("NavigationTitle.part2")}</Link>
                            }
                        </Translation>
                    </li>
                    <li className={cn(styleListItemTw, 'lg:ml-[90px] lg:mr-14')}>
                        <Translation>
                            {
                                t => <Link to='/about'>{t("NavigationTitle.part3")}</Link>
                            }
                        </Translation>
                    </li>
                    <li className={cn(styleListItemTw)}>
                        <Translation>
                            {
                                t => <Link to='/contacts'>{t("NavigationTitle.part4")}</Link>
                            }
                        </Translation>
                    </li>

                    <div className='hidden lg:block absolute top-5 -right-20'>
                        <select value={ln} onChange={e => setLn(() => changeLanguage(e.target.value))}>
                            <option value="ru">RU</option>o
                            <option value="en">EN</option>
                        </select>
                    </div>


                </ul>
            </div>

        </nav>
    )
}


export default NavigationFull;