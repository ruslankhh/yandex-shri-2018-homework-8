import { createElement } from './../../utils/bem';
import Header from './../Header/Header';
import Main from './../Main/Main';

const App = (props = {}) => {
  const block = 'App';

  return createElement({
    block,
    content: [Header, Main]
  });
};

export default App;
