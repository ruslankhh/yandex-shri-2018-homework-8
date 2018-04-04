import { composeReducers } from 'flux';
import inputReducer from './inputReducer';
import labelReducer from './labelReducer';
import logReducer from './logReducer';

const reducer = composeReducers(inputReducer, labelReducer, logReducer);

export default reducer;
