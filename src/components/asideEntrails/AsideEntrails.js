import bigArrow from '../../resourses/weightArrow.svg';

const AsideEntrails = (props) => {
    return (
        <div className="aside-panel__info">
            <img className='aside-panel__big-arrow' src={bigArrow} alt="arrow" />
            {props.filter}
        </div>    
    )
}

export default AsideEntrails;