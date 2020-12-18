import React, { Component } from 'react';
import Total from '../Total/Total';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

class CartList extends Component {
    render() {
        const summary = Object.keys(this.props.state).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.state[feature];

            return (
                <div className="summary__option" key={featureHash}>
                    <div className="summary__option__label">{feature} </div>
                    <div className="summary__option__value">{selectedOption.name}</div>
                    <div className="summary__option__cost">
                        {USCurrencyFormat.format(selectedOption.cost)}
                    </div>
                </div>
            );
        });
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                {summary}
                <Total cartItems={this.props.state} />
            </section>
        )
    }
}

export default CartList;