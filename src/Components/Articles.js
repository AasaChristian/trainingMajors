
import React from 'react';
import Fade from 'react-reveal/Fade';
import aceBack from '../img/aceBack.jpg'
import aceDeadlift from '../img/aceDeadlift.jpg'
import {ArticleLeft, ArticleTitle} from './StyledComponents'


function Articles(props) {
const {index, title, body} = props

console.log(index % 2, "tw0")
    return (
        <section key={index} style={{height: "35%", width: "100%" ,display: 'flex', justifyContent: 'center'}}>
          <Fade left={index % 2 === 0? true : false} right={index % 2 === 1? true : false} > 


          <ArticleLeft style={ index % 2 === 0 ? {borderBottomRightRadius: '8%', borderTopRightRadius: '8%', backgroundImage: `url(${aceBack})`} : {borderBottomLeftRadius: '8%', borderTopLeftRadius: '8%',backgroundImage: `url(${aceDeadlift})`}}>




          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>          
            <ArticleTitle >{title}</ArticleTitle>
          <h3 style={{display: 'flex', width: '85%', color: 'white', fontSize: '150%', marginTop: '0%'}}>{body}</h3>
          </div>

        </ArticleLeft>
        </Fade>

      </section>
    );
  }
  
  export default Articles;