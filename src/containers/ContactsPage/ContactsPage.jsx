import React from 'react';
import ContactCard from '../../components/ContactsPage/ContactCard';
import QuestionForm from '../../components/HomePage/QuestionForm';
import MapCard from "../../components/ContactsPage/MapCard/MapCard.jsx";


const ContactsPage = () => {
    return (
        <>
            <div className='container mx-auto'>
                <MapCard/>
                <div className='flex flex-col lg:flex-row gap-8 justify-center m-8'>
                    <ContactCard 
                        header='Москва' 
                        adress='ул.Пушкина д.42' 
                        adressName='ТЦ Большой' 
                        email='example@mail.com' 
                        tel='8-800-555-35-35'
                    />
                    <ContactCard 
                        header='Москва' 
                        adress='ул.Пушкина д.42' 
                        adressName='ТЦ Большой' 
                        email='example@mail.com' 
                        tel='8-800-555-35-35'
                    />
                    <ContactCard 
                        header='Москва' 
                        adress='ул.Пушкина д.42' 
                        adressName='ТЦ Большой' 
                        email='example@mail.com' 
                        tel='8-800-555-35-35'
                    />
                </div>
            </div>
            <QuestionForm />
        </>
        
    )
}

export default ContactsPage;