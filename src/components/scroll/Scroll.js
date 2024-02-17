import './scroll.scss'

const Scroll = (props) => {
    
    let top = '40px'

    if (props.topWindow === true) {
        top='0px'
    }

    return (
        <div className="scroll" style={{top: top}}>
            <div className="scroll__block"></div>
        </div>
    )
}

export default Scroll;