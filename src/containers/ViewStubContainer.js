import { createElement } from 'bem';
import sendToServer from './../utils/sendToServer';
import ViewStub from './../blocks/ViewStub/ViewStub';

import store from './../store';
import { setLabelAction, setInputAction } from './../actions';

const ViewStubContainer = (props = {}) => {
  const block = 'ViewStubContainer';

  // eslint-disable-next-line
  const onInputInput = function (event) {
    store.dispatch(setInputAction(this.value));
  };

  // eslint-disable-next-line
  const onButtonClick = function (event) {
    event.preventDefault();

    const state = store.getState();

    sendToServer(state.input).then(data => {
      const label = `Сервер принял данные "${data}".`;

      console.log(label);
      store.dispatch(setLabelAction(label));
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
