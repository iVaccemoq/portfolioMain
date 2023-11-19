import close from '../../resourses/close.svg';

import './window.scss'

const Window = (props) => {
    return (
        <div className="window">
            {props.window}
            <img className='window__img' src={close} alt="close" />
        </div>
    )

}

export default Window;