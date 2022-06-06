import React from 'react';
import Card from './Card';
import pottedplant from '../images/pottedplant.png';
import cactus from '../images/cactus.png';
import flower from '../images/flower.png';
import palmtree from '../images/palmtree.png';

//TODO: Add margin to top of card such that it still has spacing when opened on mobile/small screens

class CardHolder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plant1: {},
      plant2: {},
      plant3: {},
      plant4: {},
    };
  }
  componentDidMount() {
    fetch('http://localhost:9000/plants')
      .then(function (response) {
        return response.json();
      })
      .then((jsonData) => {
        this.setState({
          plant1: jsonData[0],
          plant2: jsonData[1],
          plant3: jsonData[2],
          plant4: jsonData[3],
        });
        console.log(JSON.stringify(jsonData));
      });
  }

  render() {
    return (
      <div className="CardHolder">
        <h1 className=".Card-body-text">{this.state.apiResponse}</h1>
        <h1 className=".Card-body-text">{this.state.otherResponse}</h1>
        <Card
          plantID="1"
          plantPhoto={pottedplant}
          moistureLevel={this.state.plant1.moisture_level}
          moistureThreshold={this.state.plant1.threshold}
        ></Card>
        <Card
          plantID="2"
          plantPhoto={cactus}
          moistureLevel={this.state.plant2.moisture_level}
          moistureThreshold={this.state.plant2.threshold}
        ></Card>
        <Card
          plantID="3"
          plantPhoto={flower}
          moistureLevel={this.state.plant3.moisture_level}
          moistureThreshold={this.state.plant3.threshold}
        ></Card>
        <Card
          plantID="4"
          plantPhoto={palmtree}
          moistureLevel={this.state.plant4.moisture_level}
          moistureThreshold={this.state.plant4.threshold}
        ></Card>
      </div>
    );
  }
}
export default CardHolder;
