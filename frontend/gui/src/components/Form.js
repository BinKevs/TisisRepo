//

import React from "react"
import { Form, Input, Button } from "antd"
import axios from "axios"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { addArticle } from "../store/actions/articles"
class CustomForm extends React.Component {
  state = {
    title: "",
    content: "",
  }
  static propTypes = {
    addArticle: PropTypes.func.isRequired,
  }
  // handleSubmit = (values, requestType, articleID) => {
  // const title = values.title
  // const content = values.content
  // const data = { title, content }
  //   switch (requestType) {
  //     case "POST":
  //       return axios({
  //         method: "post",
  //         url: "http://127.0.0.1:8000/api/",
  //         data,
  //       })
  //         .then((response) => console.log(response))
  //         .catch((error) => console.log(error))

  //     case "PUT":
  //       const put_url = "http://127.0.0.1:8000/api/" + articleID + "/"
  //       return axios({ method: "put", url: put_url, data })
  //         .then((response) => console.log(response))
  //         .catch((error) => console.log(error))
  //   }
  // }

  // onChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   })
  // }

  onHandles = (values) => {
    const title = values.title
    const content = values.content
    const data = { title, content }
    this.props.addArticle(data)
  }

  render() {
    // const { title, content } = this.state
    return (
      <div>
        <Form
          // onFinish={(values) =>
          //   this.handleSubmit(
          //     values,
          //     this.props.requestType,
          //     this.props.articleID,
          //   )
          // }
          // onSubmit={this.onSubmit}
          onFinish={(values) => this.onHandles(values)}>
          <Form.Item label='Title' name='title'>
            <Input placeholder='Write a Title' />
          </Form.Item>
          <Form.Item label='Content' name='content'>
            <Input placeholder='Write Content Here' />
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit'>
              {this.props.btnText}
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default connect(null, { addArticle })(CustomForm)
