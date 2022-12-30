import React from 'react';

import AboutCard from '../../components/AboutPage/AboutCard';

const AboutPage = () => {
    return (
        <div className='container mx-auto mb-8 flex flex-col gap-5 lg:gap-16'>
            <AboutCard theme='one'/>
            <AboutCard theme='two'/>
            <AboutCard theme='one'/>
        </div>
    )
}

export default AboutPage;