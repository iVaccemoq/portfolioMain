
import './App.scss';

import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import FirstRouteWrapper from '../firstRouteWrapper/FirstRouteWrapper';
import SecondRouteWrapper from '../SecondRouteWrapper/SecondRouteWrapper';
import ThirdRouteWrapper from '../thirdRouteWrapper/ThirdRouteWrapper';
import FourthRouteWrapper from '../fourthRouteWrapper/FourthRouteWrapper';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Header/>
        <Routes>
          
          <Route path='/' element={<FirstRouteWrapper />} key={1}/>
          <Route path='/about' element={<SecondRouteWrapper />} key={2}/>
          <Route path='/projects' element={<ThirdRouteWrapper />} key={3}/>
          <Route path='/contacts' element={<FourthRouteWrapper />} key={4}/>
          
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
