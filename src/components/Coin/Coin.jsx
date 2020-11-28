import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'


const Td = styled.td`
border: 1px solid #cccccc;
width: 25vh;
`;

export default class Coin extends Component {

     state = {
            price: this.props.price
        }

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            price: this.props.price
        }

    }

    handleClick(event){
        event.preventDefault();

        this.props.handleRefresh(this.props.ticker);
        // const randomPercentage = 0.995 + Math.random() * 0.01;

        // this.setState(function(oldState){
        //     return{
        //         price: oldState.price * randomPercentage
        //     };
        // })
    }
    render() {
        return (
        <tr>
            <Td>{this.props.name}</Td>
            <Td>{this.props.ticker}</Td>
            <Td>${this.props.price}</Td>
            <Td>
                <form action="#" method="POST">
                <button onClick={this.handleClick}>Refresh</button>
                </form>
            </Td>
        </tr>
        );
    }
}


Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}


function Example() {
    // Declare a new state variable, which we'll call "count"
    var [count, setCount] = useState(0);
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }