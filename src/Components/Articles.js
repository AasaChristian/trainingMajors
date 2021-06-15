


function Articles(props) {
const {index, title, body} = props
    return (
        <section key={index} style={{height: "10%", width: "100%" ,display: 'flex', justifyContent: 'center' }}>
        <div style={{height: "100%", width: "70%" ,border: "solid black 5px", backgroundColor: 'white', borderRadius: '8%', paddingTop:'10%'}}>
          <h1>{title}</h1>
          <h3>{body}</h3>
        </div>
      </section>
    );
  }
  
  export default Articles;