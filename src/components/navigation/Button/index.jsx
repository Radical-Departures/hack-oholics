import * as React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/global';
import { fonts } from '../../../styles/global';



const ButtonStyle = styled.div`
font: ${fonts.primary};
color: ${colors.primary};
display: inline-block;
padding: 5px;
text-align: left;
height: 30px;
width: 150px;
padding: 5px;
margin: 10px;
text-align: center;
outline: 2px solid red;
`;

const labelText = 'hi there';

function buttonLabel(labelText) {
  return labelText;
}

class Button extends React.PureComponent {
  
  handleClick = () => {
    console.log('this has been clicked');
  }

  renderContent = () => {
return <ButtonStyle onClick={this.handleClick}>
      {buttonLabel(labelText)}
      </ButtonStyle>
  }

  render() {
    return this.renderContent();
  }
}


export default Button;
