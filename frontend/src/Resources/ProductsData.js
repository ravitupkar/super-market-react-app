

const  ProductsData = 
[ 
    {_id: "1", imageUrl:'images/bv2.png', name:'Frooti', DPrice: '$35.99', oPrice:'$55.00'},
    {_id: "2", imageUrl:'images/bv3.png', name:'Frooti', DPrice: '$35.99', oPrice:'$55.00'},
    {_id: "3", imageUrl:'images/bv4.png', name:'Frooti', DPrice: '$35.99', oPrice:'$55.00'},
    {_id: "4", imageUrl:'images/bv5.png', name:'Frooti', DPrice: '$35.99', oPrice:'$55.00'},
    {_id: "5", imageUrl:'images/bv6.png', name:'Frooti', DPrice: '$35.99', oPrice:'$55.00'},
    {_id: "6", imageUrl:'images/bv7.png', name:'Frooti', DPrice: '$35.99', oPrice:'$55.00'},
    {_id: "7", imageUrl:'images/bv8.png', name:'Frooti', DPrice: '$35.99', oPrice:'$55.00'},
    {_id: "8", imageUrl:'images/bv8.png', name:'Frooti', DPrice: '$35.99', oPrice:'$55.00'},
    {_id: "9", imageUrl:'images/bv9.png', name:'Frooti', DPrice: '$35.99', oPrice:'$55.00'}
];

export default  ProductsData;  



    
    //   render() {
    //     return (
    //       <>
    //        <div className="agile_top_brands_grids">
    //             <div className="col-md-4 top_brand_left">
    //               <div className="hover14 column">
    //                 <div className="agile_top_brand_left_grid">
    //                   <div className="agile_top_brand_left_grid_pos">
    //                     <img src="images/offer.png" alt=" " className="img-responsive" />
    //                   </div>
    //                   <div className="agile_top_brand_left_grid1">
    //                     <figure>
    //                       <div className="snipcart-item block">
    //                         <div className="snipcart-thumb">
    //                           <Link to="/details"><img title=" " alt=" " src="images/bv2.png"/></Link>		
    //                           <p>Frooti</p>
    //                           <h4>$35.99 <span>$55.00</span></h4>
    //                         </div>
    //                         <div className="snipcart-details top_brand_home_details">
    //                           <form action="#" method="post">
    //                             <fieldset>
    //                               <input type="hidden" name="cmd" value="_cart"/>
    //                               <input type="hidden" name="add" value="1" />
    //                               <input type="hidden" name="business" value=" "/>
    //                               <input type="hidden" name="item_name" value="Fortune Sunflower Oil" />
    //                               <input type="hidden" name="amount" value="35.99" />
    //                               <input type="hidden" name="discount_amount" value="1.00"/>
    //                               <input type="hidden" name="currency_code" value="USD"/>
    //                               <input type="hidden" name="return" value=" "/>
    //                               <input type="hidden" name="cancel_return" value=" "/>
    //                               <input type="submit" name="submit" value="Add to cart" className="button"/>
    //                             </fieldset>
    //                           </form>
    //                         </div>
    //                       </div>
    //                     </figure>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="col-md-4 top_brand_left">
    //               <div className="hover14 column">
    //                 <div className="agile_top_brand_left_grid">
    //                   <div className="agile_top_brand_left_grid_pos">
    //                     <img src="images/offer.png" alt=" " className="img-responsive" />
    //                   </div>
    //                   <div className="agile_top_brand_left_grid1">
    //                     <figure>
    //                       <div className="snipcart-item block">
    //                         <div className="snipcart-thumb">
    //                           <Link to="/details"><img title=" " alt=" " src="images/bv3.png"/></Link>		
    //                           <p>Tropicana</p>
    //                           <h4>$30.99 <span>$45.00</span></h4>
    //                         </div>
    //                         <div className="snipcart-details top_brand_home_details">
    //                           <form action="#" method="post">
    //                             <fieldset>
    //                               <input type="hidden" name="cmd" value="_cart" />
    //                               <input type="hidden" name="add" value="1" />
    //                               <input type="hidden" name="business" value=" " />
    //                               <input type="hidden" name="item_name" value="basmati rise"/>
    //                               <input type="hidden" name="amount" value="30.99"/>
    //                               <input type="hidden" name="discount_amount" value="1.00" />
    //                               <input type="hidden" name="currency_code" value="USD" />
    //                               <input type="hidden" name="return" value=" " />
    //                               <input type="hidden" name="cancel_return" value=" " />
    //                               <input type="submit" name="submit" value="Add to cart" className="button" />
    //                             </fieldset>
    //                           </form>
    //                         </div>
    //                       </div>
    //                     </figure>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="col-md-4 top_brand_left">
    //               <div className="hover14 column">
    //                 <div className="agile_top_brand_left_grid">
    //                   <div className="agile_top_brand_left_grid_pos">
    //                     <img src="images/offer.png" alt=" " className="img-responsive" />
    //                   </div>
    //                   <div className="agile_top_brand_left_grid_pos">
    //                     <img src="images/offer.png" alt=" " className="img-responsive" />
    //                   </div>
    //                   <div className="agile_top_brand_left_grid1">
    //                     <figure>
    //                       <div className="snipcart-item block">
    //                         <div className="snipcart-thumb">
    //                           <Link to="/details"><img src="images/bv4.png" alt=" " className="img-responsive" /></Link>
    //                           <p>Tropicana</p>
    //                           <h4>$80.99 <span>$105.00</span></h4>
    //                         </div>
    //                         <div className="snipcart-details top_brand_home_details">
    //                           <form action="#" method="post">
    //                             <fieldset>
    //                               <input type="hidden" name="cmd" value="_cart"/>
    //                               <input type="hidden" name="add" value="1"/>
    //                               <input type="hidden" name="business" value=" "/>
    //                               <input type="hidden" name="item_name" value="Pepsi soft drink"/>
    //                               <input type="hidden" name="amount" value="80.00"/>
    //                               <input type="hidden" name="discount_amount" value="1.00"/>
    //                               <input type="hidden" name="currency_code" value="USD"/>
    //                               <input type="hidden" name="return" value=" "/>
    //                               <input type="hidden" name="cancel_return" value=" "/>
    //                               <input type="submit" name="submit" value="Add to cart" className="button"/>
    //                             </fieldset>
    //                           </form>
    //                         </div>
    //                       </div>
    //                     </figure>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //               <div className="clearfix"> </div>
    //           </div>
    //           <div className="agile_top_brands_grids">
    //             <div className="col-md-4 top_brand_left">
    //               <div className="hover14 column">
    //                 <div className="agile_top_brand_left_grid">
    //                   <div className="agile_top_brand_left_grid_pos">
    //                     <img src="images/offer.png" alt=" " className="img-responsive" />
    //                   </div>
    //                   <div className="agile_top_brand_left_grid1">
    //                     <figure>
    //                       <div className="snipcart-item block">
    //                         <div className="snipcart-thumb">
    //                           <Link to="/details"><img title=" " alt=" " src="images/bv5.png" /></Link>		
    //                           <p>Coca Cola</p>
    //                           <h4>$35.99 <span>$55.00</span></h4>
    //                         </div>
    //                         <div className="snipcart-details top_brand_home_details">
    //                           <form action="#" method="post">
    //                             <fieldset>
    //                               <input type="hidden" name="cmd" value="_cart"/>
    //                               <input type="hidden" name="add" value="1"/>
    //                               <input type="hidden" name="business" value=" "/>
    //                               <input type="hidden" name="item_name" value="Fortune Sunflower Oil"/>
    //                               <input type="hidden" name="amount" value="35.99"/>
    //                               <input type="hidden" name="discount_amount" value="1.00"/>
    //                               <input type="hidden" name="currency_code" value="USD"/>
    //                               <input type="hidden" name="return" value=" "/>
    //                               <input type="hidden" name="cancel_return" value=" "/>
    //                               <input type="submit" name="submit" value="Add to cart" className="button"/>
    //                             </fieldset>
    //                           </form>
    //                         </div>
    //                       </div>
    //                     </figure>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="col-md-4 top_brand_left">
    //               <div className="hover14 column">
    //                 <div className="agile_top_brand_left_grid">
    //                   <div className="agile_top_brand_left_grid_pos">
    //                     <img src="images/offer.png" alt=" " className="img-responsive" />
    //                   </div>
    //                   <div className="agile_top_brand_left_grid1">
    //                     <figure>
    //                       <div className="snipcart-item block">
    //                         <div className="snipcart-thumb">
    //                           <Link to="/details"><img title=" " alt=" " src="images/bv6.png"/></Link>		
    //                           <p>Coca Cola</p>
    //                           <h4>$30.99 <span>$45.00</span></h4>
    //                         </div>
    //                         <div className="snipcart-details top_brand_home_details">
    //                           <form action="#" method="post">
    //                             <fieldset>
    //                               <input type="hidden" name="cmd" value="_cart"/>
    //                               <input type="hidden" name="add" value="1"/>
    //                               <input type="hidden" name="business" value=" "/>
    //                               <input type="hidden" name="item_name" value="basmati rise"/>
    //                               <input type="hidden" name="amount" value="30.99"/>
    //                               <input type="hidden" name="discount_amount" value="1.00"/>
    //                               <input type="hidden" name="currency_code" value="USD"/>
    //                               <input type="hidden" name="return" value=" "/>
    //                               <input type="hidden" name="cancel_return" value=" "/>
    //                               <input type="submit" name="submit" value="Add to cart" className="button"/>
    //                             </fieldset>
    //                           </form>
    //                         </div>
    //                       </div>
    //                     </figure>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="col-md-4 top_brand_left">
    //               <div className="hover14 column">
    //                 <div className="agile_top_brand_left_grid">
    //                   <div className="agile_top_brand_left_grid_pos">
    //                     <img src="images/offer.png" alt=" " className="img-responsive" />
    //                   </div>
    //                   <div className="agile_top_brand_left_grid_pos">
    //                     <img src="images/offer.png" alt=" " className="img-responsive" />
    //                   </div>
    //                   <div className="agile_top_brand_left_grid1">
    //                     <figure>
    //                       <div className="snipcart-item block">
    //                         <div className="snipcart-thumb">
    //                           <Link to="/details"><img src="images/bv7.png" alt=" " className="img-responsive" /></Link>
    //                           <p>Appy</p>
    //                           <h4>$80.99 <span>$105.00</span></h4>
    //                         </div>
    //                         <div className="snipcart-details top_brand_home_details">
    //                           <form action="#" method="post">
    //                             <fieldset>
    //                               <input type="hidden" name="cmd" value="_cart"/>
    //                               <input type="hidden" name="add" value="1"/>
    //                               <input type="hidden" name="business" value=" "/>
    //                               <input type="hidden" name="item_name" value="Pepsi soft drink"/>
    //                               <input type="hidden" name="amount" value="80.00"/>
    //                               <input type="hidden" name="discount_amount" value="1.00"/>
    //                               <input type="hidden" name="currency_code" value="USD"/>
    //                               <input type="hidden" name="return" value=" "/>
    //                               <input type="hidden" name="cancel_return" value=" "/>
    //                               <input type="submit" name="submit" value="Add to cart" className="button"/>
    //                             </fieldset>
    //                           </form>
    //                         </div>
    //                       </div>
    //                     </figure>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //               <div className="clearfix"> </div>
    //           </div>
    //           <div className="agile_top_brands_grids">
    //             <div className="col-md-4 top_brand_left">
    //               <div className="hover14 column">
    //                 <div className="agile_top_brand_left_grid">
    //                   <div className="agile_top_brand_left_grid_pos">
    //                     <img src="images/offer.png" alt=" " className="img-responsive" />
    //                   </div>
    //                   <div className="agile_top_brand_left_grid1">
    //                     <figure>
    //                       <div className="snipcart-item block">
    //                         <div className="snipcart-thumb">
    //                           <Link to="/details"><img title=" " alt=" " src="images/bv8.png"/></Link>		
    //                           <p>Real</p>
    //                           <h4>$35.99 <span>$55.00</span></h4>
    //                         </div>
    //                         <div className="snipcart-details top_brand_home_details">
    //                           <form action="#" method="post">
    //                             <fieldset>
    //                               <input type="hidden" name="cmd" value="_cart"/>
    //                               <input type="hidden" name="add" value="1"/>
    //                               <input type="hidden" name="business" value=" "/>
    //                               <input type="hidden" name="item_name" value="Fortune Sunflower Oil"/>
    //                               <input type="hidden" name="amount" value="35.99"/>
    //                               <input type="hidden" name="discount_amount" value="1.00"/>
    //                               <input type="hidden" name="currency_code" value="USD"/>
    //                               <input type="hidden" name="return" value=" "/>
    //                               <input type="hidden" name="cancel_return" value=" "/>
    //                               <input type="submit" name="submit" value="Add to cart" className="button"/>
    //                             </fieldset>
    //                           </form>
    //                         </div>
    //                       </div>
    //                     </figure>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="col-md-4 top_brand_left">
    //               <div className="hover14 column">
    //                 <div className="agile_top_brand_left_grid">
    //                   <div className="agile_top_brand_left_grid_pos">
    //                     <img src="images/offer.png" alt=" " className="img-responsive" />
    //                   </div>
    //                   <div className="agile_top_brand_left_grid1">
    //                     <figure>
    //                       <div className="snipcart-item block">
    //                         <div className="snipcart-thumb">
    //                           <Link to="/details"><img title=" " alt=" " src="images/bv9.png"/></Link>		
    //                           <p>Red Bull</p>
    //                           <h4>$30.99 <span>$45.00</span></h4>
    //                         </div>
    //                         <div className="snipcart-details top_brand_home_details">
    //                           <form action="#" method="post">
    //                             <fieldset>
    //                               <input type="hidden" name="cmd" value="_cart"/>
    //                               <input type="hidden" name="add" value="1"/>
    //                               <input type="hidden" name="business" value=" "/>
    //                               <input type="hidden" name="item_name" value="basmati rise"/>
    //                               <input type="hidden" name="amount" value="30.99"/>
    //                               <input type="hidden" name="discount_amount" value="1.00"/>
    //                               <input type="hidden" name="currency_code" value="USD"/>
    //                               <input type="hidden" name="return" value=" "/>
    //                               <input type="hidden" name="cancel_return" value=" "/>
    //                               <input type="submit" name="submit" value="Add to cart" className="button"/>
    //                             </fieldset>
    //                           </form>
    //                         </div>
    //                       </div>
    //                     </figure>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="col-md-4 top_brand_left">
    //               <div className="hover14 column">
    //                 <div className="agile_top_brand_left_grid">
    //                   <div className="agile_top_brand_left_grid_pos">
    //                     <img src="images/offer.png" alt=" " className="img-responsive" />
    //                   </div>
    //                   <div className="agile_top_brand_left_grid_pos">
    //                     <img src="images/offer.png" alt=" " className="img-responsive" />
    //                   </div>
    //                   <div className="agile_top_brand_left_grid1">
    //                     <figure>
    //                       <div className="snipcart-item block">
    //                         <div className="snipcart-thumb">
    //                           <Link to="/details"><img src="images/bv1.png" alt=" " className="img-responsive" /></Link>
    //                           <p>Minute Maid</p>
    //                           <h4>$80.99 <span>$105.00</span></h4>
    //                         </div>
    //                         <div className="snipcart-details top_brand_home_details">
    //                           <form action="#" method="post">
    //                             <fieldset>
    //                               <input type="hidden" name="cmd" value="_cart"/>
    //                               <input type="hidden" name="add" value="1"/>
    //                               <input type="hidden" name="business" value=" "/>
    //                               <input type="hidden" name="item_name" value="Pepsi soft drink"/>
    //                               <input type="hidden" name="amount" value="80.00"/>
    //                               <input type="hidden" name="discount_amount" value="1.00"/>
    //                               <input type="hidden" name="currency_code" value="USD"/>
    //                               <input type="hidden" name="return" value=" "/>
    //                               <input type="hidden" name="cancel_return" value=" "/>
    //                               <input type="submit" name="submit" value="Add to cart" className="button"/>
    //                             </fieldset>
    //                           </form>
    //                         </div>
    //                       </div>
    //                     </figure>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //               <div className="clearfix"> </div>
    //           </div>
    
    //           <nav className="numbering">
    //             <ul className="pagination paging">
    //               <li>
    //                 <Link to="#" aria-label="Previous">
    //                   <span aria-hidden="true">&laquo;</span>
    //                 </Link>
    //               </li>
    //               <li className="active"><Link to="#">1<span className="sr-only">(current)</span></Link></li>
    //               <li><Link to="#">2</Link></li>
    //               <li><Link to="#">3</Link></li>
    //               <li><Link to="#">4</Link></li>
    //               <li><Link to="#">5</Link></li>
    //               <li>
    //                 <Link to="#" aria-label="Next">
    //                 <span aria-hidden="true">&raquo;</span>
    //                 </Link>
    //               </li>
    //             </ul>
    //           </nav>
    //       </>
    //     )
    //   }
    // }           