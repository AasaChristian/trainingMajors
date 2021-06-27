import {LandingBodyBackground, LandingBody, LandingBodyScroll, LandingPositionFixed,LandingHeaderCont} from './StyledComponents'
import {Link} from "react-router-dom"
function Header(props) {
const {contactHome, linkTo } = props
  return (
    <div style={{display: "flex", flexDirection: 'row', justifyContent: "space-around", zIndex: '1'}}>
{/* <h1>Login</h1> */}
<h1>Schedule session</h1>
<Link to={linkTo}><h1>{contactHome}</h1></Link>


    </div>
  );
}

export default Header;
