import {
  LandingBodyBackground,
  ArticleLeft,
  ArticleTitle,
  ArticleBody,
  LandingBody,
  LandingBodyScroll,
  LandingPositionFixed,
  LandingHeaderCont,
  MajorText,
} from "./StyledComponents";
import Header from "./Header";
import { data } from "../DummyData";
import Articles from "./Articles";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
import aceBio from "../img/ACeBio.jpg";
import { Link } from "react-router-dom";
function Contact(props) {
  const contacts = data.contacts;

  console.log(contacts, "contacts");
  return (
    <div>
      <LandingPositionFixed>
        <LandingBodyScroll>
          <LandingHeaderCont>
            <Header contactHome="Home" linkTo={true} setShow={props.setShow} />
          </LandingHeaderCont>
        </LandingBodyScroll>
      </LandingPositionFixed>
      <LandingBody>
        <MajorText
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          Training Majors
        </MajorText>
        <div
          style={{
            width: "98%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            height: "95%",
            paddingLeft: "2%",
          }}
        >
          <section
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "100%",
              marginBottom: "10%",
              zIndex: "1",
            }}
          >
            <div
              style={{
                backgroundImage: `url(${aceBio})`,
                height: "600px",
                width: "800px",
                backgroundSize: "cover",
              }}
            ></div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h1>Aasa Christian</h1>
              <h1>Owner/Personal Trainer</h1>
              <h1> 10+ Years of Fitness Training </h1>
            </div>
          </section>
          
          {contacts.map((articles, i) => {
            const { title, body, imgIcon, ref } = articles;
            const index = i;
            return (
              <div>
                <section
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: 'space-evenly'
                  }}
                >
                    <h1 
                        style={{
                          backgroundColor: "#ffffffa6",
                          backgroundSize: "cover",
                          display: "flex",
                          justifyContent: "center",
                          borderRadius: "10%",
                          zIndex: '1'
                        }}
                      >
    
                        {title}
              
                    </h1>
                    <a href={ref} style={{ zIndex: '1'}}> 
                  <div
                    style={{
                      backgroundImage: `url(${imgIcon})`,
                      backgroundSize: "cover",
                      height: "400px",
                      width: "400px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "space-evenly",
                      borderRadius: '10%'
                    }}

                    
                  >
                  

                    <h1
                      style={{
                        backgroundColor: "#ffffffa6",
                        backgroundSize: "cover",
                        display: "flex",
                        justifyContent: "center",
                        borderRadius: "10%",
                      }}
                    >
                      {body}
                    </h1>
                  </div>
                  </a>
                </section>
              </div>
            );
          })}
        </div>
      </LandingBody>
    </div>
  );
}

export default Contact;
