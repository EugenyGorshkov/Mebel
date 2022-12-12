import React from 'react';
import { Route, Routes } from 'react-router';

import NavigationFull from '../../components/NavitationFull';
import HomePage from '../HomePage/HomePage';

const App = () => {


  return (
    <>
      <NavigationFull />
      <div>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
    </>

  )
}

export default App
