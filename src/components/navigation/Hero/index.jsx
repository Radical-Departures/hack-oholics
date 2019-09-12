import * as React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/global';
import { fonts } from '../../../styles/global';
import Logo from "./airshiplogo.png";


const HeroStyle = styled.div`
font: ${fonts.primary};
color: ${colors.primary};
display: inline-block;
text-align: left;
height: 400px;
width: 100vw;
text-align: center;
margin-top: 10px;
`;

const HeaderStyle = styled.div`
color: white;
font-weight: 600;
font-size: 24px;
`;

const SmallHeader = styled.div`
color: white;
font-weight: 600;
font-size: 18px;
margin: 10px;
font: ${fonts.secondary};

`;
class Hero extends React.PureComponent {
  

renderContent = () => {
return <HeroStyle>
        <img src={Logo}/>
        <HeaderStyle>Airship&reg; LMS is the first of its kind.</HeaderStyle>
        <SmallHeader>LMS technology designed specifically for pharmaceutical and healthcare organisations.</SmallHeader>
      </HeroStyle>
  }

  render() {
    return this.renderContent();
  }
}


export default Hero;
