import React from "react";
import { googleAPI } from "../config/config";

class PostcodeInput extends React.Component {
  state = {
    currentPostcode: "",
    newPostcode: ""
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleCurrentPostcodeChange}
            value={this.state.currentPostcode}
            type="text"
            placeholder="Enter your current postcode..."
          />
          <input
            onChange={this.handleNewPostcodeChange}
            value={this.state.newPostcode}
            type="text"
            placeholder="Enter your new postcode..."
          />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
  handleCurrentPostcodeChange = event => {
    this.setState({ currentPostcode: event.target.value });
  };

  handleNewPostcodeChange = event => {
    this.setState({ newPostcode: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const currentPostcode = this.state.currentPostcode;
    const newPostcode = this.state.newPostcode;
    Promise.all([
      fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${currentPostcode}&key=${googleAPI}`
      ),
      fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${newPostcode}&key=${googleAPI}`
      )
    ])

      .then(([currentPostcode, newPostcode]) => {
        return Promise.all([currentPostcode.json(), newPostcode.json()]);
      })
      .then(data => {
        this.props.currentCrimeLocationSearch(
          data[0].results[0].geometry.location
        );
        this.props.currentAddress(data[0].results[0].formatted_address);
        this.props.newCrimeLocationSearch(data[1].results[0].geometry.location);
        this.props.newAddress(data[1].results[0].formatted_address);
      });
  };
}

export default PostcodeInput;
