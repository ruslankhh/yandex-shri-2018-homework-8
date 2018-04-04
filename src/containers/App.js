import { createElement } from 'bem';
import Header from './../components/Header/Header';
import Main from './../components/Main/Main';

const App = (props = {}) => {
  const block = 'App';

  const view = createElement({
    block,
    content: [Header, Main],
    ...props
  });

  return view;
};

export default App;
