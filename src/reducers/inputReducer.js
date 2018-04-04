import { SET_INPUT } from './../actions';

const inputReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_INPUT:
      return { ...state, input: action.input };
    default:
      return state;
  }
};

export default inputReducer;
