import React from "react";
import { googleAPI } from "../config/config";

class PostcodeInput extends React.Component {
  state = {
    postcode: "",
    date: ""
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handlePostcodeChange}
            value={this.state.postcode}
            type="text"
            placeholder="Enter your postcode..."
          />
          <input
            type="date"
            onChange={this.handleDateChange}
            value={this.state.date}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
  handlePostcodeChange = event => {
    this.setState({ postcode: event.target.value });
  };

  handleDateChange = event => {
    this.setState({ date: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const postcode = this.state.postcode;
    const date = this.state.date;
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${postcode}&key=${googleAPI}`
    )
      .then(res => res.json())
      .then(data =>
        this.props.crimeLocationSearch(data.results[0].geometry.location, date)
      );
  };
}

export default PostcodeInput;
