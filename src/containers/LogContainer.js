import { createElement, render } from 'bem';
import Log from './../blocks/Log/Log';

import store from './../store';
import logger from './../logger';
import { addLogAction } from './../actions';

const LogContainer = (props = {}) => {
  const block = 'LogContainer';

  const view = createElement({
    block,
    content: [Log({ output: '...', ...props })]
  });

  logger.subscribe((message, data) => {
    store.dispatch(addLogAction({ message, data }));
  });

  const logHandler = (oldState, state) => {
    if (oldState.log !== state.log) {
      const output = state.log.join('\n');

      view.innerHTML = '';
      view.append(...render(Log({ output, ...props })));
    }
  };

  store.subscribe(logHandler);

  return view;
};

export default LogContainer;
