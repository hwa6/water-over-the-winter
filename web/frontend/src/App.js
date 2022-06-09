import React from 'react';
import './App.css';
import CardHolder from './components/CardHolder';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header link="/logs" title="Logs" />
      <CenterContent />
      <Footer />
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

export default App;
