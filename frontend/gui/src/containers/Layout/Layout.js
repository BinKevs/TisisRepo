import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadUser } from '../../store/actions/Accounts/auth';
import Alerts from '../../components/Alerts';
import Navbar from './NavBar/Navbar';

// let is_super = false;
class CustomLayout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sidebarStatus: false,
			is_superuser: false,
		};
	}

	static propTypes = {
		AuthReducer: PropTypes.object.isRequired,
	};
	componentWillMount() {
		this.props.loadUser();
		try {
			this.setState({
				is_superuser: this.props.AuthReducer.user.is_superuser,
			});
		} catch (error) {
			this.setState({
				is_superuser: false,
			});
		}

		// console.log( this.props.AuthReducer.user.is_superuser);
	}
	componentDidMount() {
		console.log(this.props);
	}
	// componentDidMount() {
	//   console.log(typeof this.props.AuthReducer.user.is_superuser)
	//   if (
	//     typeof this.props.AuthReducer.user.is_superuser === "null" ||
	//     typeof this.props.AuthReducer.user.is_superuser === "undefined"
	//   ) {
	//     this.setState({
	//       is_superuser: false,
	//     })
	//   } else {
	//     this.setState({
	//       is_superuser: this.props.AuthReducer.user.is_superuser,
	//     })
	//   }
	//   console.log(this.state)
	// }
	// componentDidMount() {
	//   console.log(this.state)
	//   console.log(this.props.AuthReducer.user)
	// }

	componentDidUpdate(prevProps, prevState) {
		if (this.props.AuthReducer !== prevProps.AuthReducer) {
			try {
				this.setState({
					is_superuser: this.props.AuthReducer.user.is_superuser,
				});
			} catch (error) {
				this.setState({
					is_superuser: false,
				});
			}
		}
		if (this.props.AuthReducer.logout !== prevProps.AuthReducer.logout) {
			this.setState({
				is_superuser: false,
			});
		}
	}

	handlerTest = () => {
		console.log(this.props.AuthReducer);
	};
	handler = () => {
		this.setState((prevState) => ({
			sidebarStatus: !prevState.sidebarStatus,
		}));
	};
	render() {
		const { sidebarStatus } = this.state;
		return (
			<>
				<Alerts />
				<Navbar handler={this.handler} sidebarStatus={sidebarStatus} />
				<div
					className={
						sidebarStatus ? 'container-active' : 'container-non-active'
					}
					style={{ backgroundColor: '#f9f9f9' }}
				>
					<div className='overflow-hidden'>{this.props.children}</div>
				</div>
				{/* {this.state.is_superuser ? (
          <span className='navbar-text mr-3 container'>
            Welcome {this.props.AuthReducer.user.username}
          </span>
        ) : (
          "Not Super"
        )} */}
			</>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		AuthReducer: state.AuthReducer,
	};
};
export default withRouter(connect(mapStateToProps, { loadUser })(CustomLayout));
