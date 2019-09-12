import * as React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/global';
import { fonts } from '../../../styles/global';



const CardStyle = styled.div`
font: ${fonts.primary};
background-color: ${colors.secondary} ;
color: white;
padding: 20px;
text-align: left;
height: 300px;
width: 300px;
margin: 20px;
float: left;
text-align: center;
`;

const CardBox = styled.div`
max-width: 60vw;
margin: 0 auto;
`;

const CardTitle = styled.div`
font: ${fonts.secondary};
margin: 5px 5px 30px 5px;
font-weight: 600;
color: white;
font-size: 24px;

`;


const labelTexter = "tthsdgdfsas"


function cardLabel(labelText) {
  if (labelText === 1){
    return labelTexter;
  }
  else {
    return "whatwhat";
  }
}



class Card extends React.PureComponent {
  
renderContent = () => {
return <CardBox >
          <CardStyle><CardTitle>Healthcare specific</CardTitle>With two decades of experience providing learning solutions to the healthcare industry, we understand and implement compliant courses, including validated certificates and healthcare professional validation against national registers.</CardStyle>
          <CardStyle><CardTitle>Forward-looking technology</CardTitle>We love that technology is constantly evolving. AirShip® is SCORM and xAPI compliant, with maintenance packages to ensure the technology is always kept up to date.</CardStyle>
          <CardStyle><CardTitle>Interactive and engaging learning experience</CardTitle>Learning isn't all reading and listening. We push the boundaries of interactive eLearning to produce memorable, engaging and interesting modules - with the performance reports to back it</CardStyle>
          <CardStyle><CardTitle>User needs at the heart</CardTitle>Learning begins with the student. That’s why we developed AirShip® with a user-centred design approach, giving you a smooth and straightforward end result</CardStyle>
          <CardStyle><CardTitle>Multiple reporting options</CardTitle>Keep up to date with the progress of your users by generating multiple reports, filtered according to your interests.</CardStyle>
          <CardStyle><CardTitle>Live event management</CardTitle>Sometimes you can't beat an old-fashioned get together. Our platform allows users to coordinate live events, track attendance, and report feedback.</CardStyle>
          <CardStyle><CardTitle>Custom-built for your team</CardTitle>Our bespoke package enables a complete redesign of the front-end, tailored to your brand, as well as custom features packages to ensure you're only paying for what you need.</CardStyle>
          <CardStyle><CardTitle>Automated language switch</CardTitle>In a global age, we recognise the importance of cross-country learning. Our platform is designed to allow toggling between 5 European languages.</CardStyle>
          <CardStyle><CardTitle>Caters for the modern learning experience</CardTitle>We believe learning should happen anywhere and everywhere. Our LMS is available on tablet, desktop, and is coming soon for mobile</CardStyle>
       </CardBox>
  }

  render() {
    return this.renderContent();
  }
}


export default Card;
