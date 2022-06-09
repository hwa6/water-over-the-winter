import React from 'react';

export default class Footer extends React.Component {
  constructor(props) {
    super(this.props);
  }
  render() {
    return (
      <div className="App-footer">
        <button className="App-button-sourcecode">Source Code</button>
      </div>
    );
  }
}
function sourceCode() {
  window.location.href = 'https://github.com/hwa6/water-over-the-winter';
}
