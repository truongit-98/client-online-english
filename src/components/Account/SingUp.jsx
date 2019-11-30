import React, { Component } from 'react';
import './Account.css';
class SigUp extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
						<div className="card card-signin my-5">
							<div className="card-body b1">
								<h5 className="card-title text-center">Sign up</h5>
								<form className="form-signin">
									<div className="form-label-group">
										<input type="text" id="name" className="form-control" placeholder="Tên tài khoản" required autofocus />
										<label htmlFor="name">Tên tài khoản</label>
									</div>
									<div className="form-label-group">
										<input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
										<label htmlFor="inputEmail">Email address</label>
									</div>
									<div className="form-label-group">
										<input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
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

export default SigUp;