import { createElement, render } from 'bem';
import Label from './../blocks/Label/Label';

import store from './../store';
import logger from './../logger';

const LabelContainer = (props = {}) => {
  const block = 'LabelContainer';

  const view = createElement({
    block,
    content: [Label({ content: '...', ...props })]
  });

  const labelHandler = (oldState, state) => {
    if (oldState.label !== state.label) {
      view.innerHTML = '';
      view.append(...render(Label({ content: state.label, ...props })));
    }
  };

  const loggedLabelHandler = (oldState, state) => {
    if (oldState.label !== state.label) {
      logger.listen('STORE:', labelHandler, 'input')(oldState, state);
    } else {
      labelHandler(oldState, state);
    }
  };

  store.subscribe(loggedLabelHandler);

  return view;
};

export default LabelContainer;
