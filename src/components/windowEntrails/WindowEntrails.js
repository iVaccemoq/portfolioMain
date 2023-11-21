import close from '../../resourses/close.svg';

const WindowEntrails = (props) => {
    return (
        <div className="window__wrapper">
            {props.windowName}
            <img data-close={props.windowName} className='window__img' src={close} alt="close" onClick={(e) => props.onCloseWindow(e)} />
        </div>
    )
}

export default WindowEntrails;