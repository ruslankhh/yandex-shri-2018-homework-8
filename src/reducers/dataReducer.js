import { REQUEST_DATA, RECEIVE_DATA } from './../actions';

const dataReducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return { ...state, requestData: action.data };
    case RECEIVE_DATA:
      return { ...state, receiveData: action.data };
    default:
      return state;
  }
};

export default dataReducer;
