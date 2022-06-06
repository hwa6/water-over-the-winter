import pottedplant from './images/pottedplant.png';
import cactus from './images/cactus.png';
import flower from './images/flower.png';
import palmtree from './images/palmtree.png';
import plant from './images/plant.png';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <CenterContent></CenterContent>
      <Footer></Footer>
    </div>
  );
}

function PlantCard(props) {
  return (
    <div className="Card">
      <div className="Plant-image-holder">
        <img className="Plant-image" src={props.plantPhoto}></img>
      </div>
      <h1 className="Card-title-text">Plant {props.plantID}</h1>
      <p1 className="Card-body-text">Current Moisture Reading: </p1>
      <p1 className="Card-body-text">Current Moisture Threshold: </p1>
      <div>
        <p1 className="Card-body-text">New Threshold: </p1>
        <input className="Card-input"></input>
      </div>
      <button className="App-button-update" onClick={clickedButton}>
        Update Threshold
      </button>
    </div>
  );
}

function CardHolder(props) {
  return (
    <div className="CardHolder">
      <PlantCard plantID="1" plantPhoto={pottedplant}></PlantCard>
      <PlantCard plantID="2" plantPhoto={cactus}></PlantCard>
      <PlantCard plantID="3" plantPhoto={flower}></PlantCard>
      <PlantCard plantID="4" plantPhoto={palmtree}></PlantCard>
    </div>
  );
}

function PageTitle(props) {
  return (
    <div className="App-titleholder">
      <h1 className="App-title">Water Over The Winter</h1>
      <h3 className="App-subtitle">Configure and read moisture levels here!</h3>
    </div>
  );
}

function Header(props) {
  return (
    <div className="App-header">
      <img className="App-logo" src={plant}></img>
      <button className="App-button-logs">Logs</button>
    </div>
  );
}

function CenterContent(props) {
  return (
    <div className="App-centercontent">
      <PageTitle></PageTitle>
      <CardHolder></CardHolder>
    </div>
  );
}

function Footer(props) {
  return (
    <div className="App-footer">
      <button className="App-button-sourcecode" onClick={sourceCode}>
        Source Code
      </button>
    </div>
  );
}

function clickedButton() {
  console.log('made it here!');
}

function sourceCode() {
  window.location.href = 'https://github.com/hwa6/water-over-the-winter';
}

export default App;
