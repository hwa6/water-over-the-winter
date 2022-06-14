import React from 'react';
import Header from '../components/Header';
import LogHolder from '../components/LogHolder';
import Footer from '../components/Footer';

export default function Logs() {
  return (
    <div className="App">
      <Header link="/" title="Back" />
      <LogHolder />
      <Footer text="Clear Logs" onClick={sourceCode} />
    </div>
  );
}

function sourceCode() {
  window.location.href = 'https://github.com/hwa6/water-over-the-winter';
}
