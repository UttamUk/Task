import { combineReducers } from 'redux';
import SpaceReducer from './SpaceReducer';

const AllReducers = combineReducers({
    SpaceReducer: SpaceReducer
});

export default AllReducers;