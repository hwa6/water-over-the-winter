import React from 'react';
import plant from '../images/plant.png';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  //we don't need a constructor here, since we don't do anything special w state
  /*
  constructor(props) {
    super(props);
  }
*/
  render() {
    return (
      <div className="App-header">
        <img
          className="App-logo"
          src={plant}
          alt="Henry's Alternate Text"
        ></img>
        <Link to={this.props.link}>
          <button className="App-button-logs">{this.props.title}</button>
        </Link>
      </div>
    );
  }
}
