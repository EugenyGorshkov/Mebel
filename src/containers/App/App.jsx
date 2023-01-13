import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cn from 'classnames'

import Footer from '../../components/Footer';
import NavigationFull from '../../components/NavitationFull';
import ContactsPage from '../ContactsPage';
import HomePage from '../HomePage';
import GalleryPage from "../GalleryPage";
import AboutPage from '../AboutPage';

import styles from './App.module.scss'

const App = () => {

    const [scrollModal, setScrollModal] = useState(false)

    const { t, i18n } = useTranslation()

    const changeLanguage = (language) => {
        i18n.changeLanguage(language)
        document.documentElement.lang = language
    }
    
    return (
        <div className={cn('flex flex-col h-full', styles.app, scrollModal ? styles.modalActive : '')}>
            <NavigationFull changeLanguage={changeLanguage}/>
            <div className='mt-[64px] lg:mt-[120px] flex-auto'>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/contacts' element={<ContactsPage />} />
                    <Route path='/gallery' element={<GalleryPage setScrollModal={setScrollModal}/>} />
                    <Route path='/about' element={<AboutPage t={t}/>} />
                </Routes>
            </div>
            <Footer />
        </div>

    )
}

export default App
