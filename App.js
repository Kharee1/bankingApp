import React, { Component } from 'react';
import trans from './trans.js';
import css from './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      items: [],
    }
  }

  componentDidMount() {
    fetch ('http://my-json-server.typicode.com/kharee1/bankingApp/accounts')
      .then(res => res.json())
      .then(json => {
        this.setState({
          items: json,
        })
      });
  }

  render() {
    var { items } = this.state;
    return (
      <div className="App">
        <table>
          {items.map(item => (
            <tr key = {item.id}>
              Name: {item.name} <td>Balance: {item.balance}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }

}

export default App;
