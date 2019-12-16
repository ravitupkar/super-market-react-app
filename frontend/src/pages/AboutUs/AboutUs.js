import React, { Component } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs';
import OurTeam from './OurTeam';
import Testimonial from './Testimonial';

export default class AboutUs extends Component {
  render() {
    const Ourteams = [
      {"image" : "images/t4.jpg", "name" : "ANDERSON", "designation" : "Manager", "info" : "Odio dignissimos vero eos voluptatem accusantium doloremque laudantium reader will be distracted.","facebook" : "", "twitter" : "", "google" : ""},
      {"image" : "images/t3.jpg", "name" : "ELIFS", "designation" : "Director", "info" : "Odio dignissimos vero eos voluptatem accusantium doloremque laudantium reader will be distracted.","facebook" : "", "twitter" : "", "google" : ""},
      {"image" : "images/t2.jpg", "name" : "JESSICA", "designation" : "Supervisior", "info" : "Odio dignissimos vero eos voluptatem accusantium doloremque laudantium reader will be distracted.","facebook" : "", "twitter" : "", "google" : ""},
      {"image" : "images/t1.jpg", "name" : "RACKHAM", "designation" : "Staff", "info" : "Odio dignissimos vero eos voluptatem accusantium doloremque laudantium reader will be distracted.","facebook" : "", "twitter" : "", "google" : ""},
  ] ;

  const testimonials = [
    {"title": "I AM VERY PLEASED", "desc": "Gnissimos voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.", "name": "Amet Doe", "designation": "Dolor Elit"},
    {"title": "I AM VERY PLEASED", "desc": "Gnissimos voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.", "name": "Amet Doe", "designation": "Dolor Elit"}
  ];
    return (
      <div>
        <Breadcrumbs page="About" />

        <div className="about">
          <div className="container">
            <h3 className="w3_agile_header">About Us</h3>
            <div className="about-agileinfo w3layouts">
              <div className="col-md-8 about-wthree-grids grid-top">
                <h4>Blanditiis praesentium deleniti atque corrupti quos </h4>
                <p className="top">Gnissimos voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi. atque corrupti quos dolores et quas molestias excepturi sint occaecat officia deserunt mollitia laborum et dolorum fuga</p>
                <p>Dignissimos at vero eos et accusamus et iusto odio ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecat officia deserunt mollitia laborum et dolorum fuga. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecat atque corrupti quos dolores et quas molestias excepturi sint occaecat officia deserunt mollitia laborum et dolorum </p>
                <div className="about-w3agilerow">
                  <div className="col-md-4 about-w3imgs">
                    <img src="images/p3.jpg" alt="" className="img-responsive zoom-img" />
                  </div>
                  <div className="col-md-4 about-w3imgs">
                    <img src="images/p4.jpg" alt="" className="img-responsive zoom-img" />
                  </div>
                  <div className="col-md-4 about-w3imgs">
                    <img src="images/p3.jpg" alt="" className="img-responsive zoom-img" />
                  </div>
                  <div className="clearfix"> </div>
                </div>
              </div>
              <div className="col-md-4 about-wthree-grids">
                <div className="offic-time">
                  <div className="time-top">
                    <h4>Praesentium :</h4>
                  </div>
                  <div className="time-bottom">
                    <h5>At vero eos </h5>
                    <h5>Accusamus et</h5>
                    <p>Dignissimos at vero eos et accusamus et iusto odio ducimus qui accusamus et. </p>
                  </div>
                </div>
                <div className="testi">
                  <h3 className="w3_agile_header">Testimonial</h3>

                  <div id="top" className="callbacks_container">
                    <Testimonial testimonials={testimonials} />
                  </div>
                </div>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
        </div>

        <OurTeam teams={Ourteams}/>  
      </div>
    );
  }
}
