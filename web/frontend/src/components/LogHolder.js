import React from 'react';
import Log from './Log';

class LogHolder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:9000/logs')
      .then(function (response) {
        return response.json();
      })
      .then((jsonData) => {
        this.setState({ logs: jsonData });
      });
  }

  render() {
    return (
      <div className="App-log-holder">
        {this.state.logs.map((log) => (
          <Log date={log.date} message={log.message}></Log>
        ))}
      </div>
    );
  }
}

export default LogHolder;
