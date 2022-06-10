import React from 'react';
import Header from '../components/Header';
import LogHolder from '../components/LogHolder';

export default function Logs() {
  return (
    <div className="App">
      <Header link="/" title="Back" />
      <LogHolder></LogHolder>
      <Footer />
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
