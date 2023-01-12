import React, { useState } from 'react';
import { Translation } from 'react-i18next';

const QuestionForm = () => {

    const [showAccept, setShowAccept] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        setShowAccept(true)
    }

    return (
        <div className='bg-[#A9C2BE] flex'>
            <div className='container mx-auto flex items-center justify-center mt-8 mb-8'>
                <form className='flex flex-col bg-white mr-5 ml-5 p-8 gap-3'>
                    <Translation>
                        {
                            t => <p className='font-medium text-[#FF9619] pt-5'>{t("Questions.Title")}</p>
                        }
                    </Translation>
                    <Translation>
                        {
                            t => <p className='font-bold text-xl uppercase'>{t("Questions.SubTitle")}</p>
                        }
                    </Translation>
                    <div className='flex flex-col gap-5 mt-4 mb-4'>
                        <Translation>
                            {
                                t => <input type="text" 
                                className='border-b border-[#D1D1D1] text-24 font-normal' 
                                placeholder={t("Questions.NameBlock")} />
                            }
                        </Translation>
                        <Translation>
                            {
                                t => <input type="text" 
                                className='border-b border-[#D1D1D1] text-24 font-normal' 
                                placeholder={t("Questions.TelephoneBlock")} />
                            }
                        </Translation>
                        <Translation>
                            {
                                t => <input type="text" 
                                className='border-b border-[#D1D1D1] text-24 font-normal' 
                                placeholder={t("Questions.CountryBlock")} />
                            }
                        </Translation>
                        <Translation>
                            {
                                t => <input type="text" 
                                className='border-b border-[#D1D1D1] text-24 font-normal' 
                                placeholder={t("Questions.CommentBlock")} />
                            }
                        </Translation>
                    </div>
                    <div className='flex'>
                        <input type="checkbox" className='' />
                        <Translation>
                            {
                                t => <p className='text-[#343434] text-24 font-normal ml-2'>{t("Questions.Accept")}</p>
                            }
                        </Translation>
                    </div>
                    <Translation>
                        {
                            t =>
                                <button className='h-10 bg-[#FF9619] pr-4 pl-4 pt-2 pb-2 mb-5 text-sm text-white font-bold uppercase' onClick={handleClick}>
                                    {t("Questions.ButtonAccept")}
                                    </button>
                        }
                    </Translation>
                    {showAccept ? (
                        <div className='flex items-center justify-center'>
                            <Translation>
                                {
                                    t => <h1>{t("Questions.MessageAccept")}</h1>
                                }
                            </Translation>
                        </div>
                    ) : null}
                </form>
            </div>
        </div>

    )
}

export default QuestionForm;