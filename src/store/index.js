import { createStore } from 'flux';
import reducer from './../reducers';
import logger from './../logger';

const loggedReducer = (state, action) => {
  if (action.type !== 'ADD_LOG') {
    return logger.listen('DISPATHER:', reducer)(state, action);
  } else {
    return reducer(state, action);
  }
};

const store = createStore();

store.use(loggedReducer);

export default store;
