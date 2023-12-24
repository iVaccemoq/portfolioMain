import Gpspanel from "../gps-panel/Gps-panel"
import MainScreen from "../mainScreen/MainScreen"
import Window from "../window/Window"
import Scroll from "../scroll/Scroll"
import AsideEntrails from "../asideEntrails/AsideEntrails"
import MainFrameThirdPage from "../mainFrameThirdPage/MainFrameThirdPage"
import AsidePanelEntrailsProjects from "../asidePanelEntrailsProjects/AsidePanelEntrailsProjects"

import greenIco from '../../resourses/greenIco.svg'

import { useState } from "react";

const ThirdRouteWrapper = () => {

    const [toggleClass, setToggleClass] = useState(['projects_active']);
    const [toggleChildClass, setToggleChildClass] = useState(['react_active','','','']);
    const [windowName, setWindowName] = useState(['react','', '', '']);
    const [mainScreen, setMainScreen] = useState('react');

    const onActive = (e) => {

        if (e.target.getAttribute('data-folder') !== null) {
            setToggleClass(toggleClazz(toggleClass,e,'data-folder'))
        } else if (e.target.getAttribute('data-folders') !== null)  {
            setToggleChildClass(toggleClazz(toggleChildClass,e,'data-folders'))
        } 

    }

    const onWindow = (e) => {
        if (e.target.getAttribute('data-folders') !== null) {
             setWindowName(toggleName(e, 'data-folders'))
         }
     }

    const toggleClazz = (whtToggle, e, whtDataAttr) => {

        const copyArr = whtToggle.slice(0);
        let clazz = [];

        let counter = 0;

        copyArr.forEach((item,i) => {
            if (item === `${e.target.getAttribute(whtDataAttr)}_active`) {
                counter ++
            }
        })

        if (counter > 0) {
            clazz = whtToggle.map((item, i) => {

                if (item === `${e.target.getAttribute(whtDataAttr)}_active`) {
                    return ''
                } else {
                    return item
                }
            })
        } else {
            clazz = whtToggle.map((item, i) => {
                
                copyArr[i] = item;

                let counter = 0;

                copyArr.forEach((item,i) => {
                    if (item === `${e.target.getAttribute(whtDataAttr)}_active`) {
                        counter ++
                    }
                })

                if (item === '' && counter === 0) {
                    copyArr[i] = `${e.target.getAttribute(whtDataAttr)}_active`;
                    return `${e.target.getAttribute(whtDataAttr)}_active`
                } else {
                    return item
                }
            })
        }

        return clazz
        
    }

    const toggleName = (e, dataAttr) => {

        setMainScreen(e.target.getAttribute(dataAttr));

        const copyArr = windowName.slice(0);
        let childNames = [];

        childNames = windowName.map((item,i) => {

            let counter = 0;

            copyArr.forEach(attr => {
                if (attr === `${e.target.getAttribute(dataAttr)}`) {
                    counter++
                }
            })

            if (item === '' && counter === 0) {
                copyArr[i] = `${e.target.getAttribute(dataAttr)}`;
                setMainScreen(e.target.getAttribute(dataAttr));
                return `${e.target.getAttribute(dataAttr)}`
            } else {
                copyArr[i] = item;
                return item;
            }
        })
        return childNames
        
    }

    const toggleMainScreen = (dataAttr) => {
        setMainScreen(dataAttr)
    }

    const onClose = (e) => {

        let arr = [];
        for (let key in windowName) {
            if (e.target.getAttribute('data-close') === windowName[key]) {
                arr[key] = ''
            } else {
                arr[key] = windowName[key]
            } 

            
        }

        let counter = 0;
        arr.forEach((item,i) => {
            if (item !== '') {
                setMainScreen(item)
            } else {
                counter++
            }
        })

        if (counter === 4) {
            setMainScreen('')
        }

        setWindowName(arr)
    }

    return (
        <main className="App__two-page-wrapper">
            <Gpspanel onActive={onActive} onWindow={onWindow}>
                <AsideEntrails img={greenIco} dataAttr='projects' name={'projects'} toggleClass={toggleClass}/>
                <AsidePanelEntrailsProjects dataAttr='projects' toggleChildClass={toggleChildClass} toggleClass={toggleClass} main={mainScreen}/>
            </Gpspanel>
            <MainScreen>
                <Window windowName={windowName} toggleMainScreen={toggleMainScreen} onClose={onClose} mainScreen={mainScreen}/>
                <MainFrameThirdPage frame={mainScreen}/>
                <Scroll/>
            </MainScreen>
        </main>
    )
}

export default ThirdRouteWrapper;