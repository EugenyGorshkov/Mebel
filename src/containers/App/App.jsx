import React from 'react';
import {Route, Routes} from 'react-router-dom';

import Footer from '../../components/Footer';
import NavigationFull from '../../components/NavitationFull';
import ContactsPage from '../ContactsPage';
import HomePage from '../HomePage/HomePage';
import GalleryPage from "../GalleryPage/GalleryPage.jsx";

const App = () => {

    return (
        <div className='flex flex-col h-full'>
            <NavigationFull/>
            <div className='mt-[64px] lg:mt-[120px] flex-auto'>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/contacts' element={<ContactsPage/>}/>
                    <Route path='/gallery' element={<GalleryPage/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>

    )
}

export default App
