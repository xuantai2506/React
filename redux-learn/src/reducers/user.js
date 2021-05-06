const initialUser = {
    list: [],
    idActiveUser: ''
}
const userReducer = (state = initialUser, action) => {
    switch (action.type) {
        case 'ADD_USER': {
            return state;
        }

        case 'SET_ACTIVE_USER': {
            return state;
        }

        default:
            return state;
    }
}

export default userReducer