import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class ContactMap extends Component {
  render() {
    return (
      <div className="col-md-6 w3_agileits_contact_grid_left">
        <div className="agile_map">
          <iframe title="title" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.3905851087434!2d-34.90500565012194!3d-8.061582082752993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18d90992e4ab%3A0x8e83c4afabe39a3a!2sSport+Club+Do+Recife!5e0!3m2!1sen!2sin!4v1478684415917" style={{ border: "0", width: "100%" }}></iframe>
        </div>
        <div className="agileits_w3layouts_map_pos">
          <div className="agileits_w3layouts_map_pos1">
            <h3>Contact Info</h3>
            <p>1234k Avenue, 4th block, New York City.</p>
            <ul className="wthree_contact_info_address">
              <li><i className="fa fa-envelope" aria-hidden="true"></i><Link to="mailto:info@example.com">info@example.com</Link></li>
              <li><i className="fa fa-phone" aria-hidden="true"></i>+(0123) 232 232</li>
            </ul>
            <div className="w3_agile_social_icons w3_agile_social_icons_contact">
              <ul>
                <li><Link to="#" className="icon icon-cube agile_facebook"></Link></li>
                <li><Link to="#" className="icon icon-cube agile_rss"></Link></li>
                <li><Link to="#" className="icon icon-cube agile_t"></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
