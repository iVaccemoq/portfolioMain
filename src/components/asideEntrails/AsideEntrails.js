import bigArrow from '../../resourses/weightArrow.svg';

import arrow from '../../resourses/angle-right-solid.svg'

const AsideEntrails = (props) => {  

    const regExp = new RegExp(props.dataAttr);

    let clazz = "aside-panel__info"
    let imgClazz = 'aside-panel__big-arrow'

    props.toggleClass.forEach(item => {
        if (item.match(regExp) !== null) {
            clazz = `${clazz}_active aside-panel__info`
            imgClazz = `${imgClazz}_active aside-panel__big-arrow`
        }
    })

    return (
        <div data-folder={props.dataAttr} className={clazz} >
            <img className={imgClazz} src={arrow} alt="arrow" />
            <img src={props.img} className='aside-panel__folder' alt="folder" />
            {props.name}
        </div>    
    )
}

export default AsideEntrails;