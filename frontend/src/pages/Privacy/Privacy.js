import React, { Component } from 'react';
import Policy from "./Policy";
import Breadcrumbs from '../../components/Breadcrumbs';

export default class Privacy extends Component {
  
  render() {
    const quations = [
      {"quation" : "Sed diam nonummy Ut semper nisl ut laoreet ultrices nibh euismod ?", "ans" : "Sed diam nonummy Ut semper nisl ut laoreet ultrices nibh euismod ?"},
      {"quation" : "Sed diam nonummy Ut semper nisl ut laoreet ultrices nibh euismod ?", "ans" : "Sed diam nonummy Ut semper nisl ut laoreet ultrices nibh euismod ?"},
      {"quation" : "Sed diam nonummy Ut semper nisl ut laoreet ultrices nibh euismod ?", "ans" : "Sed diam nonummy Ut semper nisl ut laoreet ultrices nibh euismod ?"},
      {"quation" : "Sed diam nonummy Ut semper nisl ut laoreet ultrices nibh euismod ?", "ans" : "Sed diam nonummy Ut semper nisl ut laoreet ultrices nibh euismod ?"},
      {"quation" : "Sed diam nonummy Ut semper nisl ut laoreet ultrices nibh euismod ?", "ans" : "Sed diam nonummy Ut semper nisl ut laoreet ultrices nibh euismod ?"},
      {"quation" : "Sed diam nonummy Ut semper nisl ut laoreet ultrices nibh euismod ?", "ans" : "Sed diam nonummy Ut semper nisl ut laoreet ultrices nibh euismod ?"}
    ];
    return (
      <div>
        <Breadcrumbs page="Privacy Policy" />
        <Policy quations={quations} />
      </div>
    );
  }
}
