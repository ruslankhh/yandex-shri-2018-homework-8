import { createElement } from 'bem';
import ViewStub from './../components/ViewStub/ViewStub';

import store from './../store';
import logger from './../logger';
import { requestData, setInputAction } from './../actions';

const loggedSetInputAction = logger.listen('VIEW:', setInputAction, 'input');
const loggedRequestData = logger.listen('VIEW:', requestData, 'input');
const logDispatch = logger.listen('ACTION:', store.dispatch, 'input');

const ViewStubContainer = (props = {}) => {
  const block = 'ViewStubContainer';

  // eslint-disable-next-line
  const onInputInput = function (event) {
    logDispatch(loggedSetInputAction(event.target.value));
  };

  // eslint-disable-next-line
  const onButtonClick = function (event) {
    event.preventDefault();

    const state = store.getState();

    logDispatch(loggedRequestData(state.input));
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
