import { createStore } from 'flux';
import inputReducer from './../reducers/inputReducer';
import labelReducer from './../reducers/labelReducer';
import logger from './../logger';

const logInputReducer = logger.decorate('STORE inputReducer', inputReducer);
const logLabelReducer = logger.decorate('STORE labelReducer', labelReducer);

const store = createStore();

store.use(logInputReducer);
store.use(logLabelReducer);

export default store;
