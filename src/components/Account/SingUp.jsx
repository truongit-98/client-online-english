import React, { Component } from 'react';
import './Account.css';
import { connect } from 'react-redux';
import './Account.css';
// import { login } from '../../store/Action/authAction';

class SigUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			password: '',
			msg: null
		}
	}
	onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    // const { name, email, password } = this.state;
    // // Create user object
    // const newUser = {
    //   name,
    //   email,
    //   password
    // };
    // // Attempt to register
    // this.props.register(newUser);
  };
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
						<div className="card card-signin my-5">
							<div className="card-body b1">
								<h5 className="card-title text-center">Sign up</h5>
								<form className="form-signin" onSubmit={this.onSubmit}>
									<div className="form-label-group">
										<input type="text" name="name" id="name" className="form-control" placeholder="Tên tài khoản" onChange={this.onChange} required autofocus />
										<label htmlFor="name">Tên tài khoản</label>
									</div>
									<div className="form-label-group">
										<input type="email" name="email" id="inputEmail" className="form-control" placeholder="Email address" onChange={this.onChange} required autofocus />
										<label htmlFor="inputEmail">Email address</label>
									</div>
									<div className="form-label-group">
										<input type="password" name="password" id="inputPassword" className="form-control" placeholder="Password" onChange={this.onChange} required />
										<label htmlFor="inputPassword">Password</label>
									</div>
									<button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign up</button>
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
		error: state.error
	}
}
const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SigUp);