import React, { Component } from 'react'
import api from '../../Apis';
import { Redirect } from 'react-router';
import Breadcrumbs from '../../components/Breadcrumbs';
import { Link } from "react-router-dom";

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      email: '',
      password: '',
      message: '',
      redirect: false
    };

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
    const { email, password } = this.state;
    const payload = { email, password };
    alert(JSON.stringify(payload));
    api.UserLogin(payload).then(result => {
      alert(JSON.stringify(result.data.token));
      console.log(JSON.stringify(result));
      localStorage.setItem('_id', result.data._id);
      localStorage.setItem('email', result.data.email);
      localStorage.setItem('token', result.data.token);
      localStorage.setItem('isAuthenticated', true);
      this.setState({
        email: '',
        password: '',
        redirect: true
      });
    })
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/profile' />;
    }
    return (
      <>
        <Breadcrumbs page="Login" />
        <div className="login">
          <div className="container">
            <h2>Login Form</h2>

            <div className="login-form-grids animated wow slideInUp" data-wow-delay=".5s">
              <form onSubmit={this.handleSubmit}>
                <input type="email" name="email" placeholder="Email Address" required="" value={this.state.email}
                  onChange={this.handleInputChange} />
                <input type="password" name="password" placeholder="Password" required="" value={this.state.password}
                  onChange={this.handleInputChange} />
                <div className="forgot">
                  <a href="/">Forgot Password?</a>
                </div>
                <input type="submit" value="Login" />
              </form>
            </div>
            <h4>For New People</h4>
            <p><Link to="/register">Register Here</Link> (Or) go back to <Link to="/">Home<span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span></Link></p>
          </div>
        </div>
      </>
    )
  }
}
