import React from 'react';

const ContactCard = ({
    header,
    address,
    adressName,
    email,
    tel,
}) => {
    return (
        <div className='max-w-sm bg-gray-500'>
            <div className='p-14'>
                <h2 className='text-[#FF9619] text-2xl font-bold mb-5'>{header}</h2>
                <p className='text-white font-normal'><span className='font-bold'>Адресс:</span> {address}</p>
                <p className='text-white font-bold'>{adressName}</p>
                <p className='text-white font-normal'><span className='font-bold'>Почта:</span> {email}</p>
                <p className='text-white font-normal'><span className='font-bold'>Телефон:</span> {tel}</p>
            </div>
        </div>
    )
}

export default ContactCard;