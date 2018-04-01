import { createElement } from './../utils/bem';
import sendToServer from './../utils/sendToServer';
import ViewStub from './../blocks/ViewStub/ViewStub';

import store from './../store';
import { setLabel, setInput } from './../actions';

const ViewStubContainer = (props = {}) => {
  const block = 'ViewStubContainer';

  // eslint-disable-next-line
  const onInputInput = function (event) {
    store.dispatch(setInput(this.value));
  };

  // eslint-disable-next-line
  const onButtonClick = function (event) {
    const state = store.getState();

    sendToServer(state.input).then(data => store.dispatch(setLabel(data)));
  };

  // eslint-disable-next-line
  const onInputKeydown = function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();

      const state = store.getState();

      sendToServer(state.input).then(data => store.dispatch(setLabel(data)));
    }
  };

  const view = createElement({
    block,
    content: [ViewStub({ onButtonClick, onInputInput, onInputKeydown })]
  });

  return view;
};

export default ViewStubContainer;
