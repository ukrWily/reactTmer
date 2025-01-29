import { Component } from "react";

export class Form extends Component {
  state = {
    firstName: "",
    email: "",
    message: "",
    select: "",
    subscription: false, // Add a new state for the checkbox
    gender: "", // Add a new state for the radio button
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCheckbox = (event) => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  validateName = () => {
    if (this.state.firstName.length < 3) {
      alert("Name must be at least 3 characters long");
    }
  };

  validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(this.state.email)) {
      alert("Please enter a valid email address");
    }
  };

  render() {
    const { firstName, email, message, select, subscription, gender } =
      this.state;
    return (
      <form className="form">
        <input
          type="text"
          name="firstName"
          placeholder="firstName"
          value={firstName}
          onChange={this.handleChange}
          onBlur={this.validateName}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={this.handleChange}
          onBlur={this.validateEmail}
        />
        <br />
        <textarea
          name="message"
          value={message}
          onChange={this.handleChange}
        ></textarea>
        <br />
        <select name="select" value={select} onChange={this.handleChange}>
          <option value="" disabled></option>
          <option value="React">React</option>
          <option value="Angular">Angular</option>
          <option value="Vue">Vue</option>
        </select>
        <br />
        <label>
          <input
            type="checkbox"
            name="subscription"
            checked={subscription}
            onChange={this.handleCheckbox}
          />
        </label>
        <br />
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={this.handleChange}
          checked={gender === "male"}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={this.handleChange}
          checked={gender === "female"}
        />
        Female
      </form>
    );
  }
}
