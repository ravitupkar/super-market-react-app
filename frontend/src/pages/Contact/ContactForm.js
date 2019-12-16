import React, { Component } from 'react'
import api from '../../Apis';

export default class ContactForm extends Component {

  constructor(props) {
    super(props);
    this.state = { name: '', email: '', message: '' };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, message } = this.state;
    const payload = { name, email, message };
   
    api.createContact(payload).then(result => {
      console.log(JSON.stringify(result));
      this.setState({name: '', email: '', message: ''});
    })
  }

  render() {
    // console.log(this.state.contact.name);
    return (

      <div className="col-md-6 w3_agileits_contact_grid_right">
        <h2 className="w3_agile_header">Leave a<span> Message</span></h2>

        <form onSubmit={this.handleSubmit}>
          <span className="input input--ichiro">
            <input className="input__field input__field--ichiro" type="text" id="input-25"
              name="name" value={this.state.name}
              onChange={this.handleInputChange} placeholder="" required="" />
            <label className="input__label input__label--ichiro" htmlFor="input-25">
              <span className="input__label-content input__label-content--ichiro">Your Name</span>
            </label>
          </span>
          <span className="input input--ichiro">
            <input className="input__field input__field--ichiro" type="email" id="input-26"
              name="email" value={this.state.email}
              onChange={this.handleInputChange} placeholder=" " required="" />
            <label className="input__label input__label--ichiro" htmlFor="input-26">
              <span className="input__label-content input__label-content--ichiro">Your Email</span>
            </label>
          </span>
          <textarea name="message" value={this.state.message}
            onChange={this.handleInputChange} placeholder="Your message here..." required=""></textarea>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
