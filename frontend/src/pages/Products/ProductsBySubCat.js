import React from 'react';
import {useParams} from "react-router-dom";
import Breadcrumbs from '../../components/Breadcrumbs';
import ProductContainer from './ProductContainer';
import Sidebar from './Sidebar';


export default function ProductsBySubCat(){
      let { slug , subcatslug } = useParams();
     
    return (
      <>
        <div>
          <Breadcrumbs page='Products' />
          <div className="products">
            <div className="container">
            <Sidebar />
              <div className="col-md-8 products-right">
              <div className="products-right-grid">
					<div className="products-right-grids">
						<div className="sorting">
							<select id="country" className="frm-field required sect">
								<option value="null">Default sorting</option>
								<option value="null">Sort by popularity</option> 
								<option value="null">Sort by average rating</option>					
								<option value="null">Sort by price</option>								
							</select>
						</div>
						<div className="sorting-left">
							<select id="country1" className="frm-field required sect">
								<option value="null">Item on page 9</option>
								<option value="null">Item on page 18</option> 
								<option value="null">Item on page 32</option>					
								<option value="null">All</option>								
							</select>
						</div>
						<div className="clearfix"> </div>
					</div>
				</div>
                {/* {slug} */}
                  <ProductContainer slug={slug}  subcatslug={subcatslug} />
              </div>
              <div className="clearfix"> </div>
            </div>
          </div> 
        </div>
      </>
    );
  }

