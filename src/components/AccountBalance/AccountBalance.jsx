import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'
import helicopterLogo from './helicopter.png';

const Section = styled.section`
font-size: 2rem;
text-align: left;
padding: 1.5rem 0 1.5rem 5rem;
`;

const Button = styled.button`
display: inline-block;
padding: 0.5em 1em;
margin-left: 1.5em;
vertical-align: middle;
background-color: #4169E1;
border-radius: 30px;
border: 2px;
color: white;
`;

const ImgButton = styled.button`
background-image: url(${helicopterLogo});
background-repeat: no-repeat;
background-color: #4169E1;
background-position: 50% 50%;
border-radius: 30px;
border: 2px;
display: inline-block;
padding: 0.5em 1em;
vertical-align: middle;
margin-left: 1.5em;
width: 100px;
height: 28px;
color: white;
`;

export default function AccountBalance(props) {


    const handleShowBalanceClick = (event) => {
            event.preventDefault();

            props.handleShowBalance(props.showBalance);
    }

    const handleAddBalanceClick = (event) => {
        event.preventDefault();
        props.handleAddBalance();
    }

        const buttonText = props.showBalance ? 'Hide Balance' : 'Show Balance';
        return (
         <Section>{props.showBalance ? `Balance: $${props.amount}` : null}
         <Button onClick={handleShowBalanceClick}>{buttonText}</Button>
         <ImgButton onClick={handleAddBalanceClick}></ImgButton>
         </Section> 
        );

}



AccountBalance.propTypes = {
amount: PropTypes.number.isRequired
}