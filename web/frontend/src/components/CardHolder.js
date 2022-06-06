import React from 'react';
import axios from 'axios';
import Card from './Card';
import pottedplant from '../images/pottedplant.png';
import cactus from '../images/cactus.png';
import flower from '../images/flower.png';
import palmtree from '../images/palmtree.png';

//TODO: Add margin to top of card such that it still has spacing when opened on mobile/small screens

class CardHolder extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: '' };
  }
  componentDidMount() {
    fetch('http://localhost:9000/plants')
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
    console.log(this.state.apiResponse);
  }

  render() {
    return (
      <div className="CardHolder">
        <h1 className=".Card-body-text">{this.state.apiResponse}</h1>
        <Card plantID="1" plantPhoto={pottedplant}></Card>
        <Card plantID="2" plantPhoto={cactus}></Card>
        <Card plantID="3" plantPhoto={flower}></Card>
        <Card plantID="4" plantPhoto={palmtree}></Card>
      </div>
    );
  }
}
export default CardHolder;
