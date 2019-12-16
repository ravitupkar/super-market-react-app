import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
import Breadcrumbs from '../../components/Breadcrumbs';

export default class Offers extends Component {
    render() {
        return (
            <div>
                <Breadcrumbs page="Offers" />
                <div className="top-brands">
                    <div className="container">
                        <h2>Top selling offers</h2>
                        <div className="grid_3 grid_5">
                            <div className="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
                                <ul id="myTab" className="nav nav-tabs" role="tablist">
                                    <li role="presentation" className="active"><Link to="#expeditions" id="expeditions-tab" role="tab" data-toggle="tab" aria-controls="expeditions" aria-expanded="true">All Products</Link></li>
                                    <li role="presentation"><Link to="#tours" role="tab" id="tours-tab" data-toggle="tab" aria-controls="tours">Daily Offers</Link></li>
                                </ul>
                                <div id="myTabContent" className="tab-content">
                                    <div role="tabpanel" className="tab-pane fade in active" id="expeditions" aria-labelledby="expeditions-tab">
                                        <div className="agile-tp">
                                            <h5>All Products</h5>
                                            <p className="w3l-ad">We've pulled together all our advertised offers into one place, so you won't miss out on a great deal.</p>
                                        </div>
                                        <div className="agile_top_brands_grids">
                                            <div className="col-md-4 top_brand_left">
                                                <div className="hover14 column">
                                                    <div className="agile_top_brand_left_grid">
                                                        <div className="agile_top_brand_left_grid_pos">
                                                            <img src="images/offer.png" alt=" " className="img-responsive" />
                                                        </div>
                                                        <div className="agile_top_brand_left_grid1">
                                                            <figure>
                                                                <div className="snipcart-item block" >
                                                                    <div className="snipcart-thumb">
                                                                        <Link to="/details"><img title=" " alt=" " src="images/1.png" /></Link>
                                                                        <p>Tata-salt</p>
                                                                        <div className="stars">
                                                                            <i className="fa fa-star blue-star" aria-hidden="true"></i>
                                                                            <i className="fa fa-star blue-star" aria-hidden="true"></i>
                                                                            <i className="fa fa-star blue-star" aria-hidden="true"></i>
                                                                            <i className="fa fa-star blue-star" aria-hidden="true"></i>
                                                                            <i className="fa fa-star gray-star" aria-hidden="true"></i>
                                                                        </div>
                                                                        <h4>$20.99 <span>$35.00</span></h4>
                                                                    </div>
                                                                    <div className="snipcart-details top_brand_home_details">
                                                                        <form action="#" method="post">
                                                                            <fieldset>
                                                                                <input type="hidden" name="cmd" value="_cart" />
                                                                                <input type="hidden" name="add" value="1" />
                                                                                <input type="hidden" name="business" value=" " />
                                                                                <input type="hidden" name="item_name" value="Fortune Sunflower Oil" />
                                                                                <input type="hidden" name="amount" value="20.99" />
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
                                            <div className="col-md-4 top_brand_left">
                                                <div className="hover14 column">
                                                    <div className="agile_top_brand_left_grid">
                                                        <div className="agile_top_brand_left_grid_pos">
                                                            <img src="images/offer.png" alt=" " className="img-responsive" />
                                                        </div>
                                                        <div className="agile_top_brand_left_grid1">
                                                            <figure>
                                                                <div className="snipcart-item block" >
                                                                    <div className="snipcart-thumb">
                                                                        <Link to="/details"><img title=" " alt=" " src="images/2.png" /></Link>
                                                                        <p>Fortune-sunflower</p>
                                                                        <div className="stars">
                                                                            <i className="fa fa-star blue-star" aria-hidden="true"></i>
                                                                            <i className="fa fa-star blue-star" aria-hidden="true"></i>
                                                                            <i className="fa fa-star blue-star" aria-hidden="true"></i>
                                                                            <i className="fa fa-star blue-star" aria-hidden="true"></i>
                                                                            <i className="fa fa-star gray-star" aria-hidden="true"></i>
                                                                        </div>
                                                                        <h4>$20.99 <span>$35.00</span></h4>
                                                                    </div>
                                                                    <div className="snipcart-details top_brand_home_details">
                                                                        <form action="#" method="post">
                                                                            <fieldset>
                                                                                <input type="hidden" name="cmd" value="_cart" />
                                                                                <input type="hidden" name="add" value="1" />
                                                                                <input type="hidden" name="business" value=" " />
                                                                                <input type="hidden" name="item_name" value="basmati rise" />
                                                                                <input type="hidden" name="amount" value="20.99" />
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
                                            <div className="col-md-4 top_brand_left">
                                                <div className="hover14 column">
                                                    <div className="agile_top_brand_left_grid">
                                                        <div className="agile_top_brand_left_grid_pos">
                                                            <img src="images/offer.png" alt=" " className="img-responsive" />
                                                        </div>
                                                        <div className="agile_top_brand_left_grid1">
                                                            <figure>
                                                                <div className="snipcart-item block">
                                                                    <div className="snipcart-thumb">
                                                                        <Link to="/details"><img src="images/3.png" alt=" " className="img-responsive" /></Link>
                                                                        <p>Aashirvaad-atta</p>
                                                                        <div className="stars">
                                                                            <i className="fa fa-star blue-star" aria-hidden="true"></i>
                                                                            <i className="fa fa-star blue-star" aria-hidden="true"></i>
                                                                            <i className="fa fa-star blue-star" aria-hidden="true"></i>
                                                                            <i className="fa fa-star blue-star" aria-hidden="true"></i>
                                                                            <i className="fa fa-star gray-star" aria-hidden="true"></i>
                                                                        </div>
                                                                        <h4>$40.99 <span>$65.00</span></h4>
                                                                    </div>
                                                                    <div className="snipcart-details top_brand_home_details">
                                                                        <form action="#" method="post">
                                                                            <fieldset>
                                                                                <input type="hidden" name="cmd" value="_cart" />
                                                                                <input type="hidden" name="add" value="1" />
                                                                                <input type="hidden" name="business" value=" " />
                                                                                <input type="hidden" name="item_name" value="Pepsi soft drink" />
                                                                                <input type="hidden" name="amount" value="40.00" />
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
                                        <div className="agile_top_brands_grids">
                                            <div className="col-md-4 top_brand_left">
                                                <div className="hover14 column">
                                                    <div className="agile_top_brand_left_grid">
                                                        <div className="agile_top_brand_left_grid_pos">
                                                            <img src="images/offer.png" alt=" " className="img-responsive" />
                                                        </div>
                                                        <div className="agile_top_brand_left_grid1">
                                                            <figure>
                                                                <div className="snipcart-item block" >
                                                                    <div className="snipcart-thumb">
                                                                        <Link to="/details"><img title=" " alt=" " src="images/4.png" /></Link>
                                                                        <p>Sampann-toor-dal</p>
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
                                            <div className="col-md-4 top_brand_left">
                                                <div className="hover14 column">
                                                    <div className="agile_top_brand_left_grid">
                                                        <div className="agile_top_brand_left_grid_pos">
                                                            <img src="images/offer.png" alt=" " className="img-responsive" />
                                                        </div>
                                                        <div className="agile_top_brand_left_grid1">
                                                            <figure>
                                                                <div className="snipcart-item block" >
                                                                    <div className="snipcart-thumb">
                                                                        <Link to="/details"><img title=" " alt=" " src="images/5.png" /></Link>
                                                                        <p>Parryss-sugar</p>
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
                                            <div className="col-md-4 top_brand_left">
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
                                                                        <Link to="/details"><img src="images/6.png" alt=" " className="img-responsive" /></Link>
                                                                        <p>Saffola-gold</p>
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
                                            <div className="clearfix"> </div>
                                        </div>
                                    </div>
                                    <div role="tabpanel" className="tab-pane fade" id="tours" aria-labelledby="tours-tab">
                                        <div className="agile-tp">
                                            <h5>Daily Offers</h5>
                                            <p className="w3l-ad">We've pulled together all our advertised offers into one place, so you won't miss out on a great deal.</p>
                                        </div>
                                        <div className="agile_top_brands_grids">
                                            <div className="col-md-4 top_brand_left">
                                                <div className="hover14 column">
                                                    <div className="agile_top_brand_left_grid">
                                                        <div className="agile_top_brand_left_grid_pos">
                                                            <img src="images/offer.png" alt=" " className="img-responsive" />
                                                        </div>
                                                        <div className="agile_top_brand_left_grid1">
                                                            <figure>
                                                                <div className="snipcart-item block" >
                                                                    <div className="snipcart-thumb">
                                                                        <Link to="/details"><img title=" " alt=" " src="images/7.png" /></Link>
                                                                        <p>Sona-masoori-rice</p>
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
                                                                                <input type="hidden" name="amount" value="7.99" />
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
                                            <div className="col-md-4 top_brand_left">
                                                <div className="hover14 column">
                                                    <div className="agile_top_brand_left_grid">
                                                        <div className="agile_top_brand_left_grid_pos">
                                                            <img src="images/offer.png" alt=" " className="img-responsive" />
                                                        </div>
                                                        <div className="agile_top_brand_left_grid1">
                                                            <figure>
                                                                <div className="snipcart-item block" >
                                                                    <div className="snipcart-thumb">
                                                                        <Link to="/details"><img title=" " alt=" " src="images/8.png" /></Link>
                                                                        <p>Milky-mist-paneer</p>
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
                                                                                <input type="hidden" name="amount" value="11.99" />
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
                                            <div className="col-md-4 top_brand_left">
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
                                                                        <Link to="/details"><img src="images/9.png" alt=" " className="img-responsive" /></Link>
                                                                        <p>Basmati-Rice</p>
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
                                                                                <input type="hidden" name="amount" value="8.00" />
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
                                        <div className="agile_top_brands_grids">
                                            <div className="col-md-4 top_brand_left">
                                                <div className="hover14 column">
                                                    <div className="agile_top_brand_left_grid">
                                                        <div className="agile_top_brand_left_grid_pos">
                                                            <img src="images/offer.png" alt=" " className="img-responsive" />
                                                        </div>
                                                        <div className="agile_top_brand_left_grid1">
                                                            <figure>
                                                                <div className="snipcart-item block" >
                                                                    <div className="snipcart-thumb">
                                                                        <Link to="/details"><img title=" " alt=" " src="images/10.png" /></Link>
                                                                        <p>Fortune-sunflower</p>
                                                                        <div className="stars">
                                                                            <i className="fa fa-star blue-star" aria-hidden="true"></i>
                                                                            <i className="fa fa-star blue-star" aria-hidden="true"></i>
                                                                            <i className="fa fa-star blue-star" aria-hidden="true"></i>
                                                                            <i className="fa fa-star blue-star" aria-hidden="true"></i>
                                                                            <i className="fa fa-star gray-star" aria-hidden="true"></i>
                                                                        </div>
                                                                        <h4>$20.99 <span>$35.00</span></h4>
                                                                    </div>
                                                                    <div className="snipcart-details top_brand_home_details">
                                                                        <form action="#" method="post">
                                                                            <fieldset>
                                                                                <input type="hidden" name="cmd" value="_cart" />
                                                                                <input type="hidden" name="add" value="1" />
                                                                                <input type="hidden" name="business" value=" " />
                                                                                <input type="hidden" name="item_name" value="Fortune Sunflower Oil" />
                                                                                <input type="hidden" name="amount" value="7.99" />
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
                                            <div className="col-md-4 top_brand_left">
                                                <div className="hover14 column">
                                                    <div className="agile_top_brand_left_grid">
                                                        <div className="agile_top_brand_left_grid_pos">
                                                            <img src="images/offer.png" alt=" " className="img-responsive" />
                                                        </div>
                                                        <div className="agile_top_brand_left_grid1">
                                                            <figure>
                                                                <div className="snipcart-item block" >
                                                                    <div className="snipcart-thumb">
                                                                        <Link to="/details"><img title=" " alt=" " src="images/12.png" /></Link>
                                                                        <p>Nestle-a-slim</p>
                                                                        <div className="stars">
                                                                            <i className="fa fa-star blue-star" aria-hidden="true"></i>
                                                                            <i className="fa fa-star blue-star" aria-hidden="true"></i>
                                                                            <i className="fa fa-star blue-star" aria-hidden="true"></i>
                                                                            <i className="fa fa-star blue-star" aria-hidden="true"></i>
                                                                            <i className="fa fa-star gray-star" aria-hidden="true"></i>
                                                                        </div>
                                                                        <h4>$20.99 <span>$35.00</span></h4>
                                                                    </div>
                                                                    <div className="snipcart-details top_brand_home_details">
                                                                        <form action="#" method="post">
                                                                            <fieldset>
                                                                                <input type="hidden" name="cmd" value="_cart" />
                                                                                <input type="hidden" name="add" value="1" />
                                                                                <input type="hidden" name="business" value=" " />
                                                                                <input type="hidden" name="item_name" value="basmati rise" />
                                                                                <input type="hidden" name="amount" value="11.99" />
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
                                            <div className="col-md-4 top_brand_left">
                                                <div className="hover14 column">
                                                    <div className="agile_top_brand_left_grid">
                                                        <div className="agile_top_brand_left_grid_pos">
                                                            <img src="images/offer.png" alt=" " className="img-responsive" />
                                                        </div>
                                                        <div className="agile_top_brand_left_grid1">
                                                            <figure>
                                                                <div className="snipcart-item block">
                                                                    <div className="snipcart-thumb">
                                                                        <Link to="/details"><img src="images/13.png" alt=" " className="img-responsive" /></Link>
                                                                        <p>Bread-sandwich</p>
                                                                        <div className="stars">
                                                                            <i className="fa fa-star blue-star" aria-hidden="true"></i>
                                                                            <i className="fa fa-star blue-star" aria-hidden="true"></i>
                                                                            <i className="fa fa-star blue-star" aria-hidden="true"></i>
                                                                            <i className="fa fa-star blue-star" aria-hidden="true"></i>
                                                                            <i className="fa fa-star gray-star" aria-hidden="true"></i>
                                                                        </div>
                                                                        <h4>$40.99 <span>$65.00</span></h4>
                                                                    </div>
                                                                    <div className="snipcart-details top_brand_home_details">
                                                                        <form action="#" method="post">
                                                                            <fieldset>
                                                                                <input type="hidden" name="cmd" value="_cart" />
                                                                                <input type="hidden" name="add" value="1" />
                                                                                <input type="hidden" name="business" value=" " />
                                                                                <input type="hidden" name="item_name" value="Pepsi soft drink" />
                                                                                <input type="hidden" name="amount" value="8.00" />
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
                        </div>
                    </div>
                </div> </div>
        );
    }
}
