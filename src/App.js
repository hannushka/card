import ReactCardFlip from 'react-card-flip';
import React, { Component } from 'react';
import './App.css';

import img1 from './stuga/STUGAN.JPG';
import img2 from './stuga/BADTUNNA.JPG';

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
        Häng med oss till spastuga!
          {/*<div class="image"><img src={img1} alt="" /></div>
          <div class="image"><img src={img2} alt="" /></div>*/}
        </div>
 
        <div className="card" key="back" onClick={this.handleClick}>
          <p>Datum: 19-21/1 2018</p>
          <p>Var: Margretetorpsvägen 14, 297 95 Degeberga</p>
          <p>SPA-WEEKEND MED BASTU & VEDELDAD BADTUNNA 
          LAGA GOD MAT, VANDRA, BASTA/BADA & KOPPLA AV</p>
          <p>Kramar från</p>
          <p>Hannah & Ida</p>
        </div>
      </ReactCardFlip>
    )
  }
}

export default App;
