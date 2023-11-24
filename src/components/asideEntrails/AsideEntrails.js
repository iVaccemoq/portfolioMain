import bigArrow from '../../resourses/weightArrow.svg';

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
            <img className={imgClazz} src={bigArrow} alt="arrow" />
            {props.name}
        </div>    
    )
}

export default AsideEntrails;