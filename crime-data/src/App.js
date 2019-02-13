import React, { Component } from 'react';
import Header from './components/Header';
import PostcodeInput from './components/PostcodeInput';
import DataVis from './components/DataVis';

class App extends Component {
  state = {
    currentStreetLevelCrimes: '',
    newStreetLevelCrimes: '',
    currentAddress: '',
    newAddress: ''
  };

  render() {
    console.log(this.state.streetLevelCrimes);
    return (
      <div
        className="App"
        // style={{
        //   'background-image':
        //     'url("https://i.dailymail.co.uk/i/pix/2012/05/17/article-0-0665FFBC000005DC-419_468x286.jpg")',
        //   'background-size': 'cover'
        // }}
      >
        <Header />
        <PostcodeInput
          currentCrimeLocationSearch={this.currentCrimeLocationSearch}
          newCrimeLocationSearch={this.newCrimeLocationSearch}
          currentAddress={this.currentAddress}
          newAddress={this.newAddress}
        />
        <DataVis
          crime={this.state.currentStreetLevelCrimes}
          address={this.state.currentAddress}
        />
        <DataVis
          crime={this.state.newStreetLevelCrimes}
          address={this.state.newAddress}
        />
      </div>
    );
  }

  currentCrimeLocationSearch = (latLngObj, address) => {
    const lat = latLngObj.lat;
    const lng = latLngObj.lng;
    fetch(
      `https://data.police.uk/api/crimes-street/all-crime?lat=${lat}&lng=${lng}`
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
        this.setState({ currentStreetLevelCrimes: crimeData });
      });
  };

  newCrimeLocationSearch = (latLngObj, address) => {
    const lat = latLngObj.lat;
    const lng = latLngObj.lng;
    fetch(
      `https://data.police.uk/api/crimes-street/all-crime?lat=${lat}&lng=${lng}`
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
        this.setState({ newStreetLevelCrimes: crimeData });
      });
  };

  currentAddress = address => {
    this.setState({ currentAddress: address });
  };

  newAddress = address => {
    this.setState({ newAddress: address });
  };
}

export default App;
