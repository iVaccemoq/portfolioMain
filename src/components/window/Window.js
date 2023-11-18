import close from '../../resourses/close.svg';

import './window.scss'

const Window = () => {
    return (
        <div className="window">
            personal-info
            <img className='window__img' src={close} alt="close" />
        </div>
    )

}

export default Window;