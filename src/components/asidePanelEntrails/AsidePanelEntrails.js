import txt from '../../resourses/txtFormat.svg'
import bioImg from '../../resourses/bio.svg'
import education from '../../resourses/education.svg'

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
            <ListFolder 
                name='bio.txt' dataAttr='bio' img={bioImg} toggleChildClass={props.toggleChildClass}>     
            </ListFolder>
            <ListFolder 
                name='education.txt' dataAttr='education' img={education} toggleChildClass={props.toggleChildClass}>    
            </ListFolder>  
        </ol>
    )
}

export default AsidePanelEntrails;