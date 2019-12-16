import React from 'react';
import { Link } from "react-router-dom";


export default function Testimonial(props) {
    var testimonials = props.testimonials;
    var testimony = testimonials.map((testimonial, index) => 
    <li key={index}>
        <div className="testi-slider">
            <h4>{testimonial.title}</h4>
            <p>{testimonial.desc}</p>
            <div className="testi-subscript">
            <p><Link to="#">{testimonial.name}</Link>{testimonial.designation}</p>
            <span className="w3-agilesub"> </span>
            </div>
        </div>
    </li>
    )
  return (
    <>
        <ul className="rslides" id="slider5">{testimony}</ul>
    </>
  );
}
