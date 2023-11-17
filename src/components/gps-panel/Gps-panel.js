import personal from '../../resourses/personal-info-icon.svg';

import './gps-panel.scss'

const Gpspanel = () => {
    return (
        <aside className="aside-panel">
            <div className="aside-panel__img-wrapper">
                <img className='aside-panel__img' src={personal} alt="" />
            </div>
            <div className="aside-panel__wrapper">
                <div className="aside-panel__info">
                    <img src="" alt="" />
                    personal-info
                </div>
                <div className="aside-panel__info">
                    <img src="" alt="" />
                    contacts
                </div>
            </div>
        </aside>
    )
}

export default Gpspanel;