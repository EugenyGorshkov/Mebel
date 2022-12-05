import React from 'react';
import { NavLink, Link } from 'react-router-dom';


const Navigation = () => {
    return (
        <>
           <ul>
                <li><Link to='/'>Главная</Link></li>
                <li><Link to='/contacts'>Контакты</Link></li>
                <li><Link to='/about'>О Компании</Link></li>
                <li><Link to='/12'>8-800-555-35-35</Link></li>
                <li>Ru</li>
            </ul> 
        </>
    )
}


export default Navigation;