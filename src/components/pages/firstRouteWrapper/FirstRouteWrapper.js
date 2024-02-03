import Container from '../../container/Container'
import AboutMe from '../../aboutMe/AboutMe'
import SnakeGame from '../../snakeGame/SnakeGame'



import greenBlur from '../../../resourses/Green.svg'
import blueBlur from '../../../resourses/Blue.svg'


const FirstRouteWrapper = () => {
    return (
        <Container>
            <div className="App__wrapper">
            <AboutMe/>
            <SnakeGame/>
            </div>
            <img className='App__blur' src={greenBlur} alt="" />
            <img className='App__blur' src={blueBlur} alt="" />
        </Container>
    )
}

export default FirstRouteWrapper;