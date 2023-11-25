import close from '../../resourses/close.svg';

const WindowEntrails = (props) => {
    console.log(props.name)
    return (
        <div className="window__wrapper">
            {props.name}
            <img className='window__img' src={close} alt="close" />
        </div>
    )
}

export default WindowEntrails;