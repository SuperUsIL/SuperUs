import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { offersReducer } from './offersReducer';

export const rootReducer = combineReducers({
    user: userReducer,
    offers: offersReducer,
    // other reducers will go here
});
