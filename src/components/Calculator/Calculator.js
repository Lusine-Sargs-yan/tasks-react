import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      number1: 0,
      number2: 0,
      result: 0
    };
  
  }
  
  handleInputNumber1 = (event) => {
    this.setState({
      number1: Number(event.target.value)
    })

  }
  handleInputNumber2 = (event) => {
    this.setState({
      number2: Number(event.target.value)
    })

  }
  add = () => {
    this.setState({
      result: this.state.number1 + this.state.number2
    })
  }

  subtract = () => {
    this.setState({
      result: this.state.number1 - this.state.number2
    })
  }

  multiply = () => {
    if(this.state.result === 0) {
      this.state.result = 1;
    }
    this.setState({
      result: this.state.number1 * this.state.number2
    })
  }
  divide = () => {
    this.setState({
      result: this.state.number1 / this.state.number2
    })
  }
  reset = () => {
    this.setState({
      result: 0,
      number1: 0,
      number2: 0

    })
  }
  
  render() {
    return (
      <div>
        <h2>The result is: {this.state.result}</h2>
        <label>
          Number1 
          <input
          type="number"
          onChange={(event) => this.handleInputNumber1(event)}
          value={this.state.number1}
          />
        </label>
        <label>
          Number2
          <input
          type="number"
          onChange={(event) => this.handleInputNumber2(event)}
          value={this.state.number2}
          />
        </label>
        <br />
        <br />
        <button onClick={this.add}>Add</button>
        <button onClick={this.subtract}>Subtract</button>
        <button onClick={this.multiply}>Multiply</button>
        <button onClick={this.divide}>Divide</button>
        <button onClick={this.reset}>Reset</button>

      </div>

    )
  }
}

export default Calculator;