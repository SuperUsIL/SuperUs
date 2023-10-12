const initialState = {
    isAuthenticated: false, // Indicates if the user is logged in
    userData: null, // Details of the logged-in user
    loading: false, // Shows if the user data is being loaded
    error: null, // Holds error information, if any
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_LOGIN_REQUEST':
            return {
                ...state,
                loading: true,
            };
        case 'USER_LOGIN_SUCCESS':
            return {
                ...state,
                isAuthenticated: true,
                userData: action.payload, // user data returned from API
                loading: false,
            };
        case 'USER_LOGIN_FAILURE':
            return {
                ...state,
                error: action.payload, // error message returned from API
                loading: false,
            };
        case 'USER_LOGOUT':
            return {
                ...state,
                isAuthenticated: false,
                userData: null,
            };
        // Add more cases for other user-related actions
        default:
            return state;
    }
};
