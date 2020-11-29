import React, {useState, useEffect} from 'react';
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
const formatPrice = price => parseFloat(Number(price).toFixed(4));

function App(props) {


  const [balance, setBalance] = useState(10000);
  const [showBalance, setShowBalance] = useState(true);
  const [coinData, setCoinData] = useState([]);

  useEffect(function(){
  if(coinData.length === 0){
    componentDidMount();
  }
  });


  //The code inside here can still go inside useEffect thanks to latest React change which
  //allows useEffect to fire an async function
  const componentDidMount = async () => {
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
        price: formatPrice(coin.quotes.USD.price)
      }
    })
    //Retrieve the prices
    setCoinData(coinPriceData);
    console.log("Component mounted!");
  }

  const handleRefresh = async (coin_id) => {
    const url = `https://api.coinpaprika.com/v1/tickers/${coin_id}`;
    const response = await axios.get(url);
    const coinResponse = response.data;
    const newPrice = formatPrice(coinResponse.quotes.USD.price);

    const newCoinData = coinData.map(values => {
      let newValues = {...values};
      if(coin_id === newValues.key){
        newValues.price = newPrice;
      }
      return newValues;
    })
  
    setCoinData(newCoinData);
  }


  const handleShowBalance = (state) => {
    let newState = state ? false : true;

    setShowBalance(newState);

  }

    return (
      <AppDiv>
        <AppHeader></AppHeader>
        <AccountBalance amount={balance} showBalance={showBalance} handleShowBalance={handleShowBalance}/>
        <CoinList coinData={coinData} handleRefresh={handleRefresh} showBalance={showBalance}></CoinList>
      </AppDiv>
    );


}

export default App;
