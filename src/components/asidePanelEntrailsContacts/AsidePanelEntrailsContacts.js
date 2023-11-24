import email from '../../resourses/mail-icon.svg'
import phone from '../../resourses/phone-icon.svg'

const AsidePanelEntrailsContacts = (props) => {

    const regExp = new RegExp(props.dataAttr);

    let clazz = "App__two-page-info"

    props.toggleClass.forEach(item => {
        if (item.match(regExp) !== null) {
            clazz = `App__two-page-info ${clazz}_active`
        }
    })

    return (
        <ol className={clazz}>
            <li className="App__two-page-info-about">
                <img src={email} alt="arrow" className="App__two-page-img" />
                <div className="App__two-page-name">Konstantin@vasilivanov.ru</div>
            </li>
            <li className="App__two-page-info-about">
                <img src={phone} alt="arrow" className="App__two-page-img" />
                <div className="App__two-page-name">+7 (995) 918-31-89</div>
            </li>
        </ol>
    )
}

export default AsidePanelEntrailsContacts;