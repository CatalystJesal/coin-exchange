import React from 'react'
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const Table = styled.table`
// display: inline-block;
font-size: 1rem;
`;

export default function CoinList(props) {

        return (
        <Table className="table table-primary table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Ticker</th>
                <th>Price</th>
                <th>Balance</th>
                <th>Actions</th>
              </tr>
            </thead>
          <tbody>
            {props.coinData.map(({key, name, ticker, price, balance}) =>{
             return <Coin key={key} id={key} handleAPIActions={props.handleAPIActions} showBalance={props.showBalance} name={name} ticker={ticker} balance={balance} price={price}></Coin>
            })
            }
          </tbody>
        </Table>
        )
}
