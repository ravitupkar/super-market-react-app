import React, { Component } from 'react';
import api from '../../Apis';
import {Link, useParams} from "react-router-dom";
import Breadcrumbs from '../../components/Breadcrumbs';

export default function ProductDetails() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { slug } = useParams();    
    return (
      <DetailsProduct slug={slug}/>
    );
  }
  
 class DetailsProduct extends Component {

    constructor(props) {
        super(props);
        console.log(props.slug);
        this.state = {
          isAuthenticated: false,
          slug :props.slug,
          product: {}
        };
      }
    
      componentDidMount = async () => {			
            await api.getproduct(this.state.slug).then(result => {
              this.setState({
            product: result.data
              });
          console.log(this.state.product);
            })
          }

    render() {
        return (
            <div>
                <Breadcrumbs page="Product Details" />

                <div className="products">
                    <div className="container">
                        <div className="agileinfo_single">

                            <div className="col-md-4 agileinfo_single_left">
                                <img id="example" src={`/${this.state.product.imageUrl}`} alt=" " className="img-responsive" />
                            </div>
                            <div className="col-md-8 agileinfo_single_right">
                                <h2>{this.state.product.name}</h2>
                                <div className="rating1">
                                    <span className="starRating">
                                        <input id="rating5" type="radio" readOnly name="rating" value="5" />
                                        <label htmlFor="rating5">5</label>
                                        <input id="rating4" type="radio" readOnly name="rating" value="4" />
                                        <label htmlFor="rating4">4</label>
                                        <input id="rating3" type="radio" readOnly name="rating" value="3" defaultChecked="" />
                                        <label htmlFor="rating3">3</label>
                                        <input id="rating2" type="radio" readOnly name="rating" value="2" />
                                        <label htmlFor="rating2">2</label>
                                        <input id="rating1" type="radio" readOnly name="rating" value="1" />
                                        <label htmlFor="rating1">1</label>
                                    </span>
                                </div>
                                <div className="w3agile_description">
                                    <h4>Description :</h4>
                                    <p>{this.state.product.desceaption}</p>
                                </div>
                                <div className="snipcart-item block">
                                    <div className="snipcart-thumb agileinfo_single_right_snipcart">
                                        <h4 className="m-sing">₹{this.state.product.dPrice}<span>₹{this.state.product.oPrice}</span></h4>
                                    </div>
                                    <div className="snipcart-details agileinfo_single_right_details">
                                        <form action="#" method="post">
                                            <fieldset>
                                                <input type="hidden" name="cmd" value="_cart" />
                                                <input type="hidden" name="add" value="1" />
                                                <input type="hidden" name="business" value=" " />
                                                <input type="hidden" name="item_name" value={this.state.product.name} />
                                                <input type="hidden" name="amount" value={this.state.product.dPrice} />
                                                <input type="hidden" name="discount_amount" value="1.00" />
                                                <input type="hidden" name="currency_code" value="USD" />
                                                <input type="hidden" name="return" value=" " />
                                                <input type="hidden" name="cancel_return" value=" " />
                                                <input type="submit" name="submit" value="Add to cart" className="button" />
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                    </div>
                </div>
                <div className="newproducts-w3agile">
                    <div className="container">
                        <h3>New offers</h3>
                        <div className="agile_top_brands_grids">
                            <div className="col-md-3 top_brand_left-1">
                                <div className="hover14 column">
                                    <div className="agile_top_brand_left_grid">
                                        <div className="agile_top_brand_left_grid_pos">
                                            <img src="images/offer.png" alt=" " className="img-responsive" />
                                        </div>
                                        <div className="agile_top_brand_left_grid1">
                                            <figure>
                                                <div className="snipcart-item block">
                                                    <div className="snipcart-thumb">
                                                        <Link to="products.html"><img title=" " alt=" " src="images/14.png" /></Link>
                                                        <p>Fried-gram</p>
                                                        <div className="stars">
                                                            <i className="fa fa-star blue-star" aria-hidden="true"></i>
                                                            <i className="fa fa-star blue-star" aria-hidden="true"></i>
                                                            <i className="fa fa-star blue-star" aria-hidden="true"></i>
                                                            <i className="fa fa-star blue-star" aria-hidden="true"></i>
                                                            <i className="fa fa-star gray-star" aria-hidden="true"></i>
                                                        </div>
                                                        <h4>$35.99 <span>$55.00</span></h4>
                                                    </div>
                                                    <div className="snipcart-details top_brand_home_details">
                                                        <form action="#" method="post">
                                                            <fieldset>
                                                                <input type="hidden" name="cmd" value="_cart" />
                                                                <input type="hidden" name="add" value="1" />
                                                                <input type="hidden" name="business" value=" " />
                                                                <input type="hidden" name="item_name" value="Fortune Sunflower Oil" />
                                                                <input type="hidden" name="amount" value="35.99" />
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
                            <div className="col-md-3 top_brand_left-1">
                                <div className="hover14 column">
                                    <div className="agile_top_brand_left_grid">
                                        <div className="agile_top_brand_left_grid_pos">
                                            <img src="images/offer.png" alt=" " className="img-responsive" />
                                        </div>
                                        <div className="agile_top_brand_left_grid1">
                                            <figure>
                                                <div className="snipcart-item block">
                                                    <div className="snipcart-thumb">
                                                        <Link to="products.html"><img title=" " alt=" " src="images/15.png" /></Link>
                                                        <p>Navaratan-dal</p>
                                                        <div className="stars">
                                                            <i className="fa fa-star blue-star" aria-hidden="true"></i>
                                                            <i className="fa fa-star blue-star" aria-hidden="true"></i>
                                                            <i className="fa fa-star blue-star" aria-hidden="true"></i>
                                                            <i className="fa fa-star blue-star" aria-hidden="true"></i>
                                                            <i className="fa fa-star gray-star" aria-hidden="true"></i>
                                                        </div>
                                                        <h4>$30.99 <span>$45.00</span></h4>
                                                    </div>
                                                    <div className="snipcart-details top_brand_home_details">
                                                        <form action="#" method="post">
                                                            <fieldset>
                                                                <input type="hidden" name="cmd" value="_cart" />
                                                                <input type="hidden" name="add" value="1" />
                                                                <input type="hidden" name="business" value=" " />
                                                                <input type="hidden" name="item_name" value="basmati rise" />
                                                                <input type="hidden" name="amount" value="30.99" />
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
                            <div className="col-md-3 top_brand_left-1">
                                <div className="hover14 column">
                                    <div className="agile_top_brand_left_grid">
                                        <div className="agile_top_brand_left_grid_pos">
                                            <img src="images/offer.png" alt=" " className="img-responsive" />
                                        </div>
                                        <div className="agile_top_brand_left_grid_pos">
                                            <img src="images/offer.png" alt=" " className="img-responsive" />
                                        </div>
                                        <div className="agile_top_brand_left_grid1">
                                            <figure>
                                                <div className="snipcart-item block">
                                                    <div className="snipcart-thumb">
                                                        <Link to="products.html"><img src="images/16.png" alt=" " className="img-responsive" /></Link>
                                                        <p>White-peasmatar</p>
                                                        <div className="stars">
                                                            <i className="fa fa-star blue-star" aria-hidden="true"></i>
                                                            <i className="fa fa-star blue-star" aria-hidden="true"></i>
                                                            <i className="fa fa-star blue-star" aria-hidden="true"></i>
                                                            <i className="fa fa-star blue-star" aria-hidden="true"></i>
                                                            <i className="fa fa-star gray-star" aria-hidden="true"></i>
                                                        </div>
                                                        <h4>$80.99 <span>$105.00</span></h4>
                                                    </div>
                                                    <div className="snipcart-details top_brand_home_details">
                                                        <form action="#" method="post">
                                                            <fieldset>
                                                                <input type="hidden" name="cmd" value="_cart" />
                                                                <input type="hidden" name="add" value="1" />
                                                                <input type="hidden" name="business" value=" " />
                                                                <input type="hidden" name="item_name" value="Pepsi soft drink" />
                                                                <input type="hidden" name="amount" value="80.00" />
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
                            <div className="col-md-3 top_brand_left-1">
                                <div className="hover14 column">
                                    <div className="agile_top_brand_left_grid">
                                        <div className="agile_top_brand_left_grid_pos">
                                            <img src="images/offer.png" alt=" " className="img-responsive" />
                                        </div>
                                        <div className="agile_top_brand_left_grid1">
                                            <figure>
                                                <div className="snipcart-item block">
                                                    <div className="snipcart-thumb">
                                                        <Link to="products.html"><img title=" " alt=" " src="images/17.png" /></Link>
                                                        <p>Channa-dal</p>
                                                        <div className="stars">
                                                            <i className="fa fa-star blue-star" aria-hidden="true"></i>
                                                            <i className="fa fa-star blue-star" aria-hidden="true"></i>
                                                            <i className="fa fa-star blue-star" aria-hidden="true"></i>
                                                            <i className="fa fa-star blue-star" aria-hidden="true"></i>
                                                            <i className="fa fa-star gray-star" aria-hidden="true"></i>
                                                        </div>
                                                        <h4>$35.99 <span>$55.00</span></h4>
                                                    </div>
                                                    <div className="snipcart-details top_brand_home_details">
                                                        <form action="#" method="post">
                                                            <fieldset>
                                                                <input type="hidden" name="cmd" value="_cart" />
                                                                <input type="hidden" name="add" value="1" />
                                                                <input type="hidden" name="business" value=" " />
                                                                <input type="hidden" name="item_name" value="Fortune Sunflower Oil" />
                                                                <input type="hidden" name="amount" value="35.99" />
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
                            <div className="clearfix"> </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
