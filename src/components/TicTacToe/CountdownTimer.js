import React from 'react';

class CountdownTimer extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      seconds: 6,
      message: 'Your time is finished'
    }
  }
  
  componentDidMount() {
    this.dropdownTimer();
  }
  dropdownTimer = () => {
    setInterval(() => {
      if(this.state.seconds > 0) {
        this.setState({seconds: this.state.seconds - 1})
      } else {
        this.setState({message: this.state.message})
      }
    }, 1000)
  }
  
  render() {
    return (
      <div>
        <h2>Time: {this.state.seconds === 0 ? this.state.message : `0${this.state.seconds}`} </h2>
      </div>
    )
  }
}

export default  CountdownTimer;
