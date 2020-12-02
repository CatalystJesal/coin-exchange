import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'


const Td = styled.td`
border-left: 2px solid #cccccc;
border-right: 2px solid #cccccc;
width: 25vh;
`;

const Button = styled.button`
border-radius: 30px;
border: 2px;
margin: 5px;
color: black;
font-weight: bold;
// padding: 0.3rem 0.3rem 0.3rem 0.3rem;
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
        <tr className="table-type">
            <Td>{props.name}</Td>
            <Td>{props.ticker}</Td>
            <Td>${props.price}</Td>
            <Td>{props.showBalance ? props.balance : '-'}</Td>
            <Td>
                <form action="#" method="POST">
                <Button className="btn btn-info" onClick={handleRefreshClick}>Refresh</Button>
                <Button className="btn btn-success" onClick={handleBuyClick}>Buy</Button>
                <Button className="btn btn-danger" onClick={handleSellClick}>Sell</Button>
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

