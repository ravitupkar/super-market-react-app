import React from 'react';
import { Link } from "react-router-dom";
import Navbar from './Navbar';


function AdminGreeting(props) {
	return <li><Link to="/admin/dashboard">Admin</Link></li>;
		
}
function UserGreeting(props) {
	return <ul>
		<li><Link to="/profile">Profile</Link></li>
		<li><Link to="/logout">Logout</Link></li>
		{localStorage.getItem('roll') == 'Admin' && <AdminGreeting />}
	</ul>;
}

function GuestGreeting(props) {
	return <ul>
		<li><Link to="/register"> Create Account </Link></li>
		<li><Link to="/login">Login</Link></li>
		<li><Link to="/contact">Help</Link></li>

	</ul>;
}

export default function Header() {
	return (
		<>


			<div>
				<div className="agileits_header">
					<div className="container">
						<div className="w3l_offers">
							<p>SALE UP TO 70% OFF. USE CODE "SALE70%" . <Link to="products">SHOP NOW</Link></p>
						</div>
						<div className="agile-login">
						{/* {localStorage.getItem('roll'} == 'Admin' ? <AdminGreeting /> : ''} */}
							{localStorage.getItem('isAuthenticated') ? <UserGreeting /> : <GuestGreeting />}

						</div>
						<div className="product_list_header">
							<a href="/cart"  className="w3view-cart" style={{"background": "transparent"}}><i className="fa fa-cart-arrow-down" aria-hidden="true">10</i></a>
						</div>
						<div className="clearfix"> </div>
					</div>
				</div>

				<div className="logo_products">
					<div className="container">
						<div className="w3ls_logo_products_left1">
							<ul className="phone_email">
								<li><i className="fa fa-phone" aria-hidden="true"></i>Order online or call us : (+0123) 234 567</li>

							</ul>
						</div>
						<div className="w3ls_logo_products_left">
							<h1><Link to="/">Super Market</Link></h1>
						</div>
						<div className="w3l_search">
							<form action="#" method="post">
								<input type="search" name="Search" placeholder="Search for a Product..." required="" />
								<button type="submit" className="btn btn-default search" aria-label="Left Align">
									<i className="fa fa-search" aria-hidden="true"> </i>
								</button>
								<div className="clearfix"></div>
							</form>
						</div>

						<div className="clearfix"> </div>
					</div>
				</div>
				<Navbar />


			</div>
		</>
	);
}



