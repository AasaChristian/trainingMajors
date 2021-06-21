import {FootText} from './StyledComponents'



function Footer() {
  return (
<section style={{display: "flex", justifyContent:"center", height: '60px', zIndex: '1', background: 'none'}}>
<div style={{display: "flex", flexDirection: "column", height: '60px', background: 'none'}}>
      <FootText>City Web Development</FootText>
  </div>
</section>
  );
}

export default Footer;
