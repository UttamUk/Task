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
        var filterUrl;
        if (body.launch_success !== undefined && body.land_success !== undefined && body.launch_year) {
            dispatch(ResetAction());
            filterUrl = "limit=100&launch_success=" + body.launch_success
                + "&land_success=" + body.land_success
                + "&launch_year=" + body.launch_year;

        } else if (body.launch_success !== undefined && body.land_success !== undefined) {
            dispatch(ResetAction());
            filterUrl += "limit=100&launch_success=" + body.launch_success
                + "&land_success=" + body.land_success;

        } else if (body.launch_success !== undefined) {
            dispatch(ResetAction());
            filterUrl = "limit=100&launch_success=" + body.launch_success;
        } else {
            return;
        }
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