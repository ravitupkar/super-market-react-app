import React from 'react';




function CategotyList(props) {




return (
    <ul className="cate">
						<li><input type="checkbox" />Fruits And Vegetables</li>
							<ul>
								<li><input type="checkbox" />Cuts & Sprouts</li>
								<li><input type="checkbox" />Flowers</li>
								<li><input type="checkbox" />Fresh Herbs & Seasonings</li>
								<li><input type="checkbox" />Fresh Vegetables </li>
								<li><input type="checkbox" />International Vegetables </li>
								<li><input type="checkbox" />Organic Fruits & Vegetables</li>
							</ul>
						<li><input type="checkbox" />Grocery & Staples</li>
							<ul>
								<li><input type="checkbox" />Dals & Pulses </li>
								<li><input type="checkbox" />Dry Fruits </li>
								<li><input type="checkbox" />Edible Oils & Ghee </li>
								<li><input type="checkbox" />Flours & Sooji </li>
								<li><input type="checkbox" />Masalas & Spices </li>
								<li><input type="checkbox" />Organic Staples </li>
								<li><input type="checkbox" />Rice & Rice Products </li>
								<li><input type="checkbox" />Salt, Sugar & Jaggery</li>
							</ul>
						<li><input type="checkbox" />PersonalCare</li>
							<ul>
								<li><input type="checkbox" />Baby Care </li>
								<li><input type="checkbox" />Cosmetics </li>
								<li><input type="checkbox" />Deos & Perfumes </li>
								<li><input type="checkbox" />Skin Care </li>
								<li><input type="checkbox" />Sanitary Needs </li>
								<li><input type="checkbox" />Oral Care </li>
								<li><input type="checkbox" />Personal Hygiene </li>
								<li><input type="checkbox" />Shaving Needs</li>
							</ul>
					</ul>
);
}



export default CategotyList;