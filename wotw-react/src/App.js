import logo from './logo.svg';
import pottedplant from './images/pottedplant.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header"></div>
      <div className="CardHolder">
        <div className="Card">
          <div className="Plant-image-holder">
            <img className="Plant-image" src={pottedplant}></img>
          </div>
          <h1 className="Card-title-text">Plant 1</h1>
          <p1 className="Card-body-text">Current Moisture Reading: </p1>
          <p1 className="Card-body-text">Current Moisture Threshold: </p1>
          <div>
            <p1 className="Card-body-text">New Threshold: </p1>
            <input className="Card-input"></input>
          </div>
          <button className="Card-update-button" onClick={clickedButton}>
            Update Threshold
          </button>
        </div>
        <div className="Card">
          <h1 className="PlantTitle">Plant 1</h1>
          <p1>Current Moisture Reading: </p1>
          <p1>Current Moisture Threshold: </p1>
          <div>
            <p1>New Threshold Value: </p1>
            <input></input>
          </div>

          <button className="Button" onClick={clickedButton}>
            Update Threshold
          </button>
        </div>
        <div className="Card">
          <h1 className="PlantTitle">Plant 1</h1>
          <p1>Current Moisture Reading: </p1>
          <p1>Current Moisture Threshold: </p1>
          <div>
            <p1>New Threshold Value: </p1>
            <input></input>
          </div>

          <button className="Button" onClick={clickedButton}>
            Update Threshold
          </button>
        </div>
        <div className="Card">
          <h1 className="PlantTitle">Plant 1</h1>
          <p1>Current Moisture Reading: </p1>
          <p1>Current Moisture Threshold: </p1>
          <div>
            <p1>New Threshold Value: </p1>
            <input></input>
          </div>

          <button className="Button" onClick={clickedButton}>
            Update Threshold
          </button>
        </div>
      </div>
      <div className="App-footer">
        <button className="SourceCode-button" onClick={sourceCode}>
          Source Code
        </button>
      </div>
    </div>
  );
}

function clickedButton() {
  console.log('made it here!');
}

function sourceCode() {
  console.log('Redirecting to Github Repo');
}

export default App;
