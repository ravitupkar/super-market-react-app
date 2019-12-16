import React, { Component } from 'react'
import CategoryList from '../../Resources/CategotyList';
import Categories from './Categories';


export default class Sidebar extends Component {
  render() {
    return (
      <>
        <div className="col-md-4 products-left">
          <div className="categories">
            <h2>Categories</h2>
            <Categories categories={CategoryList} />

          </div>
        </div>
      </>
    )
  }
}
