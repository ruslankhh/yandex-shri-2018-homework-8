import { createElement } from 'bem';
import sendToServer from './../utils/sendToServer';
import ViewStub from './../blocks/ViewStub/ViewStub';

import store from './../store';
import logger from './../logger';
import { setInputAction, setLabelAction } from './../actions';

const loggedSetInputAction = logger.listen('VIEW:', setInputAction, 'input');
const loggedSetLabelAction = logger.listen('VIEW:', setLabelAction, 'input');
const loggedDispatch = logger.listen('ACTION:', store.dispatch, 'input');
const loggedSendToServer = logger.listenAsync('SERVER', sendToServer);

const ViewStubContainer = (props = {}) => {
  const block = 'ViewStubContainer';

  // eslint-disable-next-line
  const onInputInput = function (event) {
    // store.dispatch(setInputAction(this.value));
    loggedDispatch(loggedSetInputAction(event.target.value));
  };

  // eslint-disable-next-line
  const onButtonClick = function (event) {
    event.preventDefault();

    const state = store.getState();

    loggedSendToServer(state.input).then(({ data }) => {
      // store.dispatch(setLabelAction(label));
      loggedDispatch(loggedSetLabelAction(data));
    });
  };

  // eslint-disable-next-line
  const onInputKeydown = function (event) {
    if (event.keyCode === 13) {
      return onButtonClick(event);
    }
  };

  const loggedOnInputInput = logger.listen('USER:', onInputInput, 'input');
  const loggedOnButtonClick = logger.listen('USER:', onButtonClick, 'input');
  const loggedOnInputKeydown = logger.listen('USER:', onInputKeydown, 'input');

  const view = createElement({
    block,
    content: [
      ViewStub({
        onButtonClick: loggedOnButtonClick,
        onInputInput: loggedOnInputInput,
        onInputKeydown: loggedOnInputKeydown
      })
    ]
  });

  return view;
};

export default ViewStubContainer;
