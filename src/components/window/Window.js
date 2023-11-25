import './window.scss'

import WindowEntrails from '../windowEntrails/WindowEntrails';

const Window = (props) => {

    const names = props.windowName.map(item => {
        if (item !== '') {
           return <WindowEntrails name={item}/>
        }
    })


    return (
        <div className="window">
            {names}
        </div>
    )

}

export default Window;