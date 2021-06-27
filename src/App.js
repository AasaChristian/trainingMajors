import './App.css';
import Footer from './Components/Footer';
import LandingPage from './Components/LandingPage'
import Contact from './Components/Contact'
import {Route, Switch} from "react-router-dom";
function App() {
  return (
    <div className="App">
     <Switch> 
      <Route exact path= '/'
      render={props => <LandingPage {...props}   />}
      />
      <Route exact path= '/con'
      >
        <Contact/>
      </Route>

      </Switch> 
      <section style={{ bottom: "0", width: "100%", position: "fixed", zIndex: "2"}}>
        <Footer/>
      </section>
      <section style={{zIndex: "1", bottom: "0", width: "100%", position: "fixed", backgroundColor: 'black', height: '63px', opacity: "50%"}}>

      </section>
    </div>
  );
}

export default App;
