import { mergeDeep } from './utils/mergeDeep';

const createStore = () => {
  let state = {};
  let reducers = [];
  let listeners = [];

  const use = reducer => {
    reducers = [...reducers, reducer];
  };

  const getState = () => {
    return mergeDeep({}, state);
  };

  const subscribe = listener => {
    listeners = [...listeners, listener];
  };

  const unsubscribe = listener => {
    listeners = listeners.filter(oldListener => oldListener !== listener);
  };

  const dispatch = action => {
    const oldState = mergeDeep({}, state);

    state = reducers.reduce((state, reducer) => reducer(state, action), state);

    const newState = mergeDeep({}, state);

    listeners.forEach(listener => listener(oldState, newState));
  };

  return {
    use,
    getState,
    subscribe,
    unsubscribe,
    dispatch
  };
};

export default createStore;
