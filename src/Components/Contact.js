import {LandingBodyBackground, ArticleLeft, ArticleTitle, ArticleBody ,LandingBody, LandingBodyScroll, LandingPositionFixed,LandingHeaderCont, MajorText} from './StyledComponents'
import Header from './Header'
import {data} from '../DummyData'
import Articles from './Articles'
import Fade from 'react-reveal/Fade';
import aceBack from '../img/aceBack.jpg'
import aceDeadlift from '../img/aceDeadlift.jpg'
function Contact() {

  const contacts = data.contacts

  console.log(contacts, "contacts")
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
        <LandingBody style={{height: '800px'}}>
        <MajorText style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>Training Majors</MajorText>
        <div style={{width: "98%", display: 'flex', flexDirection: 'column', justifyContent: "space-evenly", height: '95%', paddingLeft: '2%'}}>
          {contacts.map((articles, i) => {
    console.log(articles, "articles")
    const {title, body} = articles
    const index = i
    return(
<section key ={i} style={{display: 'flex', justifyContent: 'space-around'}}>
  <h1>{title}</h1>
  <h1>{body}</h1>
</section>

    )
  })}
  </div>
  
  
    </LandingBody>
    </div>
  );
}

export default Contact;
