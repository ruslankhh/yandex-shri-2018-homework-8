import { createStore } from 'flux';
import reducer from './../reducers';
import logger from './../logger';

const loggedReducer = logger.listen('DISPATHER:', reducer);

const store = createStore();

store.use(loggedReducer);

export default store;
