import { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { register } from '../../store/actions/Accounts/auth';
import { createMessage } from '../../store/actions/Notification/messages';
class RegistrationForm extends Component {
	state = {
		username: '',
		email: '',
		password: '',
		password2: '',
	};
	static propTypes = {
		register: PropTypes.func.isRequired,
		createMessage: PropTypes.func.isRequired,
		isAuthenticated: PropTypes.bool,
	};
	// Submit the state value to the store actions-accounts-auth-register
	onSubmit = (e) => {
		e.preventDefault();
		const { username, email, password, password2 } = this.state;
		if (password !== password2) {
			this.props.createMessage({ messageError: 'Passwords do not match' });
		} else {
			const newUser = {
				username,
				password,
				email,
			};
			this.props.register(newUser);
		}
	};
	onChange = (e) => this.setState({ [e.target.name]: e.target.value });

	render() {
		if (this.props.isAuthenticated) {
			return <Redirect to='/dashboard' />;
		}
		const { username, email, password, password2 } = this.state;
		return (
			<div className='col-xl-8 m-auto'>
				<div className='card card-body card_cust mt-5'>
					<h2 className='text-center'>Register</h2>
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
							<label>Email</label>
							<input
								type='email'
								className='form-control'
								name='email'
								onChange={this.onChange}
								value={email}
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
							<label>Confirm Password</label>
							<input
								type='password'
								className='form-control'
								name='password2'
								onChange={this.onChange}
								value={password2}
							/>
						</div>
						<div className='form-group'>
							<button type='submit' className='btn btn-primary'>
								Register
							</button>
						</div>
						<p>
							Already have an account? <Link to='/login'>Login</Link>
						</p>
					</form>
				</div>
			</div>
		);
	}
}
//get the isAuthenticated value from store-reducer-accounts-auth
const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.AuthReducer.isAuthenticated,
	};
};
export default connect(mapStateToProps, { register, createMessage })(
	RegistrationForm
);
