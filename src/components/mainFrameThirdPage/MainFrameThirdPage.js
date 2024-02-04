import work1 from '../../resourses/work1.svg'
import work2 from '../../resourses/work2.svg'
import work3 from '../../resourses/work3.svg'
import react from '../../resourses/reacticon.svg'

import loadGif from '../../resourses/load.gif'

import { useEffect, useState } from 'react'

import ProjectListItem from '../projectListItem/ProjectListItem'

const MainFrameThirdPage = (props) => {

    const [projectList, setProjectList] = useState(false)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {

        setLoading(true)

        fetch('https://mocki.io/v1/69437d84-8e93-4b2f-9050-a53a6727c96e')
            .then(data => data.json())
            .then(data => {
                const frameData = data[props.frame];
                if (props.frame.length === 0) {
                    setProjectList('')
                } else {
                    const projectList = frameData.map(item => <ProjectListItem {...item}/>);
                    setProjectList(projectList)
                }
                setLoading(false)
            })
            .catch(e => {
                setLoading(false)
                setError(true)
            })
            
            
    },[props.frame])

    const projects = (!loading && !error) === true ? projectList : null;
    const load = (!projectList && !error && loading) === true ? <img style={{position: 'absolute', top:'50%', left:'50%', transform: 'translate(-50%, -50%)'}} src={loadGif} alt="loading" /> : null;
    const err = (error) === true ? <div style={{color: 'white', fontSize: '35px', position: 'absolute', top:'50%', left:'50%', transform: 'translate(-50%, -50%)'}} >Возникла ошибка</div> : null

    return (
        <ol className="main-screen__wrapper main-screen__wrapper_third-page">
            {projects}
            {load}
            {err}
        </ol>
    )
}

export default MainFrameThirdPage;