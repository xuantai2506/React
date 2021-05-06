const initialHobby = {
    list: [],
    idActiveHobby: '',
}
const hobbyReducer = (state = initialHobby, action) => {
    switch (action.type) {
        case 'ADD_HOBBY': {
            const newList = [...state.list];
            newList.push(action.payload);
            return {
                ...state,
                list: newList
            }
        }

        case 'SET_ACTIVE_HOBBY': {
            const newId = action.payload.id;
            return {
                ...state,
                idActiveHobby: newId
            };
        }

        default:
            return state;
    }
}

export default hobbyReducer