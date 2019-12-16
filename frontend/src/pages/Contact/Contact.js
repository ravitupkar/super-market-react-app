import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactMap from './ContactMap';
import Breadcrumbs from '../../components/Breadcrumbs';

export default class Contact extends Component {



  render() {
    return (
      <div>
        <Breadcrumbs page="Contact" />
        <div className="about">
          <div className="w3_agileits_contact_grids">
            <ContactMap/>
            <ContactForm />

            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
    );
  }
}
