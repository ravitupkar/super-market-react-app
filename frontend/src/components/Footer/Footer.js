import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer">
          <div className="container">
            <div className="w3_footer_grids">
              <div className="col-md-3 w3_footer_grid">
                <h3>Contact</h3>

                <ul className="address">
                  <li><i className="glyphicon glyphicon-map-marker" aria-hidden="true"></i>1234k Avenue, 4th block, <span>New York City.</span></li>
                  <li><i className="glyphicon glyphicon-envelope" aria-hidden="true"></i><Link to="mailto:info@example.com">info@example.com</Link></li>
                  <li><i className="glyphicon glyphicon-earphone" aria-hidden="true"></i>+1234 567 567</li>
                </ul>
              </div>
              <div className="col-md-3 w3_footer_grid">
                <h3>Information</h3>
                <ul className="info">
                  <li><i className="fa fa-arrow-right" aria-hidden="true"></i><Link to="/about">About Us</Link></li>
                  <li><i className="fa fa-arrow-right" aria-hidden="true"></i><Link to="/contact">Contact Us</Link></li>
                  <li><i className="fa fa-arrow-right" aria-hidden="true"></i><Link to="/privacy-policy">Privacy Policy</Link></li>
                  <li><i className="fa fa-arrow-right" aria-hidden="true"></i><Link to="/faq">FAQ's</Link></li>
                  <li><i className="fa fa-arrow-right" aria-hidden="true"></i><Link to="/terms-and-condition">Terms And Condition</Link></li>
                </ul>
              </div>
              <div className="col-md-3 w3_footer_grid">
                <h3>Category</h3>
                <ul className="info">
                  <li><i className="fa fa-arrow-right" aria-hidden="true"></i><Link to="/store">Groceries</Link></li>
                  <li><i className="fa fa-arrow-right" aria-hidden="true"></i><Link to="/store">Household</Link></li>
                  <li><i className="fa fa-arrow-right" aria-hidden="true"></i><Link to="/store">Personal Care</Link></li>
                  <li><i className="fa fa-arrow-right" aria-hidden="true"></i><Link to="/store">Packaged Foods</Link></li>
                  <li><i className="fa fa-arrow-right" aria-hidden="true"></i><Link to="/store">Beverages</Link></li>
                </ul>
              </div>
              <div className="col-md-3 w3_footer_grid">
                <h3>Profile</h3>
                <ul className="info">
                  <li><i className="fa fa-arrow-right" aria-hidden="true"></i><Link to="/store">Store</Link></li>
                  <li><i className="fa fa-arrow-right" aria-hidden="true"></i><Link to="/checkout">My Cart</Link></li>
                  <li><i className="fa fa-arrow-right" aria-hidden="true"></i><Link to="/login">Login</Link></li>
                  <li><i className="fa fa-arrow-right" aria-hidden="true"></i><Link to="/register">Create Account</Link></li>
                </ul>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>

          <div className="footer-copy">

            <div className="container">
              <p>© 2017 Super Market. All rights reserved | Design by <Link to="/http://w3layouts.com/">W3layouts</Link></p>
            </div>
          </div>

        </div>
        <div className="footer-botm">
          <div className="container">
            <div className="w3layouts-foot">
              <ul>
                <li><Link to="#" className="w3_agile_facebook"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                <li><Link to="#" className="agile_twitter"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                <li><Link to="#" className="w3_agile_dribble"><i className="fa fa-dribbble" aria-hidden="true"></i></Link></li>
                <li><Link to="#" className="w3_agile_vimeo"><i className="fa fa-vimeo" aria-hidden="true"></i></Link></li>
              </ul>
            </div>
            <div className="payment-w3ls">
              <img src="./images/card.png" alt=" " className="img-responsive" />
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
    );
  }
}
