import React from "react"
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons"
import { Form, Input, Button } from "antd"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import * as actions from "../store/actions/auth"
class RegistrationForm extends React.Component {
  onFinish = (values) => {
    console.log("Received values of form: ", values)
    this.props.onAuth(
      values.username,
      values.email,
      values.password1,
      values.password2,
    )
    this.props.history.push("/")
  }
  render() {
    return (
      <Form name='register' onFinish={this.onFinish}>
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
          name='email'
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}>
          <Input
            prefix={<MailOutlined className='site-form-item-icon' />}
            placeholder='Email'
          />
        </Form.Item>

        <Form.Item
          name='password1'
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback>
          <Input.Password
            prefix={<LockOutlined className='site-form-item-icon' />}
            placeholder='Password'
          />
        </Form.Item>

        <Form.Item
          name='password2'
          dependencies={["password1"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue("password1") === value) {
                  return Promise.resolve()
                }
                return Promise.reject(
                  "The two passwords that you entered do not match!",
                )
              },
            }),
          ]}>
          <Input.Password
            prefix={<LockOutlined className='site-form-item-icon' />}
            placeholder='Confirm Password'
          />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Sign Up
          </Button>
          {"   "}
          Or
          {"   "}
          <NavLink style={{ marginRight: "10px" }} to='/login/'>
            Login
          </NavLink>
        </Form.Item>
      </Form>
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
    onAuth: (username, email, password1, password2) =>
      dispatch(actions.authSignup(username, email, password1, password2)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm)
