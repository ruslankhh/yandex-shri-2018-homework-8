import { createElement } from 'bem';
import ViewStubContainer from './../../containers/ViewStubContainer';
import LogContainer from './../../containers/LogContainer';
import './Main.css';

const Main = (props = {}) => {
  const block = 'Main';

  const view = createElement({
    block,
    tag: 'main',
    content: [
      {
        block,
        elem: 'container',
        mods: { flex: true },
        content: [ViewStubContainer, LogContainer]
      }
    ],
    ...props
  });

  return view;
};

export default Main;
