import React, { Component } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import swal from 'sweetalert';
export class Alerts extends Component {
	static propTypes = {
		error: PropTypes.object.isRequired,
		message: PropTypes.object.isRequired,
	};
	componentDidUpdate(prevProps) {
		const { error, alert, message } = this.props;
		if (error !== prevProps.error) {
			if (error.msg.title) {
				swal({
					title: `Title:${error.msg.title.join()}`,
					icon: 'error',
				});
			}
			if (error.msg.content) {
				swal({
					title: `Content:${error.msg.content.join()}`,
					icon: 'error',
				});
			}
			if (error.msg.change) {
				swal({
					title: `Content:${error.msg.change.join()}`,
					icon: 'error',
				});
			}
			if (error.msg.non_field_errors) {
				swal({
					title: error.msg.non_field_errors.join(),
					icon: 'error',
				});
			}
			if (error.msg.username) {
				swal({
					title: error.msg.username.join(),
					icon: 'error',
				});
			}
		}
		if (message !== prevProps.message) {
			if (message.message) {
				swal({
					title: message.message,
					icon: 'success',
				});
			}
			if (message.messageError) {
				swal({
					title: message.messageError,
					icon: 'error',
				});
			}
		}
	}
	render() {
		return <></>;
	}
}
const mapStateToProps = (state) => ({
	error: state.errors,
	message: state.messages,
});
export default connect(mapStateToProps)(withAlert()(Alerts));
