import { createElement, render } from 'bem';
import Label from './../components/Label/Label';

import store from './../store';
import logger from './../logger';
import { setLabelAction } from './../actions';

const loggedSetLabelAction = logger.listen('VIEW:', setLabelAction, 'input');
const logDispatch = logger.listen('ACTION:', store.dispatch, 'input');

const LabelContainer = (props = {}) => {
  const block = 'LabelContainer';

  const view = createElement({
    block,
    content: [Label({ content: '...', ...props })]
  });

  const dataHandler = (oldState, state) => {
    if (oldState.receiveData !== state.receiveData) {
      logDispatch(loggedSetLabelAction(state.receiveData.data));
    }
  };

  const labelHandler = (oldState, state) => {
    if (oldState.label !== state.label) {
      view.innerHTML = '';
      view.append(...render(Label({ content: state.label, ...props })));
    }
  };

  const loggedDataHandler = logger.listen('STORE:', dataHandler, 'input');
  const loggedLabelHandler = logger.listen('STORE:', labelHandler, 'input');

  store.subscribe(loggedDataHandler);
  store.subscribe(loggedLabelHandler);

  return view;
};

export default LabelContainer;
