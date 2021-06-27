import React, { useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import LandingPage from './Components/LandingPage'
import Contact from './Components/Contact'
import {Route, Switch} from "react-router-dom";
import Fade from 'react-reveal/Fade';

function App() {
  const [show, setShow] = useState(true)
  return (
    <div className="App">
      <div style={show == true? {display: 'initial'}: {display: 'none'}}><Fade><LandingPage setShow={setShow}/></Fade> </div>
      <div style={show == false? {display: 'initial'}: {display: 'none'}}><Fade><Contact setShow={setShow} /></Fade> </div>

     

        

      <section style={{ bottom: "0", width: "100%", position: "fixed", zIndex: "2"}}>
        <Footer/>
      </section>
      <section style={{zIndex: "1", bottom: "0", width: "100%", position: "fixed", backgroundColor: 'black', height: '63px', opacity: "50%"}}>

      </section>
    </div>
  );
}

export default App;
