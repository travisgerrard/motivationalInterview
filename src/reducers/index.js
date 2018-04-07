import { combineReducers } from 'redux';
import alcoholReducer from './alcoholReducer';

export default combineReducers({
  alcohol: alcoholReducer
});
