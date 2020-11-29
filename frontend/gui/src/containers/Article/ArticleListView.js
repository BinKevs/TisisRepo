import React, { Component } from "react"
import CustomForm from "../../components/Form"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import {
  getArticlesList,
  deleteArticle,
} from "../../store/actions/Article/articles"

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
                <div className='card'>
                  <img
                    className='card-img-top'
                    src='https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png'
                    alt='Card cap'
                  />
                  <div className='card-body'>
                    <h5 className='card-title'>
                      <Link to={"/articles/" + article.id + "/"}>
                        {article.title}
                      </Link>
                    </h5>
                    <p className='card-text'>{article.content}</p>
                    <button
                      type='button'
                      className='btn btn-danger'
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
