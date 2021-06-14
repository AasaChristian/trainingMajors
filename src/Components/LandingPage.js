import {LandingBodyBackground, LandingBody, LandingBodyScroll, LandingPositionFixed,LandingHeaderCont, MajorText} from './StyledComponents'
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
      <MajorText style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>Major Training</MajorText>

      <section style={{height: "10%", width: "100%" ,display: 'flex', justifyContent: 'center' }}>
        <div style={{height: "100%", width: "70%" ,border: "solid black 5px", backgroundColor: 'white', borderRadius: '8%', paddingTop:'10%'}}>
          
        </div>
      </section>
  </LandingBody>



  </LandingBodyBackground>
    </div>
  );
}

export default LandingPage;
