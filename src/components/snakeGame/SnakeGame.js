import './snakeGame.scss'

import screw from '../../resourses/screw.svg'

const SnakeGame = () => {
    return (
        <div className="snakeGame">
            <img className='snakeGame__img'  src={screw} alt="screw" />
            <img className='snakeGame__img'  src={screw} alt="screw" />
            <img className='snakeGame__img'  src={screw} alt="screw" />
            <img className='snakeGame__img'  src={screw} alt="screw" />
        </div>
    )
}

export default SnakeGame;