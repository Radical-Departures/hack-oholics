import * as React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/global';
import { fonts } from '../../../styles/global';



const HeroStyle = styled.div`
font: ${fonts.primary};
color: ${colors.primary};
display: inline-block;
text-align: left;
height: 300px;
width: 100vw;
text-align: center;
background-color: blue;
`;




class Hero extends React.PureComponent {
  

renderContent = () => {
return <HeroStyle>
      </HeroStyle>
  }

  render() {
    return this.renderContent();
  }
}


export default Hero;
