import React from 'react';
import { Link } from "react-router-dom";


export default function OurTeam(props) {
    var teams = props.teams;
    var ourteams = teams.map((team, index) => 
    <div key={index} className="col-md-3 about-team-grids">
        <img src={team.image} alt="" />
        <div className="team-w3lstext">
            <h4><span>{team.name},</span> {team.designation}</h4>
            <p>{team.info}</p>
        </div>
        <div className="social-icons caption">
            <ul>
            <li><Link to={team.facebook} className="fa fa-facebook facebook"> </Link></li>
            <li><Link to={team.twitter} className="fa fa-twitter twitter"> </Link></li>
            <li><Link to={team.google} className="fa fa-google-plus googleplus"> </Link></li>
            </ul>
            <div className="clearfix"> </div>
        </div>
    </div>
    )
  return (
    <>
        <div className="about-team">
          <div className="container">
            <h3 className="w3_agile_header">Meet Our Team</h3>
            <div className="team-agileitsinfo">
                {ourteams}
                <div className="clearfix"> </div>
            </div>
          </div>
        </div> 
    </>
  );
}