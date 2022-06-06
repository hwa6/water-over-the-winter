import React from 'react';

class Card extends React.Component {
  render() {
    return (
      <div className="Card">
        <div className="Plant-image-holder">
          <img
            className="Plant-image"
            src={this.props.plantPhoto}
            alt="Henry's Alternate Text"
          ></img>
        </div>
        <h1 className="Card-title-text">Plant {this.props.plantID}</h1>
        <p1 className="Card-body-text">
          Current Moisture Reading: {this.props.moistureLevel}{' '}
        </p1>
        <p1 className="Card-body-text">
          Current Moisture Threshold: {this.props.moistureThreshold}{' '}
        </p1>
        <div>
          <p1 className="Card-body-text">New Threshold: </p1>
          <input className="Card-input"></input>
        </div>
        <button className="App-button-update" onClick={clickedButton}>
          Update Threshold
        </button>
      </div>
    );
  }
}

function clickedButton() {
  console.log('made it here!');
}

export default Card;
