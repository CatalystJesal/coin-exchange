import React from 'react';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
// import { v4 as uuidv4 } from 'uuid';
import AppHeader from './components/AppHeader/AppHeader';
import styled from 'styled-components';

const AppDiv = styled.div`
text-align: center;
background-color: rgb(12, 48, 88);
color: #cccccc;
`;

class App extends React.Component {

  state = {
    balance: 10000,
    showBalance: true,
    coinData: [
      {

        name: 'Bitcoin',
        ticker: 'BTC',
        balance: 0.5,
        price: 9999.99

      },
      {
        
        name: 'Ethereum',
        ticker: 'ETH',
        balance: 32.0,
        price: 299.99

      },
      {

        name: 'Tether',
        ticker: 'USDT',
        balance: 0,
        price: 1.0

      },
      {

        name: 'Ripple',
        ticker: 'XRP',
        balance: 1000,
        price: 0.2

      },
      {

        name: 'Bitcoin Cash',
        ticker: 'BCH',
        balance: 0,
        price: 298.99

      }
    ]
  }

  handleRefresh = (valueChangedTicker) => {
    const newCoinData = this.state.coinData.map(function(values) {
      let newValues = {...values};
      if(valueChangedTicker === newValues.ticker){
        const randomPercentage = 0.995 + Math.random() * 0.01;
        newValues.price *= randomPercentage;

      }
      return newValues;
    });
  
    this.setState({coinData: newCoinData});
  }


  handleShowBalance = (state) => {
    let newState = state ? false : true;

    this.setState({showBalance : newState});

  }

  render(){
    return (
      <AppDiv>
        <AppHeader></AppHeader>
        <AccountBalance amount={this.state.balance} showBalance={this.state.showBalance} handleShowBalance={this.handleShowBalance}/>
        <CoinList coinData={this.state.coinData} handleRefresh={this.handleRefresh} showBalance={this.state.showBalance}></CoinList>
      </AppDiv>
    );
  }

}

export default App;
