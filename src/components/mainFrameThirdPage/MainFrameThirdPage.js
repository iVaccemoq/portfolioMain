import work1 from '../../resourses/work1.svg'
import work2 from '../../resourses/work2.svg'
import work3 from '../../resourses/work3.svg'
import react from '../../resourses/reacticon.svg'

import { useEffect, useState } from 'react'

const MainFrameThirdPage = (props) => {

    const [mainframe, setMainFrame] = useState('')

    useEffect(() => {
        if (props.frame === 'react') {
            setMainFrame('123');
        } else if (props.frame === 'html') {
            setMainFrame('321');
        } else if ((props.frame === 'css')) {
            setMainFrame('666')
        } else if ((props.frame === 'js')) {
            setMainFrame('555')
        } else {
            setMainFrame('...')
        }
    }, [props.frame]);

    return (
        <ol className="main-screen__wrapper main-screen__wrapper_third-page">
            {/* <li className="main-screen__projects">
                <div className="main-screen__project">
                    Project 1
                    <span className="main-screen__descr"> // _ui-animations</span>
                </div>
                <div className="main-screen__work-block">
                    <img className="main-screen__img" src={work1} alt="project" />
                    <p className="main-screen__txt">Duis aute irure dolor in velit esse cillum dolore.</p>
                    <button className="main-screen__button">view-project</button>
                    <img src={react} alt="framework" className="main-screen__framework" />
                </div>
            </li>
            <li className="main-screen__project">
                <div className="main-screen__project">
                    Project 2
                    <span className="main-screen__descr"> // _tetris-game</span>
                </div>
                <div className="main-screen__work-block">
                    <img className="main-screen__img" src={work2} alt="project" />
                    <p className="main-screen__txt">Duis aute irure dolor in velit esse cillum dolore.</p>
                    <button className="main-screen__button">view-project</button>
                    <img src={react} alt="framework" className="main-screen__framework" />
                </div>
            </li>
            <li className="main-screen__project">
                <div className="main-screen__project">
                    Project 3
                    <span className="main-screen__descr"> // _ethereum</span>
                </div>
                <div className="main-screen__work-block">
                    <img className="main-screen__img" src={work3} alt="project" />
                    <p className="main-screen__txt">Duis aute irure dolor in velit esse cillum dolore.</p>
                    <button className="main-screen__button">view-project</button>
                    <img src={react} alt="framework" className="main-screen__framework" />
                </div>            
            </li> */}

            {mainframe}
        </ol>
    )
}

export default MainFrameThirdPage;