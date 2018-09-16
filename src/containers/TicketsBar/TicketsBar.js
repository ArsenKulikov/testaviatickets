import React, { Component } from 'react';
import { connect } from 'react-redux'

import data from '../../db/tickets';
import Ticket from '../../components/Ticket/Ticket';

class TicketsBar extends Component {
  state = {
    tickets: []
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log('should');
    return true; //nextProps !== this.props.filters
  }
  

  componentDidMount(){
    this.setState({tickets: data.tickets})
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps);
  }

  render(){

    const filters = this.props.filters;
    console.log(filters);
    const multiplier = this.props.currency.multiplier;
    let ticketsArray;
    if (!filters.length) {
     ticketsArray = data.tickets 
    } else {
      ticketsArray = data.tickets.filter(ticket => {
        console.log(ticket.stops);
        return filters.some(filter => +filter === ticket.stops) 
      })
    }
    console.log(ticketsArray);
  return (
    <div>
      {ticketsArray
        .map((ticket, index) => (
        <Ticket
          key={index}
          arrival_date={ticket.arrival_date}
          arrival_time={ticket.arrival_time}
          carrier={ticket.carrier}
          departure_date={ticket.departure_date}
          departure_time={ticket.departure_time}
          destination={ticket.destination}
          destination_name={ticket.destination_name}
          origin={ticket.origin}
          origin_name={ticket.origin_name}
          price={Math.ceil(ticket.price * multiplier)}
          stops={ticket.stops}
        />
      ))}
    </div>
  );
};
}

const mapStateToProps = (state) => ({
  filters: state.filter.filters,
  currency: state.currency
});

const mapDispatchToProps = dispatch => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(TicketsBar);
