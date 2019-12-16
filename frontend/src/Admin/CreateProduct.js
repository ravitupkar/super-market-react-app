import React, { Component } from 'react';
import api from '../Apis';
import { Redirect } from 'react-router';
import Breadcrumbs from '../components/Breadcrumbs';

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
      roll : 'User',
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
    const { fName, lName, subscribe, email, password, termsandconditions, roll } = this.state;
    const payload =
    {
      firstName: fName,
      lastName: lName,
      subscribe: subscribe,
      email: email,
      password: password,
      terms: termsandconditions,
      roll : roll
    };

    api.createtUser(payload).then(res => {
      // console.log(JSON.stringify(res));
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
        <div className="">
          <div className="container-fluid">
          <div className="col-md-3 products-left">
				<div className="categories">
					<h2>Admin Panel</h2>
					<ul className="cate">
						<li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Dashbord</a></li>
						<li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Category</a></li>
							<ul>
								<li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Add Category</a></li>
							</ul>
            <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Sub Category</a></li>
							<ul>
								<li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Add Sub Category</a></li>
							</ul>
              <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Product</a></li>
							<ul>
								<li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Add Product</a></li>
							</ul>
              <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Cart</a></li>
              <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Order</a></li>
              <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Users</a></li>
              <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>About</a></li>
              <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Contact Info</a></li>
              <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Contact List</a></li>
              <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Enquiry List</a></li>
              <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Faq</a></li>
              <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"></i>Terms And Condition</a></li>
					</ul>
				</div>																																												
			</div>
			<div className="col-md-9 products-right">
      <Breadcrumbs page="Add Product" />
            <div className="login-form-grids" style={{'width' : '100%', 'margin': '1em auto 0'}}>
              <h5>profile information</h5>
              <form onSubmit={this.handleSubmit} method="post">
                <input type="text" name="fName" placeholder="First Name..." required="" value={this.state.fName}
                  onChange={this.handleInputChange} />
                <input type="text" name="lName" placeholder="Last Name..." required="" value={this.state.lName}
                  onChange={this.handleInputChange} />
                <input type="text" name="email" placeholder="Email Address" required="" value={this.state.email}
                  onChange={this.handleInputChange} />
                <input type="text" name="text" placeholder="Password" required="" value={this.state.password}
                  onChange={this.handleInputChange} />
                  <input type="text" name="fName" placeholder="First Name..." required="" value={this.state.fName}
                  onChange={this.handleInputChange} />
                <input type="text" name="lName" placeholder="Last Name..." required="" value={this.state.lName}
                  onChange={this.handleInputChange} />
                <input type="text" name="email" placeholder="Email Address" required="" value={this.state.email}
                  onChange={this.handleInputChange} />
                <input type="text" name="password" placeholder="Password" required="" value={this.state.password}
                  onChange={this.handleInputChange} />
                
                <input type="submit" value="Register" />
                <br />
                {this.state.message ? <Alert message={this.state.message} /> : ''}

              </form>
            </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}