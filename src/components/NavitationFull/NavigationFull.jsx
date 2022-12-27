import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import cn from 'classnames';

import logo from '../../assets/logo.svg'
import styles from './NavigationFull.module.scss'
import { Translation } from 'react-i18next';

const NavigationFull = (props) => {
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
                    <select name="" id="">
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
                    <li className={styleListItemTw}>
                        <Translation>
                            {
                                t => <Link to='/'>{t("NavigationTitle.part1")}</Link>
                            }
                        </Translation>
                    </li>
                    {/* <ul><li></li></ul> */}
                    <li className={styleListItemTw}>
                        <Translation>
                            {
                                t => <Link to='/gallery'>{t("NavigationTitle.part2")}</Link>
                            }
                        </Translation>
                    </li>
                </ul>
                {/* Logo 2 Desctop*/}
                <img className='hidden lg:block max-w-[80px]' src={logo} alt="#" />

                <ul className='block lg:flex items-center gap-16 relative'>
                    <li className={styleListItemTw}>
                        <Translation>
                            {
                                t => <Link to='/about'>{t("NavigationTitle.part3")}</Link>
                            }
                        </Translation>
                    </li>
                    <li className={styleListItemTw}>
                        <Translation>
                            {
                                t => <Link to='/contacts'>{t("NavigationTitle.part4")}</Link>
                            }
                        </Translation>
                    </li>

                    <div className='hidden lg:block absolute top-7 -right-20'>
                        {/* <select name="" id="">
                            <option value={props.changeEng}>RU</option>
                            <option value={props.changeRu}>EN</option>
                        </select> */}
                        <button onClick={props.changeEng}>EN</button>
                        <button onClick={props.changeRu}>RU</button>
                    </div>


                </ul>
            </div>

        </nav>
    )
}


export default NavigationFull;