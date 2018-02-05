import ReactCardFlip from 'react-card-flip';
import React from 'react';

class Card extends React.Component {
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
          <div className="image">Front</div>
        </div>
  
        <div className="card" key="back" onClick={this.handleClick}>
          <div className="image">Back</div>
        </div>
      </ReactCardFlip>
    )
  }
}
  
export default Card;
  