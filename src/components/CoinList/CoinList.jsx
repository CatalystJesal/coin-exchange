import React from 'react'
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const Table = styled.table`
margin: 50px auto 100% auto;
display: inline-block;
font-size: 1.4rem;
`;

const THead = styled.thead`
margin-top: 10px;
`;


export default function CoinList(props) {

        return (
        <Table>
            <THead>
              <tr>
                <th>Name</th>
                <th>Ticker</th>
                <th>Price</th>
                <th>Balance</th>
                <th>Actions</th>
              </tr>
          </THead>
          <tbody>
            {props.coinData.map(({key, name, ticker, price, balance}) =>{
             return <Coin key={key} id={key} handleAPIActions={props.handleAPIActions} showBalance={props.showBalance} name={name} ticker={ticker} balance={balance} price={price}></Coin>
            })
            }
          </tbody>
        </Table>
        )
}
