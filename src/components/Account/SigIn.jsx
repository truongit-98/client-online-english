import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter,Link} from 'react-router-dom';
import './Account.css';
import { login } from '../../store/Action/authAction';

class SigIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      passWord: '',
      msg: null
    }
  }
  componentDidUpdate(prevProps) {
    const { error} = this.props;
    if (error !== prevProps.error) {
      // Check for register error
      if (error.userID === 'login_fail') {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const { userName, passWord } = this.state;
    const user = {
      userName,
      passWord
    };
    // Attempt to login
    this.props.login(user);
    //this.props.history.push('/');
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body b1">
                <h5 className="card-title text-center">Sign In</h5>
                {
                  this.state.msg ? (
                    <alert color='danger'>{this.state.msg}</alert>
                  ) : null
                }
                <form className="form-signin" onSubmit={this.onSubmit}>
                  <div className="form-label-group">
                    <input type="userName" name="userName" id="userName" className="form-control" placeholder="Email address" onChange={this.onChange} required autoFocus/>
                    <label htmlFor="userName">userName</label>
                  </div>
                  <div className="form-label-group">
                    <input type="password" name="passWord" id="inputPassword" className="form-control" placeholder="Password" onChange={this.onChange} required autoFocus/>
                    <label htmlFor="inputPassword">Password</label>
                  </div>
                  <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
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
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
  }
}
const mapDispatchToProps = {
  login
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SigIn));
