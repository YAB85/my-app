import React, { Component } from 'react'

export default class Form extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    
    fetch('/api/form-submit-url', {
      method: 'POST',
      body: data,
    });
  }

  render() {
    return (
      <form  className="form_request" onSubmit={this.handleSubmit}>
        <label htmlFor="username">Name</label>
        <input className="form_request__field" id="username"  name="username" type="text" />

        <label htmlFor="email">E-mail</label>
        <input className="form_request__field" id="email"  name="email" type="email" />
        <br/>
        <button className="button__form_request">SEND</button>
      </form>
    );
  }
}







/*export default class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'Name'};
      this.state = {value: 'E-mail'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form className="form_request" onSubmit={this.handleSubmit}>
          <label>
            <input className="form_request__field" type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            <input className="form_request__field" type="text" value={this.state.value} onChange={this.handleChange} />
          </label><br/>
          <input className="button__form_request " type="submit" value="SEND" />
        </form>
      );
    }
  }*/