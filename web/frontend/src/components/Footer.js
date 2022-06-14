import React from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App-footer">
        <Link to={this.props.link}>
          <button
            className="App-button-sourcecode"
            onClick={this.props.onClick}
          >
            {this.props.text}
          </button>
        </Link>
      </div>
    );
  }
}
