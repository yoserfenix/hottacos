// src/state/reducers/userReducer.js

import { FETCH_USER_PROFILE_SUCCESS, FETCH_USER_PROFILE_FAILURE, UPDATE_USER_PROFILE_SUCCESS, UPDATE_USER_PROFILE_FAILURE } from '../actionTypes';

const initialState = {
    profile: null,
    updateSuccess: false,
    updateError: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_PROFILE_SUCCESS:
            return {
                ...state,
                profile: action.payload,
            };
        case FETCH_USER_PROFILE_FAILURE:
            return {
                ...state,
                profile: null,
                updateError: action.error,
            };
        case UPDATE_USER_PROFILE_SUCCESS:
            return {
                ...state,
                profile: action.payload,
                updateSuccess: true,
                updateError: null,
            };
        case UPDATE_USER_PROFILE_FAILURE:
            return {
                ...state,
                updateSuccess: false,
                updateError: action.error,
            };
        default:
            return state;
    }
};

export default userReducer;
