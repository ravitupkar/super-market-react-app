import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
import Breadcrumbs from '../../components/Breadcrumbs';

export default class Checkout extends Component {
    render() {
        return (
            <div>
                <Breadcrumbs page="Checkout" />
                <div className="checkout">
                    <div className="container">
                        <h2>Your shopping cart contains: <span>3 Products</span></h2>
                        <div className="checkout-right">
                            <table className="timetable_sub">
                                <thead>
                                    <tr>
                                        <th>SL No.</th>
                                        <th>Product</th>
                                        <th>Quality</th>
                                        <th>Product Name</th>

                                        <th>Price</th>
                                        <th>Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr className="rem1">
                                    <td className="invert">1</td>
                                    <td className="invert-image"><Link to="single.html"><img src="images/1.png" alt=" " className="img-responsive" /></Link></td>
                                    <td className="invert">
                                        <div className="quantity">
                                            <div className="quantity-select">
                                                <div className="entry value-minus">&nbsp;</div>
                                                <div className="entry value"><span>1</span></div>
                                                <div className="entry value-plus active">&nbsp;</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="invert">Tata Salt</td>

                                    <td className="invert">$290.00</td>
                                    <td className="invert">
                                        <div className="rem">
                                            <div className="close1"> </div>
                                        </div>

                                    </td>
                                </tr>
                                <tr className="rem2">
                                    <td className="invert">2</td>
                                    <td className="invert-image"><Link to="single.html"><img src="images/2.png" alt=" " className="img-responsive" /></Link></td>
                                    <td className="invert">
                                        <div className="quantity">
                                            <div className="quantity-select">
                                                <div className="entry value-minus">&nbsp;</div>
                                                <div className="entry value"><span>1</span></div>
                                                <div className="entry value-plus active">&nbsp;</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="invert">Fortune oil</td>

                                    <td className="invert">$250.00</td>
                                    <td className="invert">
                                        <div className="rem">
                                            <div className="close2"> </div>
                                        </div>

                                    </td>
                                </tr>
                                <tr className="rem3">
                                    <td className="invert">3</td>
                                    <td className="invert-image"><Link to="single.html"><img src="images/3.png" alt=" " className="img-responsive" /></Link></td>
                                    <td className="invert">
                                        <div className="quantity">
                                            <div className="quantity-select">
                                                <div className="entry value-minus">&nbsp;</div>
                                                <div className="entry value"><span>1</span></div>
                                                <div className="entry value-plus active">&nbsp;</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="invert">Aashirvaad atta</td>

                                    <td className="invert">$15.00</td>
                                    <td className="invert">
                                        <div className="rem">
                                            <div className="close3"> </div>
                                        </div>

                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="checkout-left">
                            <div className="checkout-left-basket">
                                <h4>Continue to basket</h4>
                                <ul>
                                    <li>Product1 <i>-</i> <span>$15.00 </span></li>
                                    <li>Product2 <i>-</i> <span>$25.00 </span></li>
                                    <li>Product3 <i>-</i> <span>$29.00 </span></li>
                                    <li>Total Service Charges <i>-</i> <span>$15.00</span></li>
                                    <li>Total <i>-</i> <span>$84.00</span></li>
                                </ul>
                            </div>
                            <div className="checkout-right-basket">
                                <Link to="single.html"><span className="glyphicon glyphicon-menu-left" aria-hidden="true"></span>Continue Shopping</Link>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                    </div>
                </div> </div>
        );
    }
}
