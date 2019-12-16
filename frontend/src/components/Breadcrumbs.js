import React from 'react';
import { Link } from "react-router-dom";

export default function Breadcrumbs(props) {
  return (
    <>
      <div className="breadcrumbs">
        <div className="container">
          <ol className="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
            <li>
              <Link to="/"><span className="glyphicon glyphicon-home" aria-hidden="true"></span>Home</Link>
            </li>
            <li className="active">{props.page}</li>
          </ol>
        </div>
      </div>
    </>
  );
}
