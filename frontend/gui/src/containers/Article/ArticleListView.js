import React, { Component } from "react"
import Articles from "../../components/Articles"
import CustomForm from "../../components/Form"

import PropTypes from "prop-types"
import { connect } from "react-redux"
import {
  getArticlesList,
  deleteArticle,
} from "../../store/actions/Article/articles"

import axios from "axios"
class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    getArticlesList: PropTypes.func.isRequired,
    deleteArticle: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.getArticlesList()
  }
  render() {
    return (
      <div>
        <div className='container'>
          <div className='row'>
            {this.props.articles.map((article) => (
              <div className='col-md-6 col-lg-3 mb-4' key={article.id}>
                <div class='card'>
                  <img
                    class='card-img-top'
                    src='https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png'
                    alt='Card image cap'
                  />
                  <div class='card-body'>
                    <h5 class='card-title'>{article.title}</h5>
                    <p class='card-text'>{article.content}</p>
                    <button
                      type='button'
                      class='btn btn-danger'
                      onClick={this.props.deleteArticle.bind(this, article.id)}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <br />
        <CustomForm requestType='POST' articleID={null} btnText='Submit' />
      </div>
    )
  }
}
const mapToStateToProps = (state) => ({
  articles: state.articles.articles,
  token: state.reducer.token,
})
export default connect(mapToStateToProps, { getArticlesList, deleteArticle })(
  ArticleList,
)
