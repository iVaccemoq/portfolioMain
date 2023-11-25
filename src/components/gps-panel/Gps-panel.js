


import './gps-panel.scss'

const Gpspanel = (props) => {
    return (
        <aside onClick={(e) => {
            props.onActive(e)
            props.onWindow(e)
        }} className="aside-panel" >
            {props.children}
        </aside>
    )
}

export default Gpspanel;

