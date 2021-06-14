import {LandingBodyBackground, LandingBody, LandingBodyScroll, LandingPositionFixed,LandingHeaderCont} from './StyledComponents'
import Header from './Header'
function LandingPage() {
  return (
    <div className="LandingPage">

      {/* Body of Landing page */}
      
<LandingBodyBackground>
  {/* LandingPositionFixed + LandingBodyScroll: section that covers entire page with opaque created background design effect. */}
  <LandingPositionFixed>

    <LandingBodyScroll> 
    <LandingHeaderCont>
   <Header/>
      </LandingHeaderCont>
      </ LandingBodyScroll>
    </LandingPositionFixed>

    <LandingBody>
      <h1 style={{fontSize: '500%', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>Major Training</h1>
  </LandingBody>



  </LandingBodyBackground>
    </div>
  );
}

export default LandingPage;
