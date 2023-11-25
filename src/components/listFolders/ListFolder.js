import arrow from '../../resourses/smalArrow.svg'

const ListFolder = (props) => {

    const regExp = new RegExp(props.dataAttr);

    let clazz = "App__two-page-name"
    let imgClazz = "App__two-page-img"

    props.toggleChildClass.forEach(item => {
        if (item.match(regExp) !== null) {
            clazz = `App__two-page-name ${clazz}_active`
            imgClazz = `App__two-page-img ${imgClazz}_active`
        }
    })

    return (
        <li data-folders={props.dataAttr} className='App__two-page-info-about'>
            <img data-folders={props.dataAttr} src={arrow} alt="arrow" className={imgClazz} />
            <img data-folders={props.dataAttr} src={props.img} alt={props.name} className="App__two-page-folder" />
            <div data-folders={props.dataAttr} className={clazz}>{props.name}</div>
        </li>
    )
}

export default ListFolder;