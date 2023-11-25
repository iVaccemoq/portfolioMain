import Gpspanel from "../gps-panel/Gps-panel";
import AsideEntrails from "../asideEntrails/AsideEntrails";
import MainScreen from "../mainScreen/MainScreen";
import Window from "../window/Window";
import MainScreenEntralis from "../mainScreenEntralis/MainScreenEntralis";
import Scroll from "../scroll/Scroll";
import AsidePanelEntrails from "../asidePanelEntrails/AsidePanelEntrails";
import AsidePanelEntrailsContacts from "../asidePanelEntrailsContacts/AsidePanelEntrailsContacts";

import bioIcon from '../../resourses/bioFolder.svg'
import educationIcon from '../../resourses/educationFolder.svg'

import { useState } from "react";

const SecondRouteWrapper = () => {

    const [toggleClass, setToggleClass] = useState(['personal-info_active', '','']);
    const [toggleChildClass, setToggleChildClass] = useState(['bio_active','']);
    const [windowName, setWindowName] = useState(['bio.txt','']);

    const onActive = (e) => {

        if (e.target.getAttribute('data-folder') !== null) {
            setToggleClass(toggleClazz(toggleClass,e,'data-folder'))
        } else if (e.target.getAttribute('data-folders') !== null)  {
            setToggleChildClass(toggleClazz(toggleChildClass,e,'data-folders'))
        } 

    }

    const onWindow = (e) => {
        if (e.target.getAttribute('data-folders') !== null) {
             setWindowName(toggleChildName(e, 'data-folders'))
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

    const toggleChildName = (e, dataAttr) => {

        const copyArr = windowName.slice(0);
        let childNames = [];
        let counter = 0;

        childNames = windowName.map((item,i) => {

            copyArr.forEach(item => {
                if (item === `${e.target.getAttribute(dataAttr)}.txt`) {
                    counter++
                }
            })

            if (item === '' && counter === 0) {
                copyArr[i] = e.target.getAttribute(dataAttr);
                return `${e.target.getAttribute(dataAttr)}.txt`
            } else {
                copyArr[i] = item;
                return item;
            }
        })
        return childNames
        
    }

    return (
        <main className="App__two-page-wrapper">
            <Gpspanel onActive={onActive} onWindow={onWindow}>
                <AsideEntrails img={bioIcon} dataAttr='personal-info' name={'personal-info'} toggleClass={toggleClass}/>
                <AsidePanelEntrails dataAttr='personal-info' toggleChildClass={toggleChildClass} toggleClass={toggleClass}/>
                <AsideEntrails img={educationIcon} dataAttr='contacts' name={'contacts'} toggleClass={toggleClass}/>
                <AsidePanelEntrailsContacts dataAttr='contacts' toggleClass={toggleClass}/>
            </Gpspanel>
            <MainScreen>
                <Window windowName={windowName}/>
                <MainScreenEntralis/>
                <Scroll/>
            </MainScreen>
        </main>
    )
}

export default SecondRouteWrapper;