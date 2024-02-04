import email from '../../resourses/mail-icon.svg'
import phone from '../../resourses/phone-icon.svg'

const RenderPaternComponentDom = () => {
    return (

        <>
            <li className="App__two-page-info-about">
                <img src={email} alt="arrow" className="App__two-page-img" />
                <div className="App__two-page-name">Konstantin@vasilivanov.ru</div>
            </li>
            <li className="App__two-page-info-about">
                <img src={phone} alt="arrow" className="App__two-page-img" />
                <div className="App__two-page-name">+7 (995) 918-31-89</div>
            </li>
        </>

    )
}

export default RenderPaternComponentDom;