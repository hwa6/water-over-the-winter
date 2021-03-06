import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      threshold_state: '',
    };
  }

  componentDidMount() {
    let url = '/plants/' + (this.props.plantID - 1);
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then((jsonData) => {
        this.setState({ threshold_state: jsonData[0].threshold });
      });
  }
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
          Current Moisture Reading: {this.props.moistureLevel}
        </p1>
        <p1 className="Card-body-text">
          Current Moisture Threshold: {this.state.threshold_state}
        </p1>
        <div>
          <p1 className="Card-body-text">New Threshold: </p1>
          <input
            className="Card-input"
            value={this.state.inputValue}
            onChange={(evt) => this.updateInputValue(evt)}
          ></input>
        </div>
        <button
          className="App-button-update"
          onClick={() => this.clickedButton(this.props.plantID - 1)}
        >
          Update Threshold
        </button>
      </div>
    );
  }
  updateInputValue(evt) {
    const val = evt.target.value;
    this.setState({ inputValue: val });
  }
  clickedButton(id) {
    fetch('plants/' + id, {
      method: 'put',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        threshold: this.state.inputValue,
      }),
    }).then(this.setState({ threshold_state: this.state.inputValue }));
  }
}

export default Card;
