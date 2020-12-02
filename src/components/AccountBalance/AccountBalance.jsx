import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Section = styled.section`
font-size: 1.2rem;
height: 8vh;
display: flex;
justify-content: center;
align-items: center;
`;

const Button = styled.button`
border-radius: 30px;
border: none;
color: black;
font-weight: bold;
`;

const ImgButton = styled.button`
border-radius: 30px;
margin-left: 1.5em;
width: 100px;
`;

const Balance = styled.div`
text-align: center;
font-size: 1.6em;
margin-top: 0.5em;
`;

var formatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});


export default function AccountBalance(props) {

    const buttonText = props.showBalance ? 'Hide Balance' : 'Show Balance';

    let balanceBtnStyle = props.showBalance ? "btn btn-primary" : 'btn btn-info';

    let balanceVal = '\u00A0';
    if(props.showBalance){
     balanceVal = <>{formatter.format(props.amount)}</>
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
         <Balance>{balanceVal}</Balance>   
         <Section>
         <Button className={balanceBtnStyle} onClick={handleShowBalanceClick}>{buttonText}</Button>
         <ImgButton className="btn btn-danger" onClick={handleAddBalanceClick}>

         <i className="fas fa-helicopter"></i>
         </ImgButton>
         </Section> 
         </>
        );

}



AccountBalance.propTypes = {
amount: PropTypes.number.isRequired
}