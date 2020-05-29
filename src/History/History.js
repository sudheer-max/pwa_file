import React, { Component } from 'react';
import './Historys.css';
import axios from 'axios';
import moment from 'moment';

export class History extends Component {
    constructor () {
        super ();
        this.state = {
            todaybrice : {},
            yesterdayprice : {},
            twodaysprice : {},
            threedaysprice : {},
            fourdaysprice : {}

        }
    
        this.getBTCprice = this.getBTCprice.bind(this);
        this.getETHprice = this.getETHprice.bind(this);
        this.getLTCprice = this.getLTCprice.bind(this);
    }

    getETHprice (date) {
        return axios.get(`https://min-api.cryptocompare.com/data/pricehistorical?fsym=ETH&tsyms=USD&ts=${date}`);
    }
    getBTCprice (date) {
        return axios.get(`https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=USD&ts=${date}`)
    }
    getLTCprice (date) {
        return axios.get(`https://min-api.cryptocompare.com/data/pricehistorical?fsym=LTCtsyms=USD&ts=${date}`)
    }

    getTodayPrice () {
        let t = moment().unix()
        axios.all([this.getETHprice(t), this.getBTCprice(t), this.getLTCprice(t)])
        .then(axios.spread((eth, btc, ltc) => {
            let f = {
                date : moment.unix(t).format('MMMM Do  YYYY hh:mm:ss'),
                eth : eth.data.ETH_USD,
                btc : btc.data.BTC_USD,
                ltc : ltc.data.LTC_USD
            }
            this.setState({todaybrice : f});
        }));
                   
    }

    getYesterdayPrice () {
        let t = moment().subtract(1, 'days').unix();
        axios.all([this.getETHprice(t), this.getBTCprice(t), this.getLTCprice(t)]).then(axios.spread((eth, btc, ltc) => {
            let f = {
                date : moment.unix(t).format('MMMM Do YYYY hh:mm:ss'),
                eth : eth.data.ETH_USD,
                btc : btc.data.BTC_USD,
                ltc : ltc.data.LTC_USD,
            }
            this.setState({yesterdayprice : f});
        }));
    }

    getTwoDaysPrice () {
        let t = moment().subtract(2, 'days').unix();
        axios.all([this.getETHprice(t), this.getBTCprice(t), this.getLTCprice(t)]).then(axios.spread((eth, btc, ltc) => {
            let f = {
                data : moment.unix(t).format('MMMM Do YYYY hh:mm:ss'),
                eth : eth.data.ETH_USD,
                btc : btc.data.BTC_USD,
                ltc : ltc.data.LTC_USD
            }
            this.setState({twodaysprice : f});
        }));
    }

    getThreeDaysPrice () {
        let t = moment().subtract(3, 'days').unix();
        axios.all([this.getETHprice(t), this.getBTCprice(t), this.getLTCprice(t)]).then(axios.spread((eth, btc, ltc) => {
            let f = {
                data : moment.unix(t).format('MMMM Do YYYY hh:mm:ss'),
                eth : eth.data.ETH_USD,
                btc : btc.data.BTC_USD,
                ltc : ltc.data.LTC_USD
            }
            this.setState({threedaysprice : f});
        }));
    }

    getFourDaysPrice () {
        let t = moment().subtract(4, 'days').unix();
        axios.all([this.getETHprice(t), this.getBTCprice(t), this.getLTCprice(t)]).then(axios.spread((eth, btc, ltc) => {
            let f = {
                data : moment.unix(t).format('MMMM Do YYYY hh:mm:ss'),
                eth : eth.data.ETH_USD,
                btc : btc.data.BTC_USD,
                ltc : ltc.data.LTC_USD
            }
            this.setState({fourdaysprice : f});
        }));
    }

    componentWillMount () {
        this.getTodayPrice();
        this.getYesterdayPrice();
        this.getTwoDaysPrice();
        this.getThreeDaysPrice();
        this.getFourDaysPrice();
    }

    


    render() {
        return (
            <div className="bg-light text-center">
                <h2>History (Past 5 Days)</h2>
                <div className="py-3">
                    <div className="m-2">
                        <h6> { this.state.todaybrice.date }</h6>
                        <div className="container">
                            <div className="row ">
                                <div className="d-flex align-items-center">
                                    <div className="d-flex p-2">
                                    <p>1 BTC = ${this.state.todaybrice.btc}</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="d-flex p-2">
                                    <p>1 ETH = ${this.state.todaybrice.eth}</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="d-flex p-2">
                                    <p>1 LTC = ${this.state.todaybrice.ltc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="m-2">
                        <h6> { this.state.yesterdayprice.date }</h6>
                        <div className="container">
                            <div className="row ">
                                <div className="d-flex align-items-center">
                                    <div className="d-flex p-2">
                                    <p>1 BTC = ${this.state.yesterdayprice.btc}</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="d-flex p-2">
                                    <p>1 ETH = ${this.state.yesterdayprice.eth}</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="d-flex p-2">
                                    <p>1 LTC = ${this.state.yesterdayprice.ltc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="m-2">
                        <h6> { this.state.twodaysprice.date }</h6>
                        <div className="container">
                            <div className="row ">
                                <div className="d-flex align-items-center">
                                    <div className="d-flex p-2">
                                    <p>1 BTC = ${this.state.twodaysprice.btc}</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="d-flex p-2">
                                    <p>1 ETH = ${this.state.twodaysprice.eth}</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="d-flex p-2">
                                    <p>1 LTC = ${this.state.twodaysprice.ltc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="m-2">
                        <h6> { this.state.threedaysprice.date }</h6>
                        <div className="container">
                            <div className="row ">
                                <div className="d-flex align-items-center">
                                    <div className="d-flex p-2">
                                    <p>1 BTC = ${this.state.threedaysprice.btc}</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="d-flex p-2">
                                    <p>1 ETH = ${this.state.threedaysprice.eth}</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="d-flex p-2">
                                    <p>1 LTC = ${this.state.threedaysprice.ltc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="m-2">
                        <h6> { this.state.fourdaysprice.date }</h6>
                        <div className="container">
                            <div className="row ">
                                <div className="d-flex align-items-center">
                                    <div className="d-flex p-2">
                                    <p>1 BTC = ${this.state.fourdaysprice.btc}</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="d-flex p-2">
                                    <p>1 ETH = ${this.state.fourdaysprice.eth}</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="d-flex p-2">
                                    <p>1 LTC = ${this.state.fourdaysprice.ltc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default History;
