import bigArrow from '../../resourses/weightArrow.svg';

const AsideEntrails = (props) => {  


    return (
        <div style={{color: props.clazz === 'aside-panel__big-arrow aside-panel__big-arrow_deg' ? 'white' : '#607B96'}} data-aside={props.dataAttr} className="aside-panel__info" onClick={(e) => {
            props.onVisible(e)
            
        }}>
            <img data-aside={props.dataAttr} className={props.clazz} src={bigArrow} alt="arrow" />
            {props.filter}
        </div>    
    )
}

export default AsideEntrails;