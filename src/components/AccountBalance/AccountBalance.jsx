import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

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

export default function AccountBalance(props) {


    const handleClick = (event) => {
            event.preventDefault();

            props.handleShowBalance(props.showBalance);
    }

        const buttonText = props.showBalance ? 'Hide Balance' : 'Show Balance';
        return (
         <Section>{props.showBalance ? `Balance: $${props.amount}` : null}
         <Button onClick={handleClick}>{buttonText}</Button>
         </Section> 
        );

}



AccountBalance.propTypes = {
amount: PropTypes.number.isRequired
}