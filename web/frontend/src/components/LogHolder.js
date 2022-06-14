import React from 'react';
import Log from './Log';
import moment from 'moment';

class LogHolder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: [],
      test: 'Hello',
    };
  }

  async componentDidMount() {
    await fetch('http://localhost:9000/logs')
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        this.setState({ logs: jsonData }, function () {
          var local = this.state.logs;
          for (var i in local) {
            local[i].date = moment(local[i].date).format(
              'MMMM Do YYYY, h:mm a'
            );
          }
          this.setState({ logs: local });
        });
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
