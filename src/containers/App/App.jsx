import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Footer from '../../components/Footer';
import NavigationFull from '../../components/NavitationFull';
import ContactsPage from '../ContactsPage';
import HomePage from '../HomePage';
import GalleryPage from "../GalleryPage";
import AboutPage from '../AboutPage';
import { useTranslation } from 'react-i18next';


const App = () => {

    const { t, i18n } = useTranslation()

    const changeLanguage = (language) => {
        i18n.changeLanguage(language)
    }

    const changeRu = () => {
        changeLanguage("ru")
    }

    const changeEng = () => {
        changeLanguage("en")
    }

    return (
        <div className='flex flex-col h-full'>
            <NavigationFull changeRu={changeRu} changeEng={changeEng}/>
            <div className='mt-[64px] lg:mt-[120px] flex-auto'>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/contacts' element={<ContactsPage />} />
                    <Route path='/gallery' element={<GalleryPage />} />
                    <Route path='/about' element={<AboutPage />} />
                </Routes>
            </div>
            <Footer />
        </div>

    )
}

export default App
