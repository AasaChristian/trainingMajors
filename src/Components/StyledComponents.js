
import styled from 'styled-components'
import aceBack from '../img/aceBack.jpg'
import aceDeadlift from '../img/aceDeadlift.jpg'



export const LandingBodyBackground = styled.section`
height: 100px;
background-color: #e8f3fa;
`;

export const LandingBody = styled.section`
display: flex;
flex-direction: column;
// justify-content: space-evenly;
height: 2000%;
width: 100%;
overflow: scroll;
background-color: #e8f3fa;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='112' height='92' viewBox='0 0 112 92'%3E%3Cg fill='%23d0dee1' fill-opacity='0.21'%3E%3Cpath fill-rule='evenodd' d='M72 10H40L16 20H0v8h16l24-14h32l24 14h16v-8H96L72 10zm0-8H40L16 4H0v8h16l24-6h32l24 6h16V4H96L72 2zm0 84H40l-24-6H0v8h16l24 2h32l24-2h16v-8H96l-24 6zm0-8H40L16 64H0v8h16l24 10h32l24-10h16v-8H96L72 78zm0-12H40L16 56H0v4h16l24 14h32l24-14h16v-4H96L72 66zm0-16H40l-24-2H0v4h16l24 6h32l24-6h16v-4H96l-24 2zm0-16H40l-24 6H0v4h16l24-2h32l24 2h16v-4H96l-24-6zm0-16H40L16 32H0v4h16l24-10h32l24 10h16v-4H96L72 18z'/%3E%3C/g%3E%3C/svg%3E");
`;
export const LandingPositionFixed = styled.section`
position: fixed;
top: 0;
height: 100%;
width: 100%;
`;
export const LandingBodyScroll = styled.section`
height: 100%;
width: 100%;
overflow: scroll;
top: 0;
z-index: 1;
background: none;

background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='112' height='92' viewBox='0 0 112 92'%3E%3Cg fill='%23d0dee1' fill-opacity='0.12'%3E%3Cpath fill-rule='evenodd' d='M72 10H40L16 20H0v8h16l24-14h32l24 14h16v-8H96L72 10zm0-8H40L16 4H0v8h16l24-6h32l24 6h16V4H96L72 2zm0 84H40l-24-6H0v8h16l24 2h32l24-2h16v-8H96l-24 6zm0-8H40L16 64H0v8h16l24 10h32l24-10h16v-8H96L72 78zm0-12H40L16 56H0v4h16l24 14h32l24-14h16v-4H96L72 66zm0-16H40l-24-2H0v4h16l24 6h32l24-6h16v-4H96l-24 2zm0-16H40l-24 6H0v4h16l24-2h32l24 2h16v-4H96l-24-6zm0-16H40L16 32H0v4h16l24-10h32l24 10h16v-4H96L72 18z'/%3E%3C/g%3E%3C/svg%3E");
position: sticky;
`;
export const LandingHeaderCont = styled.section`
height: 100%;
width: 100%;
top: 0;
z-index: 1;
position: sticky;
`;

export const MajorText = styled.h1`
margin-bottom: 10%;
font-size: 700%;
font-family: 'Sigmar One', cursive;
@media (max-width: 650px) {

    font-size: 350%;
  }

  @media (max-width: 400px) {

    font-size: 250%;
  }
`;

export const ArticleLeft = styled.section`
// margin-bottom: 50%; 
height: 90%; 
width: 96%;
border: solid black 5px;
background-size: cover;

`;

export const ArticleTitle = styled.h1`
font-family: 'Sigmar One', cursive;
background: none;
 border-radius: 10%;
border: white solid 4px;
color: white;
    font-size: 320%; 
    padding: 2%;
     margin-bottom: 2%; 
     margin-top: 4%;

@media (max-width: 650px) {

      font-size: 200%;
    }

`;

export const ArticleBody = styled.h1`
font-family: 'Londrina Shadow', cursive;
display: flex;
 width: 85%; 
 color: white; 
 font-size: 300%;
 margin-top: 2%;

 @media (max-width: 650px) {

  font-size: 200%;
}
`;