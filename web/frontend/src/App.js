import plant from './images/plant.png';
import React from 'react';
import './App.css';
import CardHolder from './components/CardHolder';

import { Link } from 'react-router-dom';

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
      <img className="App-logo" src={plant} alt="Henry's Alternate Text"></img>
      <Link to="/logs">
        <button className="App-button-logs">Logs</button>
      </Link>
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

function sourceCode() {
  window.location.href = 'https://github.com/hwa6/water-over-the-winter';
}

function logs() {
  window.location.href = 'http://localhost:3000/logs';
}
export default App;
