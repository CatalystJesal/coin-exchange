import React, { Component } from 'react'
import logo from './logo.svg';
import styled from 'styled-components';

const AppLogo = styled.img`
height: 8rem;
pointer-events: none;
`;

const Title = styled.h1`
font-size: 4rem;
`;

const Header = styled.header`
background-color: #282c34;
min-height: 20vh;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
color: white;
`;

export default class AppHeader extends Component {
    render() {
        return (
            <Header>
            <AppLogo src={logo} alt="React logo"></AppLogo>
            <Title>Coin Exchange</Title>
            </Header>
        )
    }
}
