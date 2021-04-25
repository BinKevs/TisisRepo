import axios from 'axios';
import { URL_IMPORT } from '../../../Helpers/constant';
import { tokenConfig } from '../Accounts/auth';
import { createMessage, returnErrors } from '../Notification/messages';
import {
	GET_PRODUCT_LIST,
	GET_PRODUCT,
	DELETE_PRODUCT,
	ADD_PRODUCT,
	UPDATE_PRODUCT,
	GET_CATEGORY_LIST,
	ADD_CATEGORY,
	DELETE_CATEGORY,
} from './actionTypes';
const url = URL_IMPORT + '/api/products/';
export const getProductList = () => (dispatch, getState) => {
	axios.get(url, tokenConfig(getState)).then((res) => {
		dispatch({
			type: GET_PRODUCT_LIST,
			payload: res.data,
		});
	});
};
export const getProduct = (ProductID) => (dispatch, getState) => {
	axios
		.get(url + ProductID + '/', tokenConfig(getState))
		.then((res) => {
			dispatch({
				type: GET_PRODUCT,
				payload: res.data,
			});
		})
		.catch((err) => console.log(err));
};
export const deleteProduct = (ProductID) => (dispatch, getState) => {
	axios
		.delete(url + ProductID + '/', tokenConfig(getState))
		.then((res) => {
			dispatch(createMessage({ message: 'Product Deleted' }));
			dispatch({
				type: DELETE_PRODUCT,
				payload: ProductID,
			});
		})
		.catch((err) => console.log(err));
};
export const addProduct = (data) => (dispatch, getState) => {
	axios
		.post(url, data, tokenConfig(getState))
		.then((res) => {
			dispatch(createMessage({ message: 'Product Added' }));
			dispatch({
				type: ADD_PRODUCT,
				payload: res.data,
			});
		})
		.catch((err) =>
			dispatch(returnErrors(err.response.data, err.response.status))
		);
};
export const updateProduct = (ProductID, data) => (dispatch, getState) => {
	axios
		.put(url + ProductID + '/', data, tokenConfig(getState))
		.then((res) => {
			dispatch(createMessage({ message: 'Product Updated' }));
			dispatch({
				type: UPDATE_PRODUCT,
				payload: res.data,
			});
		})
		.catch((err) => console.log(err));
};

// Category part

export const getCategoryList = () => (dispatch, getState) => {
	axios
		.get(URL_IMPORT + '/api/categories/', tokenConfig(getState))
		.then((res) => {
			dispatch({
				type: GET_CATEGORY_LIST,
				payload: res.data,
			});
		});
};
export const addCategory = (data) => (dispatch, getState) => {
	axios
		.post(URL_IMPORT + '/api/categories/', data, tokenConfig(getState))
		.then((res) => {
			dispatch(createMessage({ message: 'Category Added' }));
			dispatch({
				type: ADD_CATEGORY,
				payload: res.data,
			});
		})
		.catch((err) =>
			dispatch(returnErrors(err.response.data, err.response.status))
		);
};
export const deleteCategory = (CategoryID) => (dispatch, getState) => {
	axios
		.delete(
			URL_IMPORT + '/api/categories/' + CategoryID + '/',
			tokenConfig(getState)
		)
		.then((res) => {
			dispatch(createMessage({ message: 'Product Deleted' }));
			dispatch({
				type: DELETE_CATEGORY,
				payload: CategoryID,
			});
		})
		.catch((err) => console.log(err));
};
