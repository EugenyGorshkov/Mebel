import React from 'react';

import loader from '../../../assets/loader/loader.svg'

const Loader = () => {
    return (
        <div>
            <img src={loader} alt="loader" />
            <h2 className='text-center font-bold text-3xl'>Loading...</h2>
        </div>
    )
}

export default Loader;