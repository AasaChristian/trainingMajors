import './App.css';
import Footer from './Components/Footer';
import LandingPage from './Components/LandingPage'

function App() {
  return (
    <div className="App">
      <div>
        <LandingPage/>

      </div>

      <section style={{ bottom: "0", width: "100%", position: "fixed", zIndex: "2"}}>
        <Footer/>
      </section>
      <section style={{zIndex: "1", bottom: "0", width: "100%", position: "fixed", backgroundColor: 'black', height: '63px', opacity: "50%"}}>

      </section>
    </div>
  );
}

export default App;
