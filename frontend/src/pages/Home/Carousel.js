import React, { Component } from 'react'

export default class Carousel extends Component {
	render() {
		return (
			<>
				<ul id="demo1">
					<li>
						<img src="images/11.jpg" alt="" />
						<div class="slide-desc">
							<h3>Buy Rice Products Are Now On Line With Us</h3>
						</div>
					</li>
					<li>
						<img src="images/22.jpg" alt="" />
						<div class="slide-desc">
							<h3>Whole Spices Products Are Now On Line With Us</h3>
						</div>
					</li>

					<li>
						<img src="images/44.jpg" alt="" />
						<div class="slide-desc">
							<h3>Whole Spices Products Are Now On Line With Us</h3>
						</div>
					</li>
				</ul>
			</>
		)
	}
}
