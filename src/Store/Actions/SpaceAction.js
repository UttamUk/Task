import * as actionTypes from './types';
import Axios from '../../hoc/Axios'


export const SpaceListAction = () => {
    return (dispatch) => {
        const url = "limit=100";
        Axios.get(url)
            .then(res => {
                dispatch({
                    type: actionTypes.LIST,
                    payload: res.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}


export const FilterAction = (body) => {
    return (dispatch) => {
        dispatch(ResetAction());
        const filterUrl = "limit=100"+ (body.launch_success !== undefined ? ("&launch_success=" + body.launch_success) : '')
            + (body.land_success !== undefined ? ("&land_success=" + body.land_success) :'')
                + (body.launch_year !== undefined ? ("&launch_year=" + body.launch_year) : '');
        Axios.get(filterUrl)
            .then(res => {
                dispatch({
                    type: actionTypes.LIST,
                    payload: res.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const ResetAction = () => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.RESET,
            payload: undefined
        })
    }
}