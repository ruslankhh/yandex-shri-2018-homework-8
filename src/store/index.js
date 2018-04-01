import { createStore } from 'flux';
import inputReducer from './../reducers/inputReducer';
import labelReducer from './../reducers/labelReducer';

const store = createStore();

store.use(inputReducer);
store.use(labelReducer);

export default store;
