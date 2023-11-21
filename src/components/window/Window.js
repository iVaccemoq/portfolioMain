import './window.scss'

import WindowEntrails from '../windowEntrails/WindowEntrails';

const Window = (props) => {

    let windows = []

    for (let item in props.window) {
        if (props.window[item]!==''){
            windows[item] = <WindowEntrails windowName={props.window[item]} onCloseWindow={props.onCloseWindow}/>
        }
    }

    return (
        <div className="window">
            {windows}
        </div>
    )

}

export default Window;