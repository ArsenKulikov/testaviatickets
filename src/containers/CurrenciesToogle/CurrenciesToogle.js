import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { setCurrency } from '../../store/currency/actions/index';
import { connect } from 'react-redux';

const fields = ['UAH', 'EURO', 'USD' ];

class CurrenciesToogle extends Component {

  render() {
    const { setCurrency } = this.props.currencyActions;
    
    return (
      <div>
        <fieldset>
          {fields.map(item => (
            <div key={item}>
              <input
                type="radio"
                id={item}
                name='currencies'
                value={item}
                defaultChecked={item === 'UAH'}
                onChange={() => setCurrency(item)}
              />
              <label htmlFor={item}>{item}</label>
            </div>
          ))}
        </fieldset>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currency: state.currency
});

const mapDispatchToProps = dispatch => ({
    currencyActions: bindActionCreators({
        setCurrency
    }, dispatch)
});

export default connect( mapStateToProps, mapDispatchToProps)(CurrenciesToogle);
