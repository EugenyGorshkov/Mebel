import React from 'react';

import AboutCard from '../../components/AboutPage/AboutCard';

const AboutPage = () => {
    return (
        <div className='container mx-auto mt-8 mb-16 flex flex-col gap-20'>
            <AboutCard theme='one'/>
            <AboutCard theme='two'/>
            <AboutCard theme='one'/>
        </div>
    )
}

export default AboutPage;