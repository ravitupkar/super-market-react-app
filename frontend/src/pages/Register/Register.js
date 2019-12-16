import React, { Component } from 'react';
import api from '../../Apis';
import { Redirect } from 'react-router';
import Breadcrumbs from '../../components/Breadcrumbs';

function Alert(props) {
  return (
    <>
      <div className="alert alert-success alert-dismissible">
        <a href="/" className="close" data-dismiss="alert" aria-label="close">&times;</a>
        <strong>Success!</strong> {props.message}
      </div>
      <div className="register-home">
        <a href="/login">Login</a>
      </div>
    </>
  )
}

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      fName: '',
      lName: '',
      subscribe: false,
      email: '',
      password: '',
      cpassword: '',
      termsandconditions: '',
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
    const { fName, lName, subscribe, email, password, termsandconditions } = this.state;
    const payload =
    {
      firstName: fName,
      lastName: lName,
      subscribe: subscribe,
      email: email,
      password: password,
      terms: termsandconditions
    };

    api.createtUser(payload).then(res => {
      console.log(JSON.stringify(res));
      this.setState({
        fName: '',
        lName: '',
        subscribe: false,
        email: '',
        password: '',
        cpassword: '',
        termsandconditions: '',
        message: "Your are register successfully",
        redirect: true
      });
    })
  }

  componentDidMount() {
    this.setState({
      message: '',
    });
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/login' />;
    }
    return (
      <>
        <Breadcrumbs page="Register" />


        <div className="register">
          <div className="container">
            <h2>Register Here</h2>
            <div className="login-form-grids">
              <h5>profile information</h5>
              <form onSubmit={this.handleSubmit} method="post">
                <input type="text" name="fName" placeholder="First Name..." required="" value={this.state.fName}
                  onChange={this.handleInputChange} />
                <input type="text" name="lName" placeholder="Last Name..." required="" value={this.state.lName}
                  onChange={this.handleInputChange} />

                <div className="register-check-box">
                  <div className="check">
                    <label className="checkbox"><input type="checkbox" name="subscribe" checked={this.state.subscribe}
                      onChange={this.handleInputChange} /><i> </i>Subscribe to Newsletter</label>
                  </div>
                </div>
                <h6>Login information</h6>
                <input type="email" name="email" placeholder="Email Address" required="" value={this.state.email}
                  onChange={this.handleInputChange} />
                <input type="password" name="password" placeholder="Password" required="" value={this.state.password}
                  onChange={this.handleInputChange} />
                <input type="password" name="cpassword" placeholder="Password Confirmation" required="" value={this.state.cpassword}
                  onChange={this.handleInputChange} />
                <div className="register-check-box">
                  <div className="check">
                    <label className="checkbox"><input type="checkbox" name="termsandconditions" checked={this.state.termsandconditions}
                      onChange={this.handleInputChange} /><i> </i>I accept the terms and conditions</label>
                  </div>
                </div>
                <input type="submit" value="Register" />
                <br />
                {this.state.message ? <Alert message={this.state.message} /> : ''}

              </form>
            </div>

          </div>
        </div>
      </>
    )
  }
}