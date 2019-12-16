import React, {Component} from 'react';
import api from '../../Apis';
import ProductList from './ProductList';

  
export default class ProductContainer extends Component {
  constructor(props) {
      super(props);
      // console.log(props.slug);
      this.state = {
        slug : props.slug,
        subcatslug : props.subcatslug,
        products: [],
        payload : {}
      };
    }

    componentDidMount = async () => {
      if(this.state.slug){
        let payload = {slug : this.state.slug};
        this.setState({
            payload: payload
        });
        await api.getProductsByCategory(payload).then(result => {
          this.setState({
            products: result.data
          });
        })
      }else if(this.state.subcatslug){
        let payload = {slug : this.state.subcatslug};
        this.setState({
            payload: payload
        });
        await api.getProductsBySubCategory(payload).then(result => {
          this.setState({
            products: result.data
          });
        })
      }
      
    }
render() {
  let productsdata = this.state.products;
  // console.log(productsdata);
  return (
    <>
      <ProductList products={productsdata}/>
    </>
  )
}
}

