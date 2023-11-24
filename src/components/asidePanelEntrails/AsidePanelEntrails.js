import bio from '../../resourses/bioFolder.svg'
import education from '../../resourses/educationFolder.svg'
import arrow from '../../resourses/smalArrow.svg'

const AsidePanelEntrails = (props) => {

    const regExp = new RegExp(props.dataAttr);

    let clazz = "App__two-page-info"

    props.toggleClass.forEach(item => {
        if (item.match(regExp) !== null) {
            clazz = `App__two-page-info ${clazz}_active`
        }
    })

    return (
        <ol className={clazz}>
            <li data-folders='bio' className='App__two-page-info-about'>
                <img data-folders='bio' src={arrow} alt="arrow" className="App__two-page-img" />
                <img data-folders='bio' src={bio} alt="education" className="App__two-page-folder" />
                <div data-folders='bio' className="App__two-page-name">bio</div>
            </li>
            <li data-folders='education' className='App__two-page-info-about'>
                <img data-folders='education' src={arrow} alt="arrow" className="App__two-page-img" />
                <img data-folders='education' src={education} alt="education" className="App__two-page-folder" />
                <div data-folders='education' className="App__two-page-name">education</div>
            </li>
        </ol>
    )
}

export default AsidePanelEntrails;