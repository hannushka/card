import ReactCardFlip from 'react-card-flip';
import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
 
  handleClick(e) {
    e.preventDefault();
    this.setState({ isFlipped: !this.state.isFlipped });
  }
 
  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped}>
        <div className="card" key="front" onClick={this.handleClick}>
          <p>This is the front of the card.</p>
        </div>
 
        <div className="card" key="back" onClick={this.handleClick}>
          <p>This is the back of the card.</p>
        </div>
      </ReactCardFlip>
    )
  }
}

export default App;
