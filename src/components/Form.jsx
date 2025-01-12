import { Component } from "react";

export class Form extends Component {
  state = {
    firstName: "",
  };

  handleChange = (e) => {
    this.setState({ firstName: e.target.value });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.firstName}
          placeholder="firstName"
          onChange={(e) => this.handleChange(e)}
        />
        {/* <input type="text" placeholder="Email" /> */}
        {/* <button>Submit</button> */}
      </form>
    );
  }
}
