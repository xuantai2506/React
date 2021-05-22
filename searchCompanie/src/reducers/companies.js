import * as types from '../constants/ActionTypes';
import _ from "lodash";


let initialState = [
    
]

let companies = (state = initialState, action) => {
	switch(action.type){
        case types.GET_ALL_COMPANY:
			return action.companies
		case types.GET_FAVORITE_COMPANY:
			return action.companies
		case types.MARK_COMPANY:
			let index = _.findIndex(state,(o) => { return o.id === action.id })
			state[index].is_fav = 'True'
			return [...state] 
		case types.UNMARK_COMPANY:
			let index2 = _.findIndex(state,(o) => { return o.id === action.id })
			state[index2].is_fav = 'False'
			return [...state] 
		default: return state;
	}
}

export default companies;