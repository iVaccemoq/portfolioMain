import greenBlur from '../../resourses/Green.svg'
import blueBlur from '../../resourses/Blue.svg'

import './App.scss';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

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
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/'>
            <Container>
              <div className="App__wrapper">
                <AboutMe/>
                <SnakeGame/>
              </div>
              <img className='App__blur' src={greenBlur} alt="" />
              <img className='App__blur' src={blueBlur} alt="" />
            </Container>
          </Route>
          <Route exact path='/about'>
            <main className="App__two-page-wrapper">
              <Gpspanel>
                <AsideEntrails/>
              </Gpspanel>
              <MainScreen>
                <Window/>
                <MainScreenEntralis/>
                <Scroll/>
              </MainScreen>
            </main>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
