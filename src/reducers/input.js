const input = (state = '', action) => {
  switch (action.type) {
    case 'SET_INPUT':
      return action.input;
    default:
      return state;
  }
};

export default input;
