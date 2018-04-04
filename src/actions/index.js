import sendToServer from './../utils/sendToServer';
import logger from './../logger';
import store from './../store';

const logSendToServer = logger.listenAsync('SERVER:', sendToServer);
const logDispatch = logger.listen('ACTION:', store.dispatch, 'input');

export const SET_INPUT = 'SET_INPUT';
export const setInputAction = value => ({
  type: SET_INPUT,
  input: value
});

export const SET_LABEL = 'SET_LABEL';
export const setLabelAction = value => ({
  type: SET_LABEL,
  label: value
});

export const RECEIVE_DATA = 'RECEIVE_DATA';
export const receiveData = value => ({
  type: RECEIVE_DATA,
  data: value
});
const logReceiveData = logger.listenAsync('ACTION:', receiveData);

export const REQUEST_DATA = 'REQUEST_DATA';
export const requestData = value => {
  logSendToServer(value).then(data => logDispatch(logReceiveData(data)));

  return {
    type: REQUEST_DATA,
    data: value
  };
};
