import * as types from '../constants/ActionTypes';
import callApi from '../utils/apiCaller';
import {getToken} from '../utils/utils'


export const getUserLogin = () => async dispatch => {
	let token = getToken()
	let userLogin = null
	if(token){
		userLogin = getUserInfo(token)
	}
	
	dispatch({
		type : types.GET_USER_LOGIN,
        userLogin
	})
}

export const getUserInfo = (token) => {
	if (!token) { return; }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
}


export const getAllCompany = (search) => async dispatch => {
	let data =  await callApi('companies/?name='+search,'GET',null)
	let companies = data.data.results
	// console.log(companies);
	dispatch({
		type : types.GET_ALL_COMPANY,
		companies
	})
}

export const getFavoriteCompany = () => async dispatch => {
	let data =  await callApi('favorite-companies/','GET',null)
	let companies = data.data.results
	dispatch({
		type : types.GET_FAVORITE_COMPANY,
		companies
	})
}


export const markCompany = (id) => async dispatch => {
	await callApi('favorite-companies/'+id+'/','POST',null)
	dispatch({
		type : types.MARK_COMPANY,
		id
	})
}

export const unMarkCompany = (id) => async dispatch => {
	await callApi('favorite-companies/'+id+'/','DELETE',null)
	dispatch({
		type : types.UNMARK_COMPANY,
		id
	})
}





