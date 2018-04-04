import toLog from './../utils/toLog';

const logReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_LOG':
      return {
        ...state,
        log: state.log
          ? [...state.log, `${action.message} ${toLog(action.data)}`]
          : [`${action.message} ${toLog(action.data)}`]
      };
    default:
      return state;
  }
};

export default logReducer;
