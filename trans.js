import React, { Component } from 'react';

class trans extends Component {
    constructor(props){
        super(props);
        this.state={
            start:0,
            withdraw:0,
            balance:0
        }
    this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
       this.setState({[e.target.name]: e.target.value}, function() {
           this.setState({balance: this.state.start - this.state.withdraw});
       });
    }
    render() {
        return (
            <div className="form">
                <form method="">
                    <label htmlFor="start">start </label>
                    <input name="start" type="text" onChange={this.handleChange}></input>
                    <label htmlFor="withdraw">withdraw </label>
                    <input name="withdraw" type="text" onChange={this.handleChange}></input>
                </form>

                <h6>start: {this.state.start}</h6>
                <h6>withdraw: {this.state.withdraw}</h6>
                <h6>balance: {this.state.balance}</h6>
            </div>
        );
    }
}

export default trans; 