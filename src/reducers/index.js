import { combineReducers } from 'redux';
import input from './input';
import label from './label';

const reducer = combineReducers({
  input,
  label
});

export default reducer;
