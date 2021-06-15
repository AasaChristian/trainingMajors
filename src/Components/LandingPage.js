import {LandingBodyBackground, LandingBody, LandingBodyScroll, LandingPositionFixed,LandingHeaderCont, MajorText} from './StyledComponents'
import Header from './Header'
import Articles from './Articles'
import {data} from '../DummyData'
function LandingPage() {

  console.log(data, "data")
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
{data.articles.map((articles, i) => {
  console.log(articles, "articles")
  return(
    <Articles
    index={i}
    title={articles.title}
    body ={articles.body}/>
  )
})}

  </LandingBody>



  </LandingBodyBackground>
    </div>
  );
}

export default LandingPage;
