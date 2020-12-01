import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'


const Td = styled.td`
border: 1px solid #cccccc;
width: 14vh;
`;

const Button = styled.button`
font-size: 11px
width: 64px;
margin: 3px 5px 0;
text-align: center;
`;

const TdControls = styled(Td)`
// width: 20vw;
`;

const TdName = styled(Td)`
// width: 10vw;
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
            <TdName>{props.name}</TdName>
            <Td>{props.ticker}</Td>
            <Td>${props.price}</Td>
            <Td>{props.showBalance ? props.balance : '-'}</Td>
            <TdControls>
                <form action="#" method="POST">
                <Button className="btn btn-info" onClick={handleRefreshClick}>Refresh</Button>
                <Button className="btn btn-warning" onClick={handleBuyClick}>Buy</Button>
                <Button className="btn btn-danger" onClick={handleSellClick}>Sell</Button>
                </form>
            </TdControls>
        </tr>
        )
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

