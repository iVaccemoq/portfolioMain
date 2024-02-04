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
            {props.render(props.email, props.phone, props.first, props.second)}
        </ol>
    )
}

export default AsidePanelEntrailsContacts;