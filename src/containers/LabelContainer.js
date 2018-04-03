import { createElement, render } from 'bem';
import Label from './../blocks/Label/Label';

import store from './../store';
import logger from './../logger';

const logRender = logger.decorate('VIEW', render);

const LabelContainer = (props = {}) => {
  const block = 'LabelContainer';

  const view = createElement({
    block,
    content: [Label({ content: '...', ...props })]
  });

  const labelHandler = (oldState, state) => {
    if (oldState.label !== state.label) {
      logRender(Label({ content: state.label, ...props }), view);
    }
  };

  store.subscribe(labelHandler);

  return view;
};

export default LabelContainer;
