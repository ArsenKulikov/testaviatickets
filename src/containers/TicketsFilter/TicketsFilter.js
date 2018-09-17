import React, { Component } from 'react';
import { setVisibilityFilter } from '../../store/filter/actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fields } from '../../config'

class TicketsFilter extends Component {

  state = {
    SET_ALL: true,
    0: false,
    1: false,
    2: false,
    3: false
  };

  componentDidMount = () => {
    const { setVisibilityFilter } = this.props.filterActions;
    setVisibilityFilter('SET_ALL');
  };

  componentWillReceiveProps = (nextProps) => {

  };

  handleFilterChange = (filter, e) => {
    const { setVisibilityFilter } = this.props.filterActions;
    const { filters } = this.props;

    console.log(filters);
    console.log(filter);
    if (filter === 'SET_ALL' ) {
      this.setState({SET_ALL: true, 0: false, 1: false, 2: false, 3: false});
      setVisibilityFilter(filter);
    } else if (!filters.includes(filter) && filter !== 'SET_ALL') {
      this.setState({SET_ALL: false, [e.target.name]: true});
      setVisibilityFilter(filter);
    } else if (filters.includes(filter) && filter !== 'SET_ALL') {
      this.setState({[e.target.name]: false});
      setVisibilityFilter(filter);
    }
  };
 
  render() {

    return (
      <form>
        <fieldset>
          {fields.map(item => {
            return (
              <div key={item.name}>
                <input
                  type="checkbox"
                  id={item.name}
                  name={item.filter}
                  checked={this.state[item.filter]}
                  onChange={e => this.handleFilterChange(item.filter, e)}
                />
                <label htmlFor={item.name}>{item.name}</label>
              </div>
            );
          })}
        </fieldset>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filter.filters
});

const mapDispatchToProps = dispatch => ({
  filterActions: bindActionCreators({
    setVisibilityFilter
  }, dispatch)
});

export default connect( mapStateToProps, mapDispatchToProps )(TicketsFilter);
