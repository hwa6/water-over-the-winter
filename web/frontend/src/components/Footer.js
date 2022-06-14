import React from 'react';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App-footer">
        <button className="App-button-sourcecode" onClick={this.props.onClick}>
          {this.props.text}
        </button>
      </div>
    );
  }
}
