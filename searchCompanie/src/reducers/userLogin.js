import * as types from '../constants/ActionTypes';
import {removeToken} from '../utils/utils'

let initialState = [
    
]

let userLogin = (state = initialState, action) => {
	switch(action.type){
        case types.GET_USER_LOGIN:
            return action.userLogin
		default: return state;
	}
}

export default userLogin;