import React, {Component} from 'react';
import {useParams} from "react-router-dom";
import api from '../../Apis';
import Breadcrumbs from '../../components/Breadcrumbs';
  
export default function Products(){
      let { slug } = useParams();
     
    return (
      <>
        <div>
          <Breadcrumbs page='Store' />
          <div className="products">
            <div className="container">
              <div className="col-md-8 products-right">
                {/* {slug} */}
                  <ProductContainer slug={slug}/>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div> 
        </div>
      </>
    );
  }



class ProductContainer extends Component {
  constructor(props) {
      super(props);
      console.log(props.slug);
      this.state = {
        slug : props.slug,
        products: [],
        payload : {}
      };
    }

    componentDidMount = async () => {
      let payload = {slug : this.state.slug};
     
      this.setState({
          payload: payload
      });

      await api.getProductsByCategory(payload).then(result => {
        this.setState({
          products: result.data
        });
      })
    }
render() {
  let productsdata = this.state.products
  return (
    <>
      <ProductList products={productsdata}/>
    </>
  )
}
}


function ProductList(props) {
  const products = props.products;
  // console.log(products);
  const listproduct = products.map((product, index) =>
    <div key={index} className="col-md-4 top_brand_left" style={{ "marginBottom": "10px" }}>
      <div className="hover14 column">
        <div className="agile_top_brand_left_grid">
          <div className="agile_top_brand_left_grid_pos">
            <img src="images/offer.png" alt=" " className="img-responsive" />
          </div>
          <div className="agile_top_brand_left_grid1">
            <figure>
              <div className="snipcart-item block">
                <div className="snipcart-thumb">
                  {/* <DetailsProduct _id={product._id} imageUrl={product.imageUrl}/> */}
                  <p>{product.name}</p>
                  <h4>₹{product.dPrice} <span>₹{product.oPrice}</span></h4>
                </div>
                <div className="snipcart-details top_brand_home_details">
                  <form action="#" method="post">
                    <fieldset>
                      <input type="hidden" name="cmd" value="_cart" />
                      <input type="hidden" name="add" value="1" />
                      <input type="hidden" name="business" value=" " />
                      <input type="hidden" name="item_name" value={product.name} />
                      <input type="hidden" name="amount" value={product.DPrice} />
                      <input type="hidden" name="discount_amount" value="1.00" />
                      <input type="hidden" name="currency_code" value="USD" />
                      <input type="hidden" name="return" value=" " />
                      <input type="hidden" name="cancel_return" value=" " />
                      <input type="submit" name="submit" value="Add to cart" className="button" />
                    </fieldset>
                  </form>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div className="agile_top_brands_grids">
      {listproduct}
    </div>
  );
}