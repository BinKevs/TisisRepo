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
			<>
				{/* <div className='col-xl-8 m-auto'>
					<div className='card card-body mt-5'>
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
				</div> */}
				<div className='col-xl-6 m-auto mt-3'>
					<form onSubmit={this.onSubmit} className='card card-body card_cust'>
						<img
							src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwAhve9l6BmnmgaygMyp5bLMUIqpKUtGIx3XOBY6gU3Nt232Pm5q8zF90ctT0hx6VffTM&usqp=CAU'
							class='img-fluid'
							alt='...'
							className='mx-auto'
							style={{ height: '180px', width: '180px' }}
						/>
						<h2 className='text-center text-secondary mb-3'>
							Member Registration
						</h2>
						<div className='form-floating mb-3'>
							<input
								type='text'
								className='form-control'
								name='username'
								onChange={this.onChange}
								value={username}
								placeholder='Username'
							/>
							<label for='username' className='text-secondary'>
								Username
							</label>
							{/* <div id='emailHelp' className='form-text'>
								We'll never share your email with anyone else.
							</div> */}
						</div>
						<div className='form-floating mb-3'>
							<input
								type='email'
								className='form-control'
								name='email'
								onChange={this.onChange}
								value={email}
								placeholder='Email'
							/>
							<label for='email' className='text-secondary'>
								Email
							</label>
						</div>
						<div class='form-floating mb-3'>
							<input
								type='password'
								class='form-control'
								name='password'
								onChange={this.onChange}
								value={password}
								placeholder='Password'
							/>
							<label for='password' className='text-secondary'>
								Password
							</label>
						</div>
						<div className='form-floating mb-3'>
							<input
								type='password'
								className='form-control'
								name='password2'
								onChange={this.onChange}
								value={password2}
								placeholder='Confirm Password'
							/>
							<label for='confirm password' className='text-secondary'>
								Confirm Password
							</label>
						</div>
						<div class=''>
							<label for='exampleInputPassword1' className='form-label'>
								Already have an account?{' '}
								<Link className='text-primary' to='/login'>
									Login
								</Link>
							</label>
						</div>
						{/* <div class='mb-3 form-check'>
							<input
								type='checkbox'
								className='form-check-input'
								id='exampleCheck1'
							/>
							<label className='form-check-label' for='exampleCheck1'>
								Check me out
							</label>
						</div> */}
						<button type='submit' type='submit' className='btn btn-secondary'>
							Register
						</button>
					</form>
				</div>
			</>
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
