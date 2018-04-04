import { createStore, composeReducers } from 'flux';
import inputReducer from './../reducers/inputReducer';
import labelReducer from './../reducers/labelReducer';
import logger from './../logger';

const reducer = composeReducers(inputReducer, labelReducer);
const logReducer = logger.listen('DISPATHER:', reducer);

const store = createStore();

store.use(logReducer);

export default store;
