import React from 'react';
import ContactCard from '../../components/ContactsPage/ContactCard';
import QuestionForm from '../../components/HomePage/QuestionForm';
import MapCard from "../../components/ContactsPage/MapCard/MapCard.jsx";
import { Translation } from 'react-i18next';


const ContactsPage = () => {
    return (
        <>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row gap-8 justify-center m-8'>
                    <MapCard />
                </div>
                <Translation>
                    {
                        t =>
                            <div className='flex flex-col lg:flex-row gap-8 justify-center m-8'>
                                <ContactCard
                                    header={t("Contact.header1")}
                                    address={t("Contact.address1")}
                                    addressName={t("Contact.addressName1")}
                                    email='example@mail.com'
                                    tel='8-800-555-35-35'
                                />
                                {/* <ContactCard
                                    header='Москва'
                                    address='ул.Пушкина д.42'
                                    addressName='ТЦ Большой'
                                    email='example@mail.com'
                                    tel='8-800-555-35-35'
                                />
                                <ContactCard
                                    header='Москва'
                                    address='ул.Пушкина д.42'
                                    addressName='ТЦ Большой'
                                    email='example@mail.com'
                                    tel='8-800-555-35-35'
                                /> */}
                            </div>
                    }
                </Translation>
            </div>
            <QuestionForm />
        </>

    )
}

export default ContactsPage;