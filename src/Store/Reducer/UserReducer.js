import * as actionTypes from '../Actions/types'

const INITIAL = {
    userList: [],
    LoginUserId: [],
}

const UserReducer = (state = INITIAL, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return { ...state, LoginUserId: action.payload }

        case actionTypes.USERLIST:
            return { ...state, userList: action.payload }

        case actionTypes.ADDCONTACT:
            return { ...state, userList: [...state.userList, action.payload] }

        case actionTypes.UPDATECONTACT:
            const updatedValues = action.payload;
            return {
                ...state, userList: (state.userList).map(item => {
                    if (item.id === updatedValues.id) {
                        return {
                            ...item,
                            email: updatedValues.email,
                            first_name: updatedValues.first_name,
                            last_name: updatedValues.last_name,
                            gender: updatedValues.gender,
                            company: updatedValues.company,
                        }
                    } else {
                        return item
                    }
                })
            }

        case actionTypes.DELETECONTACT:
            return { ...state, userList: state.userList.filter(item => !(action.payload).includes(item.id)) }

        default:
            return state;
    }
}

export default UserReducer;