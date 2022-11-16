import { combineReducers } from 'redux';
import forumReducers from './forum';
const rootReducer = combineReducers({
    forum: forumReducers,
});
export default rootReducer;