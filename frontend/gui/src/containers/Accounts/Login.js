import { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../store/actions/Accounts/auth';
class Login extends Component {
	state = {
		username: '',
		password: '',
	};

	static propTypes = {
		login: PropTypes.func.isRequired,
		isAuthenticated: PropTypes.bool,
	};
	onChange = (e) => this.setState({ [e.target.name]: e.target.value });

	onSubmit = (e) => {
		e.preventDefault();
		this.props.login(this.state.username, this.state.password);
	};
	render() {
		if (this.props.isAuthenticated) {
			return <Redirect to={'/dashboard'} />;
		}
		const { username, password } = this.state;
		return (
			<>
				<div className='col-xl-6 m-auto'>
					<div className='card card-body card_cust mt-5'>
						<h2 className='text-center'>Login</h2>
						<form onSubmit={this.onSubmit}>
							<div className='form-group'>
								<label>Username</label>
								<input
									type='text'
									className='form-control'
									name='username'
									onChange={this.onChange}
									value={username}
								/>
							</div>

							<div className='form-group'>
								<label>Password</label>
								<input
									type='password'
									className='form-control'
									name='password'
									onChange={this.onChange}
									value={password}
								/>
							</div>

							<div className='form-group'>
								<button type='submit' className='btn btn-primary'>
									Login
								</button>
							</div>
							<p>
								Don't have an account? <Link to='/Signup'>Register</Link>
							</p>
						</form>
					</div>
				</div>
			</>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.AuthReducer.isAuthenticated,
	};
};
export default connect(mapStateToProps, { login })(Login);
