import React from 'react';

export default class Log extends React.Component {
  render() {
    return (
      <div className="App-log">
        Date: {this.props.date} Message: {this.props.message}
      </div>
    );
  }
}
