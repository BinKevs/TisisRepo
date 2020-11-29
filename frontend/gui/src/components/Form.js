//

import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { addArticle, updateArticle } from "../store/actions/Article/articles"
class CustomForm extends React.Component {
  state = {
    title: "",
    content: "",
  }
  static propTypes = {
    addArticle: PropTypes.func.isRequired,
    updateArticle: PropTypes.func.isRequired,
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onHandles = (event) => {
    event.preventDefault()
    const postObj = {
      title: this.state.title,
      content: this.state.content,
    }
    switch (this.props.requestType) {
      case "POST":
        this.props.addArticle(postObj)
        this.setState({
          title: "",
          content: "",
        })
      case "PUT":
        this.props.updateArticle(this.props.articleID, postObj)
        this.setState({
          title: "",
          content: "",
        })
      default:
        return this.state
    }
  }

  render() {
    const { title, content } = this.state
    return (
      <div className='container p-5'>
        <form onSubmit={this.onHandles}>
          <div className='form-group'>
            <label>Title</label>
            <input
              className='form-control'
              type='text'
              name='title'
              onChange={this.onChange}
              value={title}
            />
          </div>
          <div className='form-group'>
            <label>Content</label>
            <input
              className='form-control'
              type='text'
              name='content'
              onChange={this.onChange}
              value={content}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-primary'>
              {this.props.btnText}
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(null, { addArticle, updateArticle })(CustomForm)
