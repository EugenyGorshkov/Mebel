import React, {useState} from 'react';

const QuestionForm = () => {

    const [showAccept, setShowAccept] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        setShowAccept(true)
    }

    return (
        <div className='bg-[#A9C2BE] h-screen flex'>
            <div className='container mx-auto flex items-center justify-center'>
                <form className='flex flex-col bg-white mr-5 ml-5 p-8 gap-3'>
                    <p className='font-medium text-[#FF9619] pt-5'>Заполните форму</p>
                    <p className='font-bold text-xl uppercase'>остались вопросы?</p>
                    <div className='flex flex-col gap-5 mt-4 mb-4'>
                        <input type="text" className='border-b border-[#D1D1D1] text-24 font-normal' placeholder='Ваше имя*'/>
                        <input type="text" className='border-b border-[#D1D1D1] text-24 font-normal' placeholder='Ваш номер телефона*'/>
                        <input type="text" className='border-b border-[#D1D1D1] text-24 font-normal' placeholder='Страна'/>
                        <input type="text" className='border-b border-[#D1D1D1] text-24 font-normal' placeholder='Комментарий'/>
                    </div>
                    <div className='flex'>
                        <input type="checkbox" className=''/>
                        <p className='text-[#343434] text-24 font-normal ml-2'>Подтверждая заказ, я принимаю условия пользовательского соглашения</p>
                    </div>
                    <button className='h-10 bg-[#FF9619] pr-4 pl-4 pt-2 pb-2 mb-5 text-sm text-white font-bold uppercase' onClick={handleClick}>запросить звонок</button>
                    {showAccept ? (
                        <div className='flex items-center justify-center'>
                            <h1>Спасибо, мы с вами свяжемся!</h1>
                        </div>
                    ): null}
                </form>
            </div>
        </div>

    )
}

export default QuestionForm;