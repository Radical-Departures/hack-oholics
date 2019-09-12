import * as React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/global';
import { fonts } from '../../../styles/global';



const CardStyle = styled.div`
font: ${fonts.primary};
color: ${colors.primary};
display: inline-block;
padding: 5px;
text-align: left;
height: 300px;
width: 300px;
padding: 5px;
margin: 10px;
margin-top: 100px;

text-align: center;
outline: 2px solid red;
`;

const labelTexter = "hiyas"


function cardLabel(labelText) {
  if (labelText === 1){
    return labelTexter;
  }
  else {
    return "whatwhat";
  }
}

function cardTitle(titleText) {

}


class Card extends React.PureComponent {
  

renderContent = () => {
return <CardStyle>
      </CardStyle>
  }

  render() {
    return this.renderContent();
  }
}


export default Card;
