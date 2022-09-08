import { combineReducers } from 'redux';
import userReducer from './UserReducer';

const mainReducer = combineReducers({
    user: userReducer,
});

export const baseURL = 'http://thanhtam.pythonanywhere.com';

export default mainReducer;
