import ListFolder from "../listFolders/ListFolder"

import bioImg from '../../resourses/bio.svg'
import education from '../../resourses/education.svg'

const RenderPaternComponent = (props) => {
    return (
        <>
            <ListFolder 
                name='bio.txt' dataAttr='bio' img={bioImg} toggleChildClass={props.toggleChildClass}>     
            </ListFolder>
            <ListFolder 
                name='education.txt' dataAttr='education' img={education} toggleChildClass={props.toggleChildClass}>    
            </ListFolder> 
        </>
    )
}

export default RenderPaternComponent;