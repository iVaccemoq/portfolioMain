import { useState, useEffect } from "react";

import Scroll from "../scroll/Scroll";
import CodeSnippet from "../codeSnippet/CodeSnippet";

const MainScreenEntralis = (props) => {

    const [mainframe, setMainFrame] = useState(<>
        &nbsp;*&nbsp;Привет, друг. Давай познакомимся.<br/>
        &nbsp;*&nbsp;<br/> &nbsp;* Меня всегда привлекала работа на клиентской <br/> &nbsp;* стороне приложений. Моя цель как
        фронтенд  &nbsp;*&nbsp;разработчика - создавать удобные, <br/> &nbsp;* функциональные и красивые
        веб-приложения, <br/> &nbsp;* которые сделают использование моего продукта &nbsp;*&nbsp;более комфортным и
        эффективным. <br/>&nbsp;* <br/>
        &nbsp;*&nbsp;Всегда стремлюсь создавать интуитивно понятные &nbsp;*&nbsp;и отзывчивые пользовательские
        интерфейсы.
    </>)

    useEffect(() => {
        if (props.frame === 'bio') {
            setMainFrame(
                <>
                    &nbsp;*&nbsp;Привет, друг. Давай познакомимся.<br/>
                    &nbsp;*&nbsp;<br/> &nbsp;* Меня всегда привлекала работа на клиентской <br/> &nbsp;* стороне приложений. Моя цель как
                    фронтенд  &nbsp;*&nbsp;разработчика - создавать удобные, <br/> &nbsp;* функциональные и красивые
                    веб-приложения, <br/> &nbsp;* которые сделают использование моего продукта &nbsp;*&nbsp;более комфортным и
                    эффективным. <br/>&nbsp;* <br/>
                    &nbsp;*&nbsp;Всегда стремлюсь создавать интуитивно понятные &nbsp;*&nbsp;и отзывчивые пользовательские
                    интерфейсы.
                </>
            );
        } else if (props.frame === 'education') {
            setMainFrame(
                <>
                    &nbsp;*&nbsp;Я студент 2 курса<br/> &nbsp;*&nbsp;<br/>&nbsp;*&nbsp;Московского политехнического университета, &nbsp;*&nbsp;факультета информационных технологий.<br/>
                    &nbsp;*&nbsp;Учусь по направлению <br/>
                    &nbsp;*&nbsp;"Интеграция и программирование в САПР".
                </>);
        } else {
            setMainFrame(
                <>
                    *
                </>
            );
        }
        
    }, [props.frame]);

    let dotCounter = 0;
    let LineCounter = ''

    const wordTransfer = () => {
        for (let word of mainframe.props.children) {
            if (word.props === undefined) {
                for (let underword of word) {
                    if (underword === '*') {
                        dotCounter++
                    }
                }
            }
        }
        dotCounter+=2

        for (let i=1; i <= dotCounter; i++) {
            LineCounter = LineCounter + ` ${i}`
        }
        return LineCounter
    }

    return (
        <div className="main-screen__wrapper">
            <div className="main-screen__aboutme">
                <div className="main-screen__number">
                {
                    wordTransfer()
                }
                </div>  
                <p className="main-screen__text">
                    <span className="main-screen__text_dat">/**</span> 
                    <span className="main-screen__main">{mainframe}
                    </span>
                    <span className="main-screen__text_dat">*/</span>  
                </p>
                <Scroll topWindow={true}/>
            </div>
            <CodeSnippet/>
        </div>
    )
}

export default MainScreenEntralis;