import { useState, useEffect } from "react";


const MainScreenEntralis = (props) => {

    const [mainframe, setMainFrame] = useState('')

    useEffect(() => {
        if (props.frame === 'bio') {
            setMainFrame('123');
        } else if (props.frame === 'education') {
            setMainFrame('321');
        } else {
            setMainFrame('555')
        }
    }, [props.frame]);

    return (
        <div className="main-screen__wrapper">
            <div className="main-screen__number">
            1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16
            </div>  
            <p className="main-screen__text">
                <span className="main-screen__text main-screen__text_dat">/**</span> 
                {mainframe}
                <span className="main-screen__text main-screen__text_dat">*/</span>  
            </p>
        </div>
    )
}

export default MainScreenEntralis;