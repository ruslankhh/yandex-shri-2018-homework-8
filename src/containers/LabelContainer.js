import { createElement, render } from './../utils/bem';
import Label from './../blocks/Label/Label';

import store from './../store';

const LabelContainer = (props = {}) => {
  const block = 'LabelContainer';

  const view = createElement({
    block,
    content: [Label({ content: '...', ...props })]
  });

  const state = store.getState();

  const handleChange = () => {
    const newState = store.getState();

    if (state.label !== newState.label) {
      render(Label({ content: newState.label, ...props }), view);
    }
  };

  store.subscribe(handleChange);

  return view;
};

export default LabelContainer;
