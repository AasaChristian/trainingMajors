
import React from 'react';
import Fade from 'react-reveal/Fade';

function Articles(props) {
const {index, title, body} = props

console.log(index % 2, "tw0")
    return (
        <section key={index} style={{height: "30%", width: "100%" ,display: 'flex', justifyContent: 'center' }}>
          <Fade left={index % 2 === 0? true : false} right={index % 2 === 1? true : false}>        <div style={ index % 2 === 0 ? {height: "100%", width: "70%" ,border: "solid black 5px", backgroundColor: '#cf9ea7', borderTopRightRadius: '8%', borderBottomRightRadius: '8%'} : {height: "100%", width: "70%" ,border: "solid black 5px", backgroundColor: '#8DA9C4', borderBottomLeftRadius: '8%', borderTopLeftRadius: '8%'}}>
          <h1>{title}</h1>
          <h3>{body}</h3>
        </div>
        </Fade>

      </section>
    );
  }
  
  export default Articles;