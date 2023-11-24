import Gpspanel from "../gps-panel/Gps-panel";
import AsideEntrails from "../asideEntrails/AsideEntrails";
import MainScreen from "../mainScreen/MainScreen";
import Window from "../window/Window";
import MainScreenEntralis from "../mainScreenEntralis/MainScreenEntralis";
import Scroll from "../scroll/Scroll";
import AsidePanelEntrails from "../asidePanelEntrails/AsidePanelEntrails";
import AsidePanelEntrailsContacts from "../asidePanelEntrailsContacts/AsidePanelEntrailsContacts";

import { useState } from "react";

const SecondRouteWrapper = () => {

    const [toggleClass, setToggleClass] = useState(['personal-info_active', '','']);
    const [toggleChildClass, setToggleChildClass] = useState(['',''])

    const onActive = (e) => {

        if (e.target.getAttribute('data-folder') !== null) {
            setToggleClass(toggleClazz(toggleClass,e,'data-folder'))
        } else if (e.target.getAttribute('data-folders') !== null)  {
            setToggleChildClass(toggleClazz(toggleChildClass,e,'data-folders'))
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

    console.log(toggleChildClass)
    return (
        <main className="App__two-page-wrapper">
            <Gpspanel onActive={onActive}>
                <AsideEntrails dataAttr='personal-info' name={'personal-info'} toggleClass={toggleClass}/>
                <AsidePanelEntrails dataAttr='personal-info' toggleChildClass={toggleChildClass} toggleClass={toggleClass}/>
                <AsideEntrails dataAttr='contacts' name={'contacts'} toggleClass={toggleClass}/>
                <AsidePanelEntrailsContacts dataAttr='contacts' toggleChildClass={toggleChildClass} toggleClass={toggleClass}/>
            </Gpspanel>
            <MainScreen>
                <Window/>
                <MainScreenEntralis/>
                <Scroll/>
            </MainScreen>
        </main>
    )
}

export default SecondRouteWrapper;