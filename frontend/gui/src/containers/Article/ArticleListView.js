import React, { Component } from "react"
import Articles from "../../components/Articles"
import CustomForm from "../../components/Form"

import PropTypes from "prop-types"
import { connect } from "react-redux"
import { getArticlesList } from "../../store/actions/Article/articles"

import axios from "axios"
class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    getArticlesList: PropTypes.func.isRequired,
  }

  componentDidMount() {
    // axios.get("http://127.0.0.1:8000/api/").then((res) => {
    //   this.setState({
    //     articles: res.data,
    //   })
    // })
    this.props.getArticlesList()
  }
  render() {
    return (
      <div>
        <Articles data={this.props.articles} />
        <br />
        <CustomForm requestType='POST' articleID={null} btnText='Submit' />
      </div>
    )
  }
}
const mapToStateToProps = (state) => ({
  articles: state.articles.articles,
})
export default connect(mapToStateToProps, { getArticlesList })(ArticleList)
