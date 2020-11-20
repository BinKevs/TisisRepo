import {
  GET_ARTICLES_LIST,
  GET_ARTICLE,
  DELETE_ARTICLE,
  ADD_ARTICLE,
  UPDATE_ARTICLE,
} from "../../actions/Article/actionTypes"
const initialState = {
  articles: [],
  article: {},
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ARTICLES_LIST:
      return {
        ...state,
        articles: action.payload,
      }
    case GET_ARTICLE:
      return {
        ...state,
        article: action.payload,
      }
    case DELETE_ARTICLE:
      return {
        ...state,
        articles: state.articles.filter(
          (article) => article.id !== action.payload,
        ),
      }
    case ADD_ARTICLE:
      return {
        ...state,
        articles: [...state.articles, action.payload],
      }
    case UPDATE_ARTICLE:
      return {
        ...state,
        article: action.payload,
      }
    default:
      return state
  }
}
