import React, { Component } from 'react';
import Quations from "./Quations";
import Breadcrumbs from '../../components/Breadcrumbs';

export default class Faq extends Component {
  
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
        <Breadcrumbs page="Faq" />
        <Quations quations={quations} />
      </div>
    );
  }
}
