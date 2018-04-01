import { createElement, render } from 'bem';
import Label from './../blocks/Label/Label';

import store from './../store';

const LabelContainer = (props = {}) => {
  const block = 'LabelContainer';

  const view = createElement({
    block,
    content: [Label({ content: '...', ...props })]
  });

  const labelHandler = (oldState, state) => {
    if (oldState.label !== state.label) {
      render(Label({ content: state.label, ...props }), view);
    }
  };

  store.subscribe(labelHandler);

  return view;
};

export default LabelContainer;
