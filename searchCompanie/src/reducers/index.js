import { combineReducers } from 'redux';
import companies from './companies'
import userLogin from './userLogin'
const appReducers = combineReducers({
	companies,
	userLogin,
})

export default appReducers;