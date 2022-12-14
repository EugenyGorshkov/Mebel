import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Footer from '../../components/Footer';
import NavigationFull from '../../components/NavitationFull';
import HomePage from '../HomePage/HomePage';

const App = () => {


  return (
    <>
      <NavigationFull />
      <div className='mt-[60px] lg:mt-[120px]'>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
      <Footer />
    </>

  )
}

export default App
