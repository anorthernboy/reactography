import React, { Component } from 'react';
import Header from './components/Header';
import PostcodeInput from './components/PostcodeInput';
import Controls from './components/Controls';
import DataVis from './components/DataVis';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PostcodeInput crimeLocationSearch={this.crimeLocationSearch} />
        <Controls />
        <DataVis />
      </div>
    );
  }
  crimeLocationSearch = latLngObj => {
    const lat = latLngObj.lat;
    const lng = latLngObj.lng;
    fetch(
      `https://data.police.uk/api/crimes-street/all-crime?lat=${lat}&lng=${lng}&date=2017-01`
    )
      .then(res => res.json())
      .then(data => console.log(data));
  };
}

export default App;
