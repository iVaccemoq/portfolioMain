import './window.scss'

import WindowEntrails from '../windowEntrails/WindowEntrails';

const Window = (props) => {

    

    const names = props.windowName.map(item => {
        if (item !== '') {
           return <WindowEntrails windowImg={props.windowImg} mainScreen={props.mainScreen} name={item} toggleMainScreen={props.toggleMainScreen} dataAttr={item} onClose={props.onClose}/>
        }

    })


    return (
        <div className="window">
            {names}
        </div>
    )

}

export default Window;