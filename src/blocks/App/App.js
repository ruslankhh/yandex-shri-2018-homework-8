import bem from './../../utils/createBEM';
import Header from './../Header/Header';
import Main from './../Main/Main';

const App = (props = {}) => {
  const block = 'App';

  return bem({
    block,
    content: [Header(), Main()]
  });
};

export default App;
