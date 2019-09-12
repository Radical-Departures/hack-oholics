import * as React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/global';
import { fonts } from '../../../styles/global';

const FooterBar = styled.div`
width: 100%;
background-color: white;
height: 50px;
bottom: 0;
position: fixed;
-webkit-box-shadow: 1px -2px 7px 0px rgba(138,138,138,0.5);
-moz-box-shadow: 1px -2px 7px 0px rgba(138,138,138,0.5);
box-shadow: 1px -2px 7px 0px rgba(138,138,138,0.5);
border-top: 1px solid black;
`;



class Footer extends React.PureComponent {
  renderContent = () => {
return <FooterBar>
      </FooterBar>
  }

  render() {
    return this.renderContent();
  }
}


export default Footer;
