import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadUser } from '../../store/actions/Accounts/auth';
import Alerts from '../../components/common/Alerts';
import Navbar from './NavBar/Navbar';

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
	}
	componentDidMount() {
		console.log(this.props);
	}

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
				<>{this.props.children}</>
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
