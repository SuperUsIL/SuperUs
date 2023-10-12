import { FETCH_USERS } from './types';
import * as userService from './userService'; // Replace with your actual userService path

export const fetchUsers = () => dispatch => {
    userService.getUsers()
        .then(users => dispatch({
            type: FETCH_USERS,
            payload: users
        }))
        .catch(error => {
            // Handle the error here
        });
};
