import React, { Component } from 'react';
import Conditions from "./Conditions";
import Breadcrumbs from '../../components/Breadcrumbs';

export default class Terms extends Component {
  
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
        <Breadcrumbs page="Terms And Condition" />
        <Conditions quations={quations} />
      </div>
    );
  }
}
