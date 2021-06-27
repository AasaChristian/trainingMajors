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
   <Header
      contactHome = "Contact"
      linkTo = "/con"
   />
      </LandingHeaderCont>
      </ LandingBodyScroll>
    </LandingPositionFixed>

    <LandingBody>
      <MajorText style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>Training Majors</MajorText>
      <div style={{width: "98%", display: 'flex', flexDirection: 'column', justifyContent: "space-evenly", height: '95%', paddingLeft: '2%'}}>
        {data.articles.map((articles, i) => {
  console.log(articles, "articles")
  return(
    <Articles
    index={i}
    title={articles.title}
    body ={articles.body}/>
  )
})}
</div>


  </LandingBody>



  </LandingBodyBackground>
    </div>
  );
}

export default LandingPage;
