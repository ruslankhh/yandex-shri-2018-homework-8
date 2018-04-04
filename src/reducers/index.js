import { composeReducers } from 'flux';
import dataReducer from './dataReducer';
import inputReducer from './inputReducer';
import labelReducer from './labelReducer';

const reducer = composeReducers(dataReducer, inputReducer, labelReducer);

export default reducer;
