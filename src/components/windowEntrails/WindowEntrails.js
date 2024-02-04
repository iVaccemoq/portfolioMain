import close from '../../resourses/close.svg';

import d from '../../resourses/contacts.svg'

const WindowEntrails = (props) => {

    const imgs = ['/static/media/htmlico.7376b8da4e3024e0b36a0a486756a935.svg','/static/media/react.5e9150476a29b9bef7acebfa608bee8e.svg','/static/media/cssico.2cc08795b4429b555d4b46b8eee0a3e2.svg','/static/media/node-js.6da7601076cd5a082dab12242010fe07.svg','/static/media/bio.9f5b94f940bfd2c62eb6d39e60f04a5c.svg', '/static/media/education.9f5b94f940bfd2c62eb6d39e60f04a5c.svg', '/static/media/contacts.2d26bbf96f048537d9f4b6f2c2e72d62.svg']
    let img;

    const regExpTxt = new RegExp('txt');

    let regExp;

    if (props.name.match(regExpTxt) === null) {
        if (props.name === 'html / css') {
            regExp = new RegExp(props.name.slice(0,4));
        } else {
            regExp = new RegExp(props.name);
        }
        
    } else {
        regExp = new RegExp(props.name.slice(0,-4));
    }

    console.log(regExp)

    let clazz = "window__wrapper-close";
    let slicing = 0;
    if (props.name.slice(0,-4) === props.mainScreen) {
        clazz = `window__wrapper-close window__wrapper-close_active`
        slicing++;
    }

    let windowName = props.name;

    if (windowName === 'html / css') {
        windowName = 'html'
    }

    if (windowName === props.mainScreen) {
        clazz = `window__wrapper-close window__wrapper-close_active`
    }

    imgs.forEach((item,i) => {
        if (item.match(regExp) !== null) {
            img = item;
        } 
    })

    return (
        <>
        <div className={clazz}>
            <img src={img} alt="imgFormat" className='window__img-format' />
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