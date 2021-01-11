import React from "react";

export default class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { firstName: "", lastName: "", email: "", password: "" };

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFirstNameChange(event) {
    this.setState({ firstName: event.target.value });
  }

  handleLastNameChange(event) {
    this.setState({ lastName: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    alert(
      "A name was submitted: " +
        this.state.firstName +
        " " +
        this.state.lastName
    );
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <br />
          <label>
            First Name:
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleFirstNameChange}
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              type="text"
              value={this.state.lastName}
              onChange={this.handleLastNameChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="text"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

