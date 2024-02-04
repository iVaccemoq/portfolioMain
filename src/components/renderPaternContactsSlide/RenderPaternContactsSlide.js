const RenderPaternContactsSlide = (props) => {

    return (
        <>
            <li className="App__two-page-info-about">
                <a href="">
                    <img src={props.props.props[0]} alt="arrow" className="App__two-page-img" />
                </a>
                <a href="">
                    <div className="App__two-page-name">{props.props.props[2]}</div>
                </a>
                
            </li>
            <li className="App__two-page-info-about">
                <a href="">
                    <img src={props.props.props[1]} alt="arrow" className="App__two-page-img" />
                </a>
                <a href="">
                    <div className="App__two-page-name">{props.props.props[3]}</div>
                </a>
            </li>
        </>
    )
}

export default RenderPaternContactsSlide;