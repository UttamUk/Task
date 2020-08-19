import { combineReducers } from 'redux';
import UserReducer from './UserReducer';

const AllReducers = combineReducers({
    UserReducer: UserReducer
});

export default AllReducers;