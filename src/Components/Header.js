import {LandingBodyBackground, LandingBody, LandingBodyScroll, LandingPositionFixed,LandingHeaderCont} from './StyledComponents'
import {Link} from "react-router-dom"
import Pulse from 'react-reveal/Pulse';


function Header(props) {
const {contactHome, linkTo, setShow } = props

const swap = (e)=>{
  e.preventDefault()
  setShow(linkTo) 
}

  return (
    <div style={{display: "flex", flexDirection: 'row', justifyContent: "space-around", zIndex: '1'}}>
{/* <h1>Login</h1> */}
<h1 style={{fontSize: '120%'}}>Schedule session</h1>
<Pulse forever ={true}>
<h1 onClick={swap} style={{fontSize: '120%'}}>{contactHome}</h1>

</Pulse>


    </div>
  );
}

export default Header;
