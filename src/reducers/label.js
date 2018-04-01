const label = (state = '', action) => {
  switch (action.type) {
    case 'SET_LABEL':
      return action.label;
    default:
      return state;
  }
};

export default label;
