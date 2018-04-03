import { createElement } from 'bem';
import sendToServer from './../utils/sendToServer';
import ViewStub from './../blocks/ViewStub/ViewStub';

import store from './../store';
import logger from './../logger';
import { setInputAction, setLabelAction } from './../actions';

const logSetInputAction = logger.decorate('ACTION', setInputAction);
const logSetLabelAction = logger.decorate('ACTION', setLabelAction);
const logDispatch = logger.decorate('DISPATCHER', store.dispatch);

const ViewStubContainer = (props = {}) => {
  const block = 'ViewStubContainer';

  // eslint-disable-next-line
  const onInputInput = function (event) {
    // store.dispatch(setInputAction(this.value));
    logDispatch(logSetInputAction(this.value));
  };

  // eslint-disable-next-line
  const onButtonClick = function (event) {
    event.preventDefault();

    const state = store.getState();

    sendToServer(state.input).then(data => {
      const label = `Сервер принял данные "${data}"`;
      // store.dispatch(setLabelAction(label));
      logDispatch(logSetLabelAction(label));
    });
  };

  // eslint-disable-next-line
  const onInputKeydown = function (event) {
    if (event.keyCode === 13) {
      onButtonClick(event);
    }
  };

  const view = createElement({
    block,
    content: [ViewStub({ onButtonClick, onInputInput, onInputKeydown })]
  });

  return view;
};

export default ViewStubContainer;
