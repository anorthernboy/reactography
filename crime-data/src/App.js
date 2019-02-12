import React, { Component } from 'react';
import Header from './components/Header';
import PostcodeInput from './components/PostcodeInput';
import DataVis from './components/DataVis';

class App extends Component {
  state = {
    streetLevelCrimes: ''
  };

  render() {
    console.log(this.state.streetLevelCrimes);
    return (
      <div className="App">
        <Header />
        <PostcodeInput crimeLocationSearch={this.crimeLocationSearch} />
        <DataVis crime={this.state.streetLevelCrimes} />
      </div>
    );
  }

  crimeLocationSearch = (latLngObj, dateStr) => {
    const date = dateStr.slice(0, 7);
    const lat = latLngObj.lat;
    const lng = latLngObj.lng;
    fetch(
      `https://data.police.uk/api/crimes-street/all-crime?lat=${lat}&lng=${lng}&date=${date}`
    )
      .then(res => res.json())
      .then(data => {
        const crimeData = data.reduce((acc, curr) => {
          if (acc[curr.category]) {
            acc[curr.category]++;
            return acc;
          } else {
            acc[curr.category] = 1;
            return acc;
          }
        }, {});
        this.setState({ streetLevelCrimes: crimeData });
      });
  };
}

export default App;
