import React from 'react';
import ReactDOM from 'react-dom';

export default class Search extends React.Component {
  constructor(props){
    super(props);
    // 下面这句是什么意思
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch(){
    let name = ReactDOM.findDOMNode(this.refs.name).value;
    if(name === ''){
      return;
    }
    this.props.sendAction(name);
  }
  render(){
    return (
      <div>
        <input type="text" ref="name" placeholder="enter the name you wanna search"></input>
        <button onClick={this.handleSearch}>Search</button>
      </div>
    )
  }
}
