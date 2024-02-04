

const ListFolderProjects = (props) => {

    const regExp = new RegExp(props.dataAttr);

    let clazz = "App__two-page-name"
    let imgClazz = 'App__third-page-check'

    props.toggleChildClass.forEach(item => {
        if (item.match(regExp) !== null) {
            clazz = `App__two-page-name ${clazz}_active`
            imgClazz = `App__third-page-check ${imgClazz}_active`
        }
    })

    return (
        <li data-folders={props.dataAttr} className='App__two-page-info-about'>
            <img data-folders={props.dataAttr} src={props.img} alt={props.name} className="App__third-page-ico" />
            <div data-folders={props.dataAttr} className="App__two-page-name">{props.name}</div>
        </li>
    )
}

export default ListFolderProjects;