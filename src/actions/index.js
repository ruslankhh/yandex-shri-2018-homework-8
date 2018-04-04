export const setInputAction = value => ({
  type: 'SET_INPUT',
  input: value
});

export const setLabelAction = value => ({
  type: 'SET_LABEL',
  label: value
});

export const addLogAction = value => ({
  type: 'ADD_LOG',
  message: value.message,
  data: value.data
});
