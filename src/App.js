import ReactCardFlip from 'react-card-flip';
import React, { Component } from 'react';
import './App.css';

import img1 from './stuga/1.png';
import img2 from './stuga/2.png';

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
          <div class="image"><img src={img1} alt="" /></div>
        </div>
 
        <div className="card" key="back" onClick={this.handleClick}>
          <div class="image"><img src={img2} alt="" /></div>
        </div>
      </ReactCardFlip>
    )
  }
}

export default App;
