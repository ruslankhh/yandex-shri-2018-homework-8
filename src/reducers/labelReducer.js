import { SET_LABEL } from './../actions';

const labelReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_LABEL:
      return { ...state, label: `Сервер принял данные "${action.label}"` };
    default:
      return state;
  }
};

export default labelReducer;
