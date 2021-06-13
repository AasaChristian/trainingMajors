import {LandingBodyBackground, LandingBody, LandingBodyScroll, LandingPositionFixed} from './StyledComponents'

function LandingPage() {
  return (
    <div className="LandingPage">
      {/* Body of Landing page */}
      
<LandingBodyBackground>
  {/* LandingPositionFixed + LandingBodyScroll: section that covers entire page with opaque created background design effect. */}
  <LandingPositionFixed><LandingBodyScroll> </ LandingBodyScroll></LandingPositionFixed>

    <LandingBody>
      <h1 style={{fontSize: '1000%'}}>Landing Page</h1>
  </LandingBody>



  </LandingBodyBackground>
    </div>
  );
}

export default LandingPage;
