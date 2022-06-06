import pottedplant from './images/pottedplant.png';
import cactus from './images/cactus.png';
import flower from './images/flower.png';
import palmtree from './images/palmtree.png';
import plant from './images/plant.png';
import React from 'react';
import './App.css';
import Card from './components/Card';
import CardHolder from './components/CardHolder';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <CenterContent></CenterContent>
      <Footer></Footer>
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
