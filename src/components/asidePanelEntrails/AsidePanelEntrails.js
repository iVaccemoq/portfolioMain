import bioIcon from '../../resourses/bioFolder.svg'
import educationIcon from '../../resourses/educationFolder.svg'
import arrow from '../../resourses/smalArrow.svg'

import ListFolder from '../listFolders/ListFolder'

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
            <ListFolder name='bio' dataAttr='bio' img={bioIcon} toggleChildClass={props.toggleChildClass}/>
            <ListFolder name='education' dataAttr='education' img={educationIcon} toggleChildClass={props.toggleChildClass}/>
        </ol>
    )
}

export default AsidePanelEntrails;