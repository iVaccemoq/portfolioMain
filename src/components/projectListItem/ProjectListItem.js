const ProjectListItem = (props) => {
    return (
        <li className="main-screen__projects">
            <div className="main-screen__project">
                Project_1
                <span className="main-screen__descr"> // {props.title}</span>
            </div>
            <div className="main-screen__work-block">
                <img className="main-screen__img" src='' alt="project" />
                <p className="main-screen__txt">{props.description}</p>
                <button className="main-screen__button">view-project</button>
                <img src='' alt="framework" className="main-screen__framework" />
            </div>
        </li>
    )
}

export default ProjectListItem