import React, {useState, useEffect} from 'react';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
// import { v4 as uuidv4 } from 'uuid';
import AppHeader from './components/AppHeader/AppHeader';
import styled from 'styled-components';
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/flatly/bootstrap.min.css';

const AppDiv = styled.div`
text-align: center;
background-color: rgb(12, 48, 88);
color: #cccccc;
`;

const COIN_COUNT = 10;
const formatPrice = price => parseFloat(Number(price).toFixed(4));

const balanceIncreaseValue = 1200;

function App(props) {

  const [balance, setBalance] = useState(10000);
  const [showBalance, setShowBalance] = useState(false);
  const [coinData, setCoinData] = useState([]);

  useEffect(function(){
  if(coinData.length === 0){
    componentDidMount();
  }
  });


  //The code inside here can still go inside useEffect thanks to latest React change which
  //allows useEffect to fire an async function
  const componentDidMount = async () => {
    const response = await axios.get('https://api.coinpaprika.com/v1/tickers/').catch(function(error){
      console.log(error);
    })

    const data = response.data;

    const coinData = data.sort((a, b) => 
    { 
      if(a.rank > b.rank){
        return 1;
      } else {
        return -1;
      }
    }).slice(0, COIN_COUNT);

    const coinPriceData = coinData.map( values => {
      const coin = {...values};
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
  }


  const handleAPIActions = async (coin_id, isBuy, isSell) => {
    const url = `https://api.coinpaprika.com/v1/tickers/${coin_id}`;
    const response = await axios.get(url).catch(function(error){
      console.log(error);
    });
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

    if(isBuy){ handleBuy(coin_id, newPrice); } 
    if(isSell){ handleSell(coin_id, newPrice); }

    }

  const handleBuy = (coin_id, price) => {

    const newCoinData = coinData.map(values =>{
    let newValues = {...values};
    
    if(coin_id === newValues.key){

      if(balance >= price){
        newValues.price = price;
        newValues.balance += 1;
        setBalance(balance-price);
      } else {
        alert("Insufficient funds")
      }

    }
      return newValues;
    })

    setCoinData(newCoinData);

  }

  const handleSell = (coin_id, price) => {

    const newCoinData = coinData.map(values =>{
    let newValues = {...values};
    
    if(coin_id === newValues.key && newValues.balance > 0){
        newValues.price = price;
        newValues.balance -= 1;
        setBalance(balance+price);
    }
      return newValues;
    })

    setCoinData(newCoinData);

  }

  const handleShowBalance = (state) => {
    let newState = state ? false : true;
    setShowBalance(newState);
  }

  const handleAddBalance = () => {
    let newBalance = balance + balanceIncreaseValue;
    setBalance(newBalance);
  }

    return (
      <AppDiv>
        <AppHeader></AppHeader>
        <AccountBalance amount={balance} showBalance={showBalance} handleShowBalance={handleShowBalance} handleAddBalance={handleAddBalance}/>
        <CoinList coinData={coinData} handleAPIActions={handleAPIActions} showBalance={showBalance}></CoinList>
      </AppDiv>
    );


}

export default App;
