import React from 'react';
import Header from '../components/Header';
import LogHolder from '../components/LogHolder';
import Footer from '../components/Footer';

export default function Logs() {
  return (
    <div className="App">
      <Header link="/" title="Back" />
      <LogHolder />
      <Footer text="Clear Logs" onClick={clearLogs} />
    </div>
  );
}

function clearLogs() {
  fetch('http://localhost:9000/logs', {
    method: 'delete',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
  });
}
