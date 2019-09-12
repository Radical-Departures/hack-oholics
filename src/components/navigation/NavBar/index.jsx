import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors, fonts } from '../../../styles/global';

const MainNavBar = styled.div`
width: 100%;
background-color: white;
height: 50px;
top: 0;
-webkit-box-shadow: 0px 6px 7px 0px rgba(138,138,138,0.50);
-moz-box-shadow: 0px 6px 7px 0px rgba(138,138,138,0.50);
box-shadow: 0px 6px 7px 0px rgba(138,138,138,0.50);
border-bottom: 1px solid black;

`;

const NavLink = styled.div`
font: black;
color: black;
display: inline-block;
padding: 5px;
padding-right: 50px;
text-align: left;
`;

const NavLinkContainer = styled.div`
display: inline-block;
padding: 5px;
margin: 0;
width: 100%;
padding-right: 10px;
text-align: right;
`;

function NavBar({match}) {
    return (
        <MainNavBar>
            <NavLinkContainer>
                <NavLink to={`/features`}>Features</NavLink>
                <NavLink to={`/content`}>Content</NavLink>
                <NavLink to={`/why-airship`}>Why Airship&reg;?</NavLink>
                <NavLink to={`/pricing`}>Pricing</NavLink>
                <NavLink to={`/get-in-touch`}>Get in touch</NavLink>
            </NavLinkContainer>
        </MainNavBar>
    );
}

export default NavBar;
