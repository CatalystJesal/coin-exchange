import React from 'react';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
// import { v4 as uuidv4 } from 'uuid';
import AppHeader from './components/AppHeader/AppHeader';
import styled from 'styled-components';
import axios from 'axios';

const AppDiv = styled.div`
text-align: center;
background-color: rgb(12, 48, 88);
color: #cccccc;
`;

const COIN_COUNT = 10;

class App extends React.Component {

  state = {
    balance: 10000,
    showBalance: true,
    coinData: [
      
      /*{

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

      } */
    ]
  }

  componentDidMount = async () => {
      const response = await axios.get('https://api.coinpaprika.com/v1/coins');
      const coinIds = response.data.slice(0, COIN_COUNT).map(coin => coin.id);
      const tickerUrl = 'https://api.coinpaprika.com/v1/tickers/';
      const promises = coinIds.map(id => axios.get(tickerUrl + id))
      const coinData = await Promise.all(promises);
      const coinPriceData = coinData.map(function(response){
        const coin = response.data;
        return {
          key: coin.id,
          name: coin.name,
          ticker: coin.symbol,
          balance: 0,
          price: parseFloat(Number(coin.quotes.USD.price).toFixed(4))
        }
      })
      //Retrieve the prices
      this.setState({ coinData : coinPriceData});

  }

  handleRefresh = async (coin_id) => {
    const url = 'https://api.coinpaprika.com/v1/tickers/' + coin_id;
    const response = await axios.get(url);
    const coinResponse = response.data;

    const newCoinData = this.state.coinData.map(values => {
      let newValues = {...values};
      if(coin_id === newValues.key){
        const newPrice = parseFloat(Number(coinResponse.quotes.USD.price).toFixed(4));
        newValues.price = newPrice;
      }
      return newValues;
    })
  
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
