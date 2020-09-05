import * as actionTypes from '../Actions/types'

const INITIAL = {
    spaceList: undefined,
}

const SpaceReducer = (state = INITIAL, action) => {
    switch (action.type) {
        case actionTypes.LIST:
            return { ...state, spaceList: action.payload }

        case actionTypes.RESET:
            return { spaceList: action.payload }

        default:
            return state;
    }
}

export default SpaceReducer;