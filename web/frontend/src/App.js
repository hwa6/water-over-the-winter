import React from 'react';
import './App.css';
import CardHolder from './components/CardHolder';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header link="/logs" title="Logs" />
      <CenterContent />
      <Footer link="/" text="Source Code" onClick={sourceCode} />
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

function sourceCode() {
  window.location.href = 'https://github.com/hwa6/water-over-the-winter';
}

export default App;
