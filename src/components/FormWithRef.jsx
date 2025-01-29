import React, { Component } from "react";

export class FormWithRef extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: "",
      email: "",
    };
    this.cardRef = React.createRef();
    this.emailRef = React.createRef();
  }

  handleChange = (event) => {
    this.setState(
      () => ({ [event.target.name]: event.target.value }),
      () => {
        if (this.state.card.length === 16) {
          this.emailRef.current.focus();
        }
      }
    );
  };

  componentDidMount() {
    console.log(this.cardRef);
    this.cardRef.current.focus();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    const { card, email } = this.state;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="card"
          placeholder="card"
          value={card}
          onChange={this.handleChange}
          ref={this.cardRef}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={this.handleChange}
          ref={this.emailRef}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
