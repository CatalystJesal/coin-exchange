import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'
import helicopterLogo from './helicopter.png';

const Section = styled.section`
font-size: 2rem;
text-align: center;
line-height: 3rem;
// display: inline-block;
`;

const Button = styled.button`
margin-right: 10px;
margin-bottom: 20px;
width: 150px;
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
width: 100px;
margin-bottom: 20px;
`;

const Balance = styled.div`
min-width: 250px;
margin 0.5rem 0 0 2.5rem;
font-size: 1.6em;
vertical-align: middle;
text-align: left;
`;

var formatter = Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
});


export default function AccountBalance(props) {

    const buttonText = props.showBalance ? 'Hide Balance' : 'Show Balance';
    const buttonClass = 'btn ' + (props.showBalance ? 'btn-warning' : 'btn-info');
    let content = '\u00A0';
    if(props.showBalance){
        content = <>{formatter.format(props.amount)}</>
    }

    const handleShowBalanceClick = (event) => {
            event.preventDefault();

            props.handleShowBalance(props.showBalance);
    }

    const handleAddBalanceClick = (event) => {
        event.preventDefault();
        props.handleAddBalance();
    }

        return (
        <>
        <Balance>{content}</Balance>
        <Section>        
        <Button className={buttonClass} onClick={handleShowBalanceClick}>{buttonText}</Button>
        <ImgButton onClick={handleAddBalanceClick}></ImgButton>
        </Section> 
        </>
        );

}



AccountBalance.propTypes = {
amount: PropTypes.number.isRequired
}