import greenBlur from '../../resourses/Green.svg'
import blueBlur from '../../resourses/Blue.svg'

import './App.scss';

import Container from '../container/Container';
import Header from '../header/Header';
import AboutMe from '../aboutMe/AboutMe';
import SnakeGame from '../snakeGame/SnakeGame';
import Footer from '../footer/Footer';
import MainScreen from '../mainScreen/MainScreen';
import AsideEntrails from '../asideEntrails/AsideEntrails';
import Gpspanel from '../gps-panel/Gps-panel';
import Window from '../window/Window';
import Scroll from '../scroll/Scroll';
import MainScreenEntralis from '../mainScreenEntralis/MainScreenEntralis';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Container>
        <div className="App__wrapper">
          <AboutMe/>
          <SnakeGame/>
        </div>
        <img className='App__blur' src={greenBlur} alt="" />
        <img className='App__blur' src={blueBlur} alt="" />
      </Container> */}
      <div className="App__two-page-wrapper">
        <Gpspanel>
          <AsideEntrails/>
        </Gpspanel>
        <MainScreen>
          <Window/>
          <MainScreenEntralis/>
          <Scroll/>
        </MainScreen>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
