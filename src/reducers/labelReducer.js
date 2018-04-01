const labelReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_LABEL':
      return { ...state, label: action.label };
    default:
      return state;
  }
};

export default labelReducer;
