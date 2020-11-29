import React, { Component } from "react"
import CustomForm from "../../components/Form"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { getArticle, deleteArticle } from "../../store/actions/Article/articles"

class ArticleDetail extends Component {
  static propTypes = {
    article: PropTypes.object.isRequired,
    getArticle: PropTypes.func.isRequired,
  }
  componentDidMount() {
    const articleID = this.props.match.params.articleID
    this.props.getArticle(articleID)
  }
  componentDidUpdate() {
    console.log("State update")
  }

  onHandles = () => {
    this.props.history.push("/articles")
  }
  render() {
    return (
      <>
        <div className='card'>
          <img
            className='card-img-top'
            src='https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png'
            alt='Card cap'
          />
          <div className='card-body'>
            <h5 className='card-title'>{this.props.article.title}</h5>
            <p className='card-text'>{this.props.article.content}</p>
            <form onSubmit={this.onHandles}>
              <button
                type='submit'
                className='btn btn-danger'
                onClick={this.props.deleteArticle.bind(
                  this,
                  this.props.article.id,
                )}>
                {" "}
                Delete
              </button>
            </form>
          </div>
        </div>
        <CustomForm
          requestType='PUT'
          articleID={this.props.match.params.articleID}
          btnText='Update'
          title={this.props.article.title}
          content={this.props.article.content}
        />
      </>
    )
  }
}
const mapToStateToProps = (state) => ({
  article: state.articles.article,
})
export default connect(mapToStateToProps, { getArticle, deleteArticle })(
  ArticleDetail,
)
