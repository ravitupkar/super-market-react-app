import React, { Component } from 'react';
import api from '../../Apis';
import ProductFilter from './ProductFilter';
import Sidebar from './Sidebar';
import Products from './Products';
// import ProductsData from '../../Resources/ProductsData';
import Breadcrumbs from '../../components/Breadcrumbs';

export default class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      products: []
    };
  }

  componentDidMount = async () => {			
		await api.getproducts().then(result => {
		  this.setState({
        products: result.data
		  });
      console.log(this.state.products);
		})
	  }


  render() {
    return (
      <div>
        <Breadcrumbs page='Store' />
        <div className="products">
          <div className="container">
            <Sidebar />
            <div className="col-md-8 products-right">
              <ProductFilter />

              <Products products={this.state.products} />
            </div>
            <div className="clearfix"> </div>
          </div>
        </div> </div>
    );
  }
}
