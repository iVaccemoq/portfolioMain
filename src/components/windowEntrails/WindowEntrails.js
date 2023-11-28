import close from '../../resourses/close.svg';

const WindowEntrails = (props) => {

    let clazz = "window__wrapper-close";
    let slicing = 0;
    if (props.name.slice(0,-4) === props.mainScreen) {
        clazz = `window__wrapper-close window__wrapper-close_active`
        slicing++;
    }

    if (props.name === props.mainScreen) {
        clazz = `window__wrapper-close window__wrapper-close_active`
    }

    return (
        <>
        <div className={clazz}>
            <div className="window__wrapper" onClick={() => {slicing > 0 ? props.toggleMainScreen(props.dataAttr.slice(0,-4)): props.toggleMainScreen(props.dataAttr) }}>
                {props.name}  
            </div>
            <div data-close={props.dataAttr} className="window__img-wrapper" onClick={(e) => props.onClose(e)}>
                <img data-close={props.dataAttr} className='window__img' src={close} alt="close" />
            </div>
        </div>
        </>
        
    )
}

export default WindowEntrails;