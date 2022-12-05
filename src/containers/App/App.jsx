import React from 'react';
import { Route, Routes } from 'react-router';

import Navigation from '../../components/Navitation';
import HomePage from '../HomePage/HomePage';

const App = () => {


  return (
      <>
        <Navigation/>

        <Routes>
          <Route path='/' element={<HomePage/>}/>
        </Routes>  
      </>
  )
}

export default App
