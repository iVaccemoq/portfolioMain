import './online-code.scss'

import { useState } from 'react';

const MainFrameFourthPage = () => {

    const [inputName, setInputName] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputMessage, setInputMessage] = useState('');

    const setInputValue = (e) => {
        if (e.target.id === 'name') {
            setInputName(e.target.value)
        }
        if (e.target.id === 'email') {
            setInputEmail(e.target.value)
        }
        if (e.target.id === 'message') {
            setInputMessage(e.target.value)
        }
    }

    return (
        <div className="main-screen__wrapper main-screen__wrapper_fourth-page">
            <form className="main-screen__form" action="">
                <label  htmlFor="" for='name' className="main-screen__label">_name:</label>
                <input onChange={setInputValue} type="text" id='name' className="main-screen__input" />
                <label htmlFor="" for='email' className="main-screen__label">_email:</label>
                <input onChange={setInputValue} type="text" id='email' className="main-screen__input" />
                <label htmlFor="" for='message' className="main-screen__label">_message:</label>
                <input onChange={setInputValue} type="text" id='message' className="main-screen__input" />
                <button className="main-screen__form-button">submit-message</button>
            </form>
            <div className="online-code">
                <div className="online-code__global-wrapper">
                    
                    <div className="online-code__row">
                        <span className="online-code__const">const </span> 
                        <span className="online-code__var">button</span> 
                        <span className="online-code__const"> = </span> 
                        <span className="online-code__var">
                            document
                            <span className="online-code__grey">.</span>
                            querySelector(
                            <span className='online-code__text'>'#sendBtn'</span>)
                        </span>  
                        <span className="online-code__grey">;</span>
                    </div>

                    <div className="online-code__row">.</div>

                    <div className="online-code__row">
                        <span className="online-code__const">const </span> 
                        <span className="online-code__var">message</span>
                        <span className="online-code__const"> = </span> 
                        <span className="online-code__grey">{'{'}</span>
                    </div>
                    
                    <div className="online-code__row">
                        <span className="online-code__var">name 
                            <span className="online-code__grey">:&nbsp;</span>
                            <span className='online-code__text'>{`"${(() => {
                                if (inputName.length > 0) {
                                    return '\u00A0';
                                } else {
                                    return '';
                                }
                            })()}${inputName}\u00A0"`}</span>
                        </span>
                        <span className="online-code__grey">,</span>
                    </div>
                    
                    <div className="online-code__row">
                        <span className="online-code__var">email
                            <span className="online-code__grey">:&nbsp;</span>
                            <span className='online-code__text'>{`"${(() => {
                                if (inputEmail.length > 0) {
                                    return '\u00A0';
                                } else {
                                    return '';
                                }
                            })()}${inputEmail}\u00A0"`}</span>
                        </span> 
                        <span className="online-code__grey">,</span>
                    </div>

                    <div className="online-code__row">
                        <span className="online-code__var">message
                            <span className="online-code__grey">:&nbsp;</span>
                            <span className='online-code__text'>{`"${(() => {
                                if (inputMessage.length > 0) {
                                    return '\u00A0';
                                } else {
                                    return '';
                                }
                            })()}${inputMessage}\u00A0"`}</span>
                        </span> 
                        <span className="online-code__grey">,</span>
                    </div>

                    <div className="online-code__row">
                        <span className="online-code__var online-code__not-used">date</span>
                        <span className="online-code__grey">:</span> <span className='online-code__text'>"Thu 21 Apr"</span></div>
                    
                    <div className="online-code__row">
                        <span className="online-code__grey">{'}'}</span>
                    </div>
                    
                    <div className="online-code__row">.</div>
                    
                    <div className="online-code__row">
                        <span className="online-code__var">
                            button
                            <span className="online-code__grey">.</span>
                            addEventListener
                            </span>{'('}<span className='online-code__text'>'click'</span><span className="online-code__grey">,</span> <span className="online-code__grey">()</span> <span className="online-code__const">{' =>'}</span> <span className="online-code__grey">{'{'}</span></div>
                    
                    <div className="online-code__row">
                        <span className="online-code__var">form<span className="online-code__grey">.</span>send<span className="online-code__grey">(</span>message<span className="online-code__grey">)</span></span><span className="online-code__grey">;</span></div>
                    
                    <div className="online-code__row">
                        <span className="online-code__grey">{'})'}</span></div>
                    
                </div>

            </div>
        </div>
    )
}

export default MainFrameFourthPage;