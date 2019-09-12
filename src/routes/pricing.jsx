import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Title } from '../components/title';
import { fonts } from '../styles/global';

const Content = styled.div`
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 100px;
`;

const Cards = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Card = styled.div`
    width: 33%;
    margin: 20px;
    background: #F4F5F7;
`;

const CardHeader = styled.div`
    padding: 25px 35px 15px;
    
    h4 {
        font-family: ${fonts.primary};
        font-size: 30px;
        margin: 0;
    }
`;

const CardContent = styled.div`
    background: #fff;
    margin: 15px;
    padding: 22px 35px 22px 62px;
    text-align: left;
    font-family: ${fonts.primary};
    font-weight: lighter;
    
    ul {
        list-style-type: disc;
        
        li {
            padding: 5px 0;
        
            &.blocked {
                background: 0 0;
                opacity: .15;
            }
        }
    }
`;

const CardFooter = styled.div`
    margin: 15px;
    border-top: 2px solid;
    font-size: 38px;
    font-weight: 700;
    text-align: center;
    font-family: ${fonts.secondary};
    padding: 20px;
`;

const Pricing = () => (
    <Content>
        <Title>Pricing</Title>
        <Cards>
            <Card>
                <CardHeader>
                    <h4>Bronze<br/>0-50 users</h4>
                </CardHeader>
                <CardContent>
                    <ul>
                        <li>Email helpdesk</li>
                        <li>All standardfeatures</li>
                        <li className="blocked">Single sign-on support</li>
                        <li className="blocked">Custom dashboards and design</li>
                    </ul>
                </CardContent>
                <CardFooter>
                    £95/month
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <h4>Silver<br/>50-250 users</h4>
                </CardHeader>
                <CardContent>
                    <ul>
                        <li>Email helpdesk</li>
                        <li>All standardfeatures</li>
                        <li>Single sign-on support</li>
                        <li className="blocked">Custom dashboards and design</li>
                    </ul>
                </CardContent>
                <CardFooter>
                    £375/month
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <h4>Gold<br/>250-500users</h4>
                </CardHeader>
                <CardContent>
                    <ul>
                        <li>Email helpdesk</li>
                        <li>All standardfeatures</li>
                        <li>Single sign-on support</li>
                        <li className="blocked">Custom dashboards and design</li>
                    </ul>
                </CardContent>
                <CardFooter>
                    £500/month
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <h4>Platinum<br/>500-1000users</h4>
                </CardHeader>
                <CardContent>
                    <li>Email helpdesk</li>
                    <li>All standardfeatures</li>
                    <li>Single sign-on support</li>
                    <li>Custom dashboards and design</li>
                </CardContent>
                <CardFooter>
                    £1,050/month
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <h4>Enterprise</h4>
                </CardHeader>
                <CardContent>
                    <ul>
                        <li>Bespoke product</li>
                    </ul>
                </CardContent>
                <CardFooter>
                    <Link to={`/get-in-touch`}>Contact us </Link>
                </CardFooter>
            </Card>
        </Cards>
    </Content>
);

export default Pricing;
