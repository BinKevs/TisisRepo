import React, { Component } from "react"
import { Card, Button } from "antd"
import axios from "axios"
import CustomForm from "../../components/Form"

import PropTypes from "prop-types"
import { connect } from "react-redux"
import { getArticle } from "../../store/actions/Article/articles"

class ArticleDetail extends Component {
  static propTypes = {
    article: PropTypes.object.isRequired,
    getArticle: PropTypes.func.isRequired,
  }
  componentDidMount() {
    const articleID = this.props.match.params.articleID
    // const get_url = "http://127.0.0.1:8000/api/" + articleID + "/"
    // axios({ method: "get", url: get_url })
    //   .then((res) => {
    //     this.setState({
    //       article: res.data,
    //     })
    //   })
    //   .catch((error) => console.log(error))
    this.props.getArticle(articleID)
  }
  componentDidUpdate() {
    console.log("State update")
  }

  handleDelete = (event) => {
    // const articleID = this.props.match.params.articleID
    // const get_url = "http://127.0.0.1:8000/api/" + articleID + "/"
    // axios({ method: "delete", url: get_url })
  }
  render() {
    return (
      <div>
        <Card title={this.props.article.title}>
          <p>{this.props.article.content}</p>
        </Card>
        <CustomForm
          requestType='PUT'
          articleID={this.props.match.params.articleID}
          btnText='Update'
          title={this.props.article.title}
          content={this.props.article.content}
        />
        <form onSubmit={this.handleDelete}>
          <Button type='danger' htmlType='submit'>
            Delete
          </Button>
        </form>
      </div>
    )
  }
}
const mapToStateToProps = (state) => ({
  article: state.articles.article,
})
export default connect(mapToStateToProps, { getArticle })(ArticleDetail)
