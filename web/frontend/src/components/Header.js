import React from 'react';
import plant from '../images/plant.png';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App-header">
        <img
          className="App-logo"
          src={plant}
          alt="Henry's Alternate Text"
        ></img>
        <Link to="/logs">
          <button className="App-button-logs">Logs</button>
        </Link>
      </div>
    );
  }
}
