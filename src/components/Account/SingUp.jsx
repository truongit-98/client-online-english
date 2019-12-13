import React, { Component } from 'react';
import './Account.css';
import { connect } from 'react-redux';
import {withRouter,Link} from 'react-router-dom';
import { register } from '../../store/Action/authAction';
import './Account.css';

class SigUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      email: '',
      passWord: '',
    }
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const { userName, email, passWord } = this.state;
    // Create user object
    const newUser = {
      userName,
      email,
      passWord
    };
    // Attempt to register
    this.props.register(newUser)
  };
  render() {
    const {isAuthenticated} = this.props.auth;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body b1">
                <h5 className="card-title text-center">Sign up</h5>
                <form className="form-signin" onSubmit={this.onSubmit}>
                  <div className="form-label-group">
                    <input type="text" name="userName" id="name" onChange={this.onChange} className="form-control" placeholder="Tên tài khoản" required autoFocus />
                    <label htmlFor="name">Tên tài khoản</label>
                  </div>
                  <div className="form-label-group">
                    <input type="email" name="email" id="inputEmail" onChange={this.onChange} className="form-control" placeholder="Email address" required autoFocus />
                    <label htmlFor="inputEmail">Email address</label>
                  </div>
                  <div className="form-label-group">
                    <input type="password" name="passWord" id="inputPassword" onChange={this.onChange} className="form-control" placeholder="Password" required />
                    <label htmlFor="inputPassword">Password</label>
                  </div>
                  <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign up</button>
                  {isAuthenticated &&
                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                  }
                  <hr className="my-4" />
                  <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2" /> Sign in with Google</button>
                  <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2" /> Sign in with Facebook</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth,
  }
}
const mapDispatchToProps = {
  register
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SigUp));