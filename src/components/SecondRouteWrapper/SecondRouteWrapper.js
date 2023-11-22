import Gpspanel from "../gps-panel/Gps-panel";
import AsideEntrails from "../asideEntrails/AsideEntrails";
import MainScreen from "../mainScreen/MainScreen";
import Window from "../window/Window";
import MainScreenEntralis from "../mainScreenEntralis/MainScreenEntralis";
import Scroll from "../scroll/Scroll";

import bio from '../../resourses/bioFolder.svg'
import education from '../../resourses/educationFolder.svg'
import arrow from '../../resourses/smalArrow.svg'
import email from '../../resourses/mail-icon.svg'
import phone from '../../resourses/phone-icon.svg'

import { useState } from "react";

const SecondRouteWrapper = () => {

    const [displayPersonal, setDisplayPersonal] = useState('App__two-page-personal-info');
    const [displayContacts, setDisplayContacts] = useState('App__two-page-contacts App__two-page-contacts_moded');
    const [arrowDegPersonal, setArrowDegPersonal] = useState("aside-panel__big-arrow aside-panel__big-arrow_deg")
    const [arrowDegContacts, setArrowDegContacts] = useState("aside-panel__big-arrow ")
    const [personalInfoEntrails, setPersonalInfoEntrails] = useState('App__two-page-info-about')
    const [windowName, setWindowName] = useState(['personal-info; bio','', ''])
    const [activeBio, setActiveBio] = useState(true)
    const [activeEducation, setActiveEducation] = useState(false)

    const changeVisible = (e) => {
        if (e.target.getAttribute('data-aside') === 'personal') {
            if (displayPersonal === 'App__two-page-personal-info') {
                setArrowDegPersonal(`aside-panel__big-arrow`)
                setDisplayPersonal(`${displayPersonal} App__two-page-personal-info_moded`)
                setPersonalInfoEntrails(`${personalInfoEntrails} App__two-page-info-about-personal`)
                deleteWindow('personal-info',true)
                setActiveBio(false)
                setActiveEducation(false)
            } else {
                setArrowDegPersonal(`${arrowDegPersonal} aside-panel__big-arrow_deg`)
                setDisplayPersonal('App__two-page-personal-info')
                setPersonalInfoEntrails(`App__two-page-info-about`)
                addWindow('personal-info')
            }
        } else {
            if (displayContacts === 'App__two-page-contacts App__two-page-contacts_moded') {
                setArrowDegContacts(`aside-panel__big-arrow aside-panel__big-arrow_deg`)
                setDisplayContacts('App__two-page-contacts')
                addWindow('contacts')
            } else {
                setArrowDegContacts(`aside-panel__big-arrow`)
                setDisplayContacts(`${displayContacts} App__two-page-contacts_moded`)
                deleteWindow('contacts')
            }
        }
        
    }

    const onCloseWindow = (e) => {
        if (e.target.getAttribute('data-close') === 'personal-info; bio') {
            setDisplayPersonal(`${displayPersonal} App__two-page-personal-info_moded`)
            setWindowName(['',windowName[1]])
            setArrowDegPersonal(`aside-panel__big-arrow`)
        } else {
            setDisplayContacts(`${displayContacts} App__two-page-contacts_moded`)
            setWindowName([windowName[0],''])
            setArrowDegContacts(`aside-panel__big-arrow`)
        }
    }
    
    const addWindow = (clazz, attribute, sub) => {
        let arr = [...windowName]

        const updatedWindowName = windowName.map((value, index) => {
            
            let count = 0;

            for (let i = 0; i < 3; i++) {
                if (arr[i] === clazz){
                    count++;
                }
            }
            
            if (count === 0) {
                if (value === '' ) {
                    arr[index]= clazz
                    return clazz;
                } else if (value === 'personal-info' && sub!==undefined) {
                    arr[index]= clazz
                    return (`personal-info; ${attribute}`);
                } else {
                    arr[index]=value
                    return value;
                }
            } else {
                arr[index]=value
                return value
            }
            });
            
            setWindowName(updatedWindowName);
    }

    const deleteWindow = (clazz, attribute, subAttribute) => {

        const updatedWindowName = windowName.map((value, index) => {

            if (attribute) {
                if (value === clazz || value === 'personal-info; education' || value === 'personal-info; bio' ) {
                    return '';
                  } else {
                    return value;
                  }
            } else if (!attribute) {
                if (value === clazz) {
                    return '';
                  } else {
                    return value;
                  }
            }
            
          });
          
          setWindowName(updatedWindowName);
    }

    const onSubVisiblebio = () => {  
        if (!activeBio) {
            addWindow('personal-info; bio', 'bio', true);
        } else {
            deleteWindow('personal-info; bio')
        }

        setActiveBio(!activeBio)
    }

    const onSubVisibleEducation = () => {
        if (!activeEducation) {
                addWindow('personal-info; education','education', true);    
        } else {
            deleteWindow('personal-info; education')
        }

        setActiveEducation(!activeEducation)
    }

    console.log(windowName)

    return (
        <main className="App__two-page-wrapper">
            <Gpspanel>
                <AsideEntrails clazz={arrowDegPersonal} dataAttr='personal' onVisible={changeVisible} filter='personal-info'/>
                <ol className={displayPersonal}>
                    <li onClick={onSubVisiblebio} className='App__two-page-info-about'>
                        <img src={arrow} alt="arrow" style={{transform: activeBio  ? 'rotate(90deg)' : 'rotate(0deg)'}} className="App__two-page-img" />
                        <img src={bio} alt="education" className="App__two-page-folder" />
                        <div className="App__two-page-name" style={{color: activeBio  ? 'white' : '#607B96'}}>bio</div>
                    </li>
                    <li onClick={onSubVisibleEducation} className='App__two-page-info-about'>
                        <img src={arrow} alt="arrow" style={{transform: activeEducation  ? 'rotate(90deg)' : 'rotate(0deg)'}} className="App__two-page-img" />
                        <img src={education} alt="education" className="App__two-page-folder" />
                        <div className="App__two-page-name" style={{color: activeEducation  ? 'white' : '#607B96'}}>education</div>
                    </li>
                </ol>
                <AsideEntrails  clazz={arrowDegContacts} dataAttr='contacts' onVisible={changeVisible} filter='contacts'/>
                <ol className={displayContacts}>
                    <li className="App__two-page-info-about">
                        <img src={email} alt="arrow" className="App__two-page-img" />
                        <div className="App__two-page-name">Konstantin@vasilivanov.ru</div>
                    </li>
                    <li className="App__two-page-info-about">
                        <img src={phone} alt="arrow" className="App__two-page-img" />
                        <div className="App__two-page-name">+7 (995) 918-31-89</div>
                    </li>
                </ol>
            </Gpspanel>
            <MainScreen>
                <Window window={windowName} onCloseWindow={onCloseWindow}/>
                <MainScreenEntralis/>
                <Scroll/>
            </MainScreen>
        </main>
    )
}

export default SecondRouteWrapper;