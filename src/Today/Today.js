import React, { Component } from 'react'
import axios from 'axios';
import './Todays.css';
import Pusher from 'pusher-js'

export class Today extends Component {
    constructor() {
        super();
        this.state = {
            btcprice : '', 
            ltcprice  : '',
            ethprice : ''

        };
    }

    componentDidMount () {
        setInterval(() => {
            // We bind to the 'prices' event and use the data in it (price information) to update the state values, thus, realtime changes 
            axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD')
                .then(response => {
                    this.sendPricePusher (response.data);
                    this.setState({ btcprice: response.data.BTC.USD });
                    this.setState({ ethprice: response.data.ETH.USD });
                    this.setState({ ltcprice: response.data.LTC.USD });
                })
                .catch(error => {
                    console.log(error)
                })
        }, 10000)
     }

     
    render() {
        return (
            <div className="today--section container">
                <h2>Current Price</h2>
                <div className="row today--section__box">
                    <div className="column btc--section">
                        <h5>${this.state.btcprice}</h5>
                        <p>1 BTC</p>
                    </div>
                    <div className="column eth--section">
                        <h5>${this.state.ethprice}</h5>
                        <p>1 BTC</p>
                    </div>
                    <div className="column ltc--section">
                        <h5>${this.state.ltcprice}</h5>
                        <p>1 BTC</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Today;
