import { Form, Input, Button } from "antd"
import { UserOutlined, LockOutlined } from "@ant-design/icons"
import { Component } from "react"
import { NavLink } from "react-router-dom"
import { Spin } from "antd"
import { connect } from "react-redux"
import * as actions from "../store/actions/auth"
class Login extends Component {
  onFinish = (values) => {
    this.props.onAuth(values.username, values.password)
    this.props.history.push("/")
  }
  render() {
    let errorMessage = null
    if (this.props.error) {
      errorMessage = <h3>{this.props.error.message}</h3>
    }
    return (
      <>
        {errorMessage}
        {this.props.loading ? (
          <Spin size='large' />
        ) : (
          <Form
            name='normal_login'
            className='login-form'
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish}>
            <Form.Item
              name='username'
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}>
              <Input
                prefix={<UserOutlined className='site-form-item-icon' />}
                placeholder='Username'
              />
            </Form.Item>
            <Form.Item
              name='password'
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}>
              <Input
                prefix={<LockOutlined className='site-form-item-icon' />}
                type='password'
                placeholder='Password'
              />
            </Form.Item>

            <Form.Item>
              <Button
                type='primary'
                htmlType='submit'
                className='login-form-button'>
                Log in
              </Button>
              {"   "}
              Or
              {"   "}
              <NavLink style={{ marginRight: "10px" }} to='/signup/'>
                Signup
              </NavLink>
            </Form.Item>
          </Form>
        )}
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (username, password) =>
      dispatch(actions.authLogin(username, password)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
