import { Component } from "react";

export class Subscription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      agree: false,
    };
  }

  handleEmailChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCheckbox = (event) => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(this.state.email)) {
      alert("Please enter a valid email address");
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.agree && this.state.email) {
      alert("You are subscribed!");
      this.setState({ email: "", agree: false });
    } else {
      alert("Please enter a valid email address and agree to the terms");
    }
  };

  render() {
    const { email, agree } = this.state;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={this.handleEmailChange}
          onBlur={this.validateEmail}
        />
        <input
          type="checkbox"
          name="agree"
          value={agree}
          onChange={this.handleCheckbox}
        />
        <label htmlFor="agree">I agree to the terms of service</label>
        <button type="submit">Subscribe</button>
      </form>
    );
  }
}
