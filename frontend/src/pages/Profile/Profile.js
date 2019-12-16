import React, { Component } from 'react'
import api from '../../Apis';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs';


export default class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true })
    const payload = localStorage.getItem('_id');

    await api.UserProfile(payload).then(result => {
      this.setState({
        user: result.data
      });


    })
  }


  render() {
    const { user } = this.state;
    console.log(JSON.stringify(user));
    return (
      <>
        <Breadcrumbs page="Profile" />
        <div class="products">
          <div className="container">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">
                  USER Profile &nbsp;
                {localStorage.getItem('jwtToken') &&
                    <button className="btn btn-primary" onClick={this.logout}>Logout</button>
                  }
                </h3>
              </div>
              <div className="panel-body">
                {/* <Welcome books='books'/> */}
                <table className="table table-stripe">
                  <thead>
                    <tr>
                      <th>User Id </th>
                      <th>User first Name</th>
                      <th>User Last Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><Link to={`/show/${user._id}`}>{user._id}</Link></td>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}