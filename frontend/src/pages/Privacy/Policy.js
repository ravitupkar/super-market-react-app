import React from 'react';
import { Link } from "react-router-dom";


export default function Policy(props) {
    var quations = props.quations;
    var quationsList = quations.map((quation, index) => 
        <li key={index} className="item1">
            <Link to="#" title="click here">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor vehicula ipsum nec ?</Link>
                <ul>
                  <li class="subitem1"><p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p></li>
                </ul>
        </li>
    )
  return (
    <>
       <div class="faq-w3agile">
          <div class="container">
            <h2 class="w3_agile_header">Privacy Policy</h2>
            <ul class="faq">
              {quationsList}
            </ul>
          </div>
        </div>
    </>
  );
}