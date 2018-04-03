import { createElement, render } from 'bem';
import Label from './../blocks/Label/Label';

import store from './../store';
import logger from './../logger';

const logRender = logger.listen('PRESENTER:', render, 'input');

const LabelContainer = (props = {}) => {
  const block = 'LabelContainer';

  const view = createElement({
    block,
    content: [Label({ content: '...', ...props })]
  });

  const labelHandler = (oldState, state) => {
    if (oldState.label !== state.label) {
      view.innerHTML = '';
      view.append(...logRender(Label({ content: state.label, ...props })));
    }
  };

  const logLabelHandler = logger.listen('STORE:', labelHandler, 'input');

  store.subscribe(logLabelHandler);

  return view;
};

export default LabelContainer;
