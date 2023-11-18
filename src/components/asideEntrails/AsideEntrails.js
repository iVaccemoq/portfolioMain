import bigArrow from '../../resourses/weightArrow.svg';

const AsideEntrails = () => {
    return (
        <div className="aside-panel__wrapper">
              <div className="aside-panel__info">
                  <img className='aside-panel__big-arrow' src={bigArrow} alt="arrow" />
                  personal-info
              </div>
              <div className="aside-panel__info">
                  <img className='aside-panel__big-arrow' src={bigArrow} alt="arrow" />
                  contacts
              </div>
          </div>
    )
}

export default AsideEntrails;