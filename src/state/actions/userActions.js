// src/state/actions/userActions.js

import { userService } from '../../services/userService';
import { FETCH_USER_PROFILE_SUCCESS, FETCH_USER_PROFILE_FAILURE, UPDATE_USER_PROFILE_SUCCESS, UPDATE_USER_PROFILE_FAILURE } from '../actionTypes';

export const fetchUserProfile = () => async (dispatch) => {
    try {
        const profile = await userService.getProfile();
        dispatch({ type: FETCH_USER_PROFILE_SUCCESS, payload: profile });
    } catch (error) {
        dispatch({ type: FETCH_USER_PROFILE_FAILURE, error: error.message });
    }
};

export const updateUserProfile = (formData) => async (dispatch) => {
    try {
        const updatedProfile = await userService.updateProfile(formData);
        dispatch({ type: UPDATE_USER_PROFILE_SUCCESS, payload: updatedProfile });
    } catch (error) {
        dispatch({ type: UPDATE_USER_PROFILE_FAILURE, error: error.message });
    }
};
