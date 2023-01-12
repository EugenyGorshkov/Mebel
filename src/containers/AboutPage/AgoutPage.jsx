import React from 'react';

import { Translation } from 'react-i18next';

import AboutCard from '../../components/AboutPage/AboutCard';
import mainImg2 from '/src/assets/23.jpg'

const AboutPage = ({
    t
}) => {

    return (
        <div className='container mx-auto mb-8 flex flex-col gap-5 lg:gap-16'>
            <Translation>
                {
                    t =>
                        <>
                            <AboutCard
                                theme='one'
                                title={t("About.Card1")}
                                mainText={t("About.TextCard1")}
                                img={mainImg2}
                            />
                            <AboutCard
                                theme='two'
                                title={t("About.Card2")}
                                mainText={t("About.TextCard2")}
                                img={mainImg2}
                            />
                            <AboutCard
                                theme='one'
                                title={t("About.Card3")}
                                mainText={t("About.TextCard3")}
                                img={mainImg2}
                            />
                        </>

                }
            </Translation>
        </div>
    )
}

export default AboutPage;
