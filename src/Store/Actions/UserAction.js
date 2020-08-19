import * as actionTypes from './types';
import userData from '../../Data/userJson.json';
const $ = window.$;

export const LoginAction = (id) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.LOGIN,
            payload: id
        });
    }
}

export const UserListAction = () => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.USERLIST,
            payload: userData
        })
    }
}


export const AddContactAction = (body) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.ADDCONTACT,
            payload: body
        });
        $('#add').modal("hide");
        document.getElementById("contact").reset();
    }
}



export const UpdateContactAction = (body) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.UPDATECONTACT,
            payload: body
        });
        $('#add').modal("hide");
        document.getElementById("contact").reset();
    }
}

export const DeleteContactAction = (body) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.DELETECONTACT,
            payload: body
        });
    }
}


