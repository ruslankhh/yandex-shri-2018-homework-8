import { createElement } from 'bem';
import sendToServer from './../utils/sendToServer';
import ViewStub from './../blocks/ViewStub/ViewStub';

import store from './../store';
import logger from './../logger';
import { setInputAction, setLabelAction } from './../actions';

const logSetInputAction = logger.listen('VIEW:', setInputAction, 'input');
const logSetLabelAction = logger.listen('VIEW:', setLabelAction, 'input');
const logDispatch = logger.listen('ACTION:', store.dispatch, 'input');
const logSendToServer = logger.listenAsync('SERVER', sendToServer);

const ViewStubContainer = (props = {}) => {
  const block = 'ViewStubContainer';

  // eslint-disable-next-line
  const onInputInput = function (event) {
    // store.dispatch(setInputAction(this.value));
    logDispatch(logSetInputAction(event.target.value));
  };

  // eslint-disable-next-line
  const onButtonClick = function (event) {
    event.preventDefault();

    const state = store.getState();

    logSendToServer(state.input).then(({ data }) => {
      const label = `Сервер принял данные "${data}"`;
      // store.dispatch(setLabelAction(label));
      logDispatch(logSetLabelAction(label));
    });
  };

  // eslint-disable-next-line
  const onInputKeydown = function (event) {
    if (event.keyCode === 13) {
      return onButtonClick(event);
    }
  };

  const logOnInputInput = logger.listen('USER:', onInputInput, 'input');
  const logOnButtonClick = logger.listen('USER:', onButtonClick, 'input');
  const logOnInputKeydown = logger.listen('USER:', onInputKeydown, 'input');

  const view = createElement({
    block,
    content: [
      ViewStub({
        onButtonClick: logOnButtonClick,
        onInputInput: logOnInputInput,
        onInputKeydown: logOnInputKeydown
      })
    ]
  });

  return view;
};

export default ViewStubContainer;
