import {
  GET_PRODUCT_LIST,
  GET_PRODUCT,
  DELETE_PRODUCT,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  GET_CATEGORY_LIST,
  ADD_CATEGORY,
  UPDATE_CATEGORY,
  PRODUCT_LOADING,
  GET_VOUCHER_LIST,
  GET_REVIEW_LIST,
  ADD_REVIEW,
} from "../../actions/product/actionTypes";

const initialState = {
  products: [],
  product: {},
  supplier_name: "",
  images: [],
  categories: [],
  vouchers: [],
  reviews: [],
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case PRODUCT_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_PRODUCT_LIST:
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };
    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload,
        supplier_name: action.payload.supplier_info.name,
        images: action.payload.file_content,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    case GET_CATEGORY_LIST:
      return {
        ...state,
        categories: action.payload,
      };
    case ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    case UPDATE_CATEGORY:
      return {
        ...state,
        categories: [
          ...state.categories.filter((cat) => cat.id !== action.payload.id),
          action.payload,
        ],
      };
    case GET_VOUCHER_LIST:
      return {
        ...state,
        vouchers: action.payload,
      };
    case GET_REVIEW_LIST:
      return {
        ...state,
        reviews: action.payload,
      };
    case ADD_REVIEW:
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
      };
    default:
      return state;
  }
}
