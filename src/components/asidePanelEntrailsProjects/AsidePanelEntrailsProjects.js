import ListFolderProjects from "../listFolderProjects/ListFolderProjects";
import react from '../../resourses/react.svg'
import html from '../../resourses/htmlico.svg'
import css from '../../resourses/cssico.svg'
import js from '../../resourses/node-js.svg'

const AsidePanelEntrailsProjects = (props) => {
    const regExp = new RegExp(props.dataAttr);

    let clazz = "App__two-page-info"

    props.toggleClass.forEach(item => {
        if (item.match(regExp) !== null) {
            clazz = `App__two-page-info ${clazz}_active`
        }
    })

    

    return (
        <ol className={clazz}>
            <ListFolderProjects name='React' dataAttr='react' img={react} toggleChildClass={props.toggleChildClass}/>
            <ListFolderProjects name='HTML/CSS' dataAttr='html' img={html} toggleChildClass={props.toggleChildClass}/> 
            <ListFolderProjects name='JS' dataAttr='js' img={js} toggleChildClass={props.toggleChildClass}/> 
        </ol>
    )
}

export default AsidePanelEntrailsProjects;