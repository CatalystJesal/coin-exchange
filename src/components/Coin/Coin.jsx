import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'


const Td = styled.td`
border: 1px solid #cccccc;
width: 25vh;
`;

const Button = styled.button`
border-radius: 30px;
border: 2px;
margin: 5px;
background-color: #4169E1;
color: white;
padding: 0.3rem 0.3rem 0.3rem 0.3rem;
`;

export default function Coin(props) {

    const handleRefreshClick = (event) =>{
        event.preventDefault();

        props.handleAPIActions(props.id, false, false);

    }

    const handleBuyClick = (event) => {
        event.preventDefault();

        props.handleAPIActions(props.id, true, false);
    }

    const handleSellClick = (event) => {
        event.preventDefault();

        props.handleAPIActions(props.id, false, true);
    }

        return (
        <tr>
            <Td>{props.name}</Td>
            <Td>{props.ticker}</Td>
            <Td>${props.price}</Td>
            {props.showBalance ? <Td>{props.balance}</Td> : null}
            <Td>
                <form action="#" method="POST">
                <Button onClick={handleRefreshClick}>Refresh</Button>
                <Button onClick={handleBuyClick}>Buy</Button>
                <Button onClick={handleSellClick}>Sell</Button>
                </form>
            </Td>
        </tr>
        )
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

