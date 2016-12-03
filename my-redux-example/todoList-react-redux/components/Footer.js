import React, { Component, PropTypes } from 'react'

export default class Footer extends Component {
  renderFilter(filter, name){
    let {visibilityFilter, onFilterChange} = this.props;
    if(filter === visibilityFilter){
      return name
    }
    return (
      <a href='#' onClick={()=>{onFilterChange(filter)}}>
        {name}
      </a>
    )
  }
  render(){
    return (
      <p>
        {this.renderFilter('SHOW_ALL', 'All')}{', '}
        {this.renderFilter('SHOW_COMPLETED', 'Completed')}{', '}
        {this.renderFilter('SHOW_ACTIVE', 'Active')}
      </p>
    )
  }
}

Footer.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  visibilityFilter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
}
