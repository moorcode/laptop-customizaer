import React, { Component } from 'react';
import './Feature.css'
import slugify from 'slugify';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  
  class Feature extends Component {
      render(){
        return (
            <div key={this.props.itemHash} className="feature__item">
              <input
                type="radio"
                id={this.props.itemHash}
                className="feature__option"
                name={slugify(this.props.feature)}
                checked={this.props.option.name === this.props.selected[this.props.feature].name}
                onChange={e => this.props.updateFeature(this.props.feature, this.props.option)}
              />
              <label htmlFor={this.props.itemHash} className="feature__label">
                {this.props.option.name} ({USCurrencyFormat.format(this.props.option.cost)})
              </label>
            </div>
          );
      }
  }

  export default Feature;