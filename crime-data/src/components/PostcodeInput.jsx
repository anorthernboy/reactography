import React from "react";
import { googleAPI } from "../config/config";

class PostcodeInput extends React.Component {
  state = {
    postcode: ""
  };
  render() {
    console.log(this.state.postcode);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.postcode}
            type="text"
            placeholder="Enter your postcode..."
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
  handleChange = event => {
    this.setState({ postcode: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const postcode = this.state.postcode;
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${postcode}&key=${googleAPI}`
    )
      .then(res => res.json())
      .then(data =>
        this.props.crimeLocationSearch(data.results[0].geometry.location)
      );
  };
}

export default PostcodeInput;
