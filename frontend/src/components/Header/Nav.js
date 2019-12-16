// import React from 'react';
// import { Link } from "react-router-dom";


// function Sub(){

// }

// function Nav(props) {
//     var navbars = JSON.stringify(props.navbar);
//     console.log(navbars);

//     var navbars = [{"subcategory":[],"_id":"5df48e18de910049c8d5480b","category":"Gourmet","slug":"gourmet","createdAt":"2019-12-14T07:24:08.713Z","updatedAt":"2019-12-14T07:24:08.713Z","__v":0},
//     {"subcategory":[{"category":["5df48e30de910049c8d5480c"],"_id":"5df48f81de910049c8d54818","subcategory":"Dust Pans","slug":"dust-pans","createdAt":"2019-12-14T07:30:09.423Z","updatedAt":"2019-12-14T07:30:09.423Z","__v":0},{"category":["5df48e30de910049c8d5480c"],"_id":"5df48f90de910049c8d54819","subcategory":"Cookware","slug":"cookwares","createdAt":"2019-12-14T07:30:24.789Z","updatedAt":"2019-12-14T07:30:24.789Z","__v":0},{"category":["5df48e30de910049c8d5480c"],"_id":"5df48f9fde910049c8d5481a","subcategory":"Scrubbers","slug":"scrubbers","createdAt":"2019-12-14T07:30:39.477Z","updatedAt":"2019-12-14T07:30:39.477Z","__v":0},{"category":["5df48e30de910049c8d5480c"],"_id":"5df48faade910049c8d5481b","subcategory":"Dust Cloth","slug":"dust-cloth","createdAt":"2019-12-14T07:30:50.729Z","updatedAt":"2019-12-14T07:30:50.729Z","__v":0},{"category":["5df48e30de910049c8d5480c"],"_id":"5df48fb3de910049c8d5481c","subcategory":"Mops","slug":"mops","createdAt":"2019-12-14T07:30:59.434Z","updatedAt":"2019-12-14T07:30:59.434Z","__v":0}],"_id":"5df48e30de910049c8d5480c","category":"Household","slug":"household","createdAt":"2019-12-14T07:24:32.339Z","updatedAt":"2019-12-14T07:30:59.549Z","__v":5},{"subcategory":[{"category":["5df48e48de910049c8d5480d"],"_id":"5df48ed6de910049c8d54812","subcategory":"Dals & Pulses","slug":"dals-and-pulses","createdAt":"2019-12-14T07:27:18.689Z","updatedAt":"2019-12-14T07:27:18.689Z","__v":0},{"category":["5df48e48de910049c8d5480d"],"_id":"5df48f15de910049c8d54813","subcategory":"Almonds","slug":"almonds","createdAt":"2019-12-14T07:28:21.777Z","updatedAt":"2019-12-14T07:28:21.777Z","__v":0},{"category":["5df48e48de910049c8d5480d"],"_id":"5df48f23de910049c8d54814","subcategory":"Cashews","slug":"cashews","createdAt":"2019-12-14T07:28:35.389Z","updatedAt":"2019-12-14T07:28:35.389Z","__v":0},{"category":["5df48e48de910049c8d5480d"],"_id":"5df48f4ade910049c8d54815","subcategory":"Dry Fruit","slug":"dry-fruit","createdAt":"2019-12-14T07:29:14.150Z","updatedAt":"2019-12-14T07:29:14.150Z","__v":0},{"category":["5df48e48de910049c8d5480d"],"_id":"5df48f5ade910049c8d54816","subcategory":"Mukhwas","slug":"Mukhwas","createdAt":"2019-12-14T07:29:30.639Z","updatedAt":"2019-12-14T07:29:30.639Z","__v":0},{"category":["5df48e48de910049c8d5480d"],"_id":"5df48f67de910049c8d54817","subcategory":"Rice & Rice Products","slug":"rice-and-rice-products","createdAt":"2019-12-14T07:29:43.900Z","updatedAt":"2019-12-14T07:29:43.900Z","__v":0}],"_id":"5df48e48de910049c8d5480d","category":"Groceries","slug":"groceries","createdAt":"2019-12-14T07:24:56.220Z","updatedAt":"2019-12-14T07:29:44.006Z","__v":6},{"subcategory":[],"_id":"5df48e63de910049c8d5480f","category":"Personal Care","slug":"personal-care","createdAt":"2019-12-14T07:25:23.166Z","updatedAt":"2019-12-14T07:25:23.166Z","__v":0},{"subcategory":[],"_id":"5df48e71de910049c8d54810","category":"Packaged Foods","slug":"packaged-foods","createdAt":"2019-12-14T07:25:37.752Z","updatedAt":"2019-12-14T07:25:37.752Z","__v":0}];

//     var navbarli = navbars.map((nav, index) => 
//             <li key={index} className="dropdown">
// 									<Link to="#" className="dropdown-toggle" data-toggle="dropdown">{nav.category}<b className="caret"></b></Link>
// 									<ul className="dropdown-menu multi-column columns-3">
// 										<div className="row">
// 											<div className="multi-gd-img">
// 												<ul className="multi-column-dropdown">
// 													<h6>All Groceries</h6>
//                                                     {
//                                                         navbars.map((navsub, index) =>
//                                                     <li  key={index}><Link to={navsub.slug}>{navsub.subcategory}</Link></li>
//                                                         )
//                                                     }
// 													<li><Link to="/store">Dals & Pulses</Link></li>
// 													<li><Link to="/store">Almonds</Link></li>
// 													<li><Link to="/store">Cashews</Link></li>
// 													<li><Link to="/store">Dry Fruit</Link></li>
// 													<li><Link to="/store"> Mukhwas </Link></li>
// 													<li><Link to="/store">Rice & Rice Products</Link></li>
// 												</ul>
// 											</div>

// 										</div>
// 									</ul>
// 								</li>
//     ) 
//     return (
//         <>

//             {navbarli}
           
//         </>
//     );
// }

// export default Nav;