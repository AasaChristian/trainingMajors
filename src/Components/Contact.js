import {LandingBodyBackground, LandingBody, LandingBodyScroll, LandingPositionFixed,LandingHeaderCont, MajorText} from './StyledComponents'
import Header from './Header'


function Contact() {

  const contacts = []
  return (
    <div>
    <LandingPositionFixed>

    <LandingBodyScroll> 
    <LandingHeaderCont>
   <Header
   contactHome = "Home"
   linkTo = "/"
   />
      </LandingHeaderCont>
      </ LandingBodyScroll>
    </LandingPositionFixed>
        <LandingBody>
        <MajorText style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>Training Majors</MajorText>
        <div style={{width: "98%", display: 'flex', flexDirection: 'column', justifyContent: "space-evenly", height: '95%', paddingLeft: '2%'}}>
          {contacts.map((articles, i) => {
    console.log(articles, "articles")
    return(
      // <Articles
      // index={i}
      // title={articles.title}
      // body ={articles.body}/>
      <h1>articles</h1>
    )
  })}
  </div>
  
  
    </LandingBody>
    </div>
  );
}

export default Contact;
