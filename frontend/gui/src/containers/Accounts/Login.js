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
	// Submit the state value to the store actions-accounts-auth-Login
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
				<div className='col-xl-6 m-auto mt-3'>
					<form onSubmit={this.onSubmit} className='card card-body card_cust'>
						<img
							src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwAhve9l6BmnmgaygMyp5bLMUIqpKUtGIx3XOBY6gU3Nt232Pm5q8zF90ctT0hx6VffTM&usqp=CAU'
							class='img-fluid'
							alt='...'
							className='mx-auto mt-0'
							style={{ height: '180px', width: '180px' }}
						/>
						<h2 className='text-center text-secondary mb-3'>Member Login</h2>
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
						<div class='mb-3'>
							<label for='exampleInputPassword1' className='form-label'>
								Don't have an account?{' '}
								<Link className='text-primary' to='/register'>
									Register
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
							Login
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
export default connect(mapStateToProps, { login })(Login);
