import React, { Component } from "react";

export default class FetchExample extends Component {
    state = { bpi: {} }
    componentDidMount() {
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => response.json())
            .then(data => {
                const { bpi } = data
                this.setState({ bpi })
            })
            .catch(err => console.log(err))
    }
    _renderCurrencies = () => {
        const { bpi } = this.state
        const currencies = Object.keys(bpi)
        return currencies.map(currency => (
            <div key={currency}>
                1 BTC is {bpi[currency].rate}
                <span>{currency}</span>
            </div>
        )
        )
    }

    render() {
        return (
            <div className="App">
                <h4>BitCoin Price index</h4>
                {this._renderCurrencies()}
            </div>
        );
    }
}