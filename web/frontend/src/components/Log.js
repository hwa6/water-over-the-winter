import React from 'react';

export default class Log extends React.Component {
  render() {
    return (
      <div className="App-log">
        {this.props.message} on {this.props.date}
      </div>
    );
  }
}
