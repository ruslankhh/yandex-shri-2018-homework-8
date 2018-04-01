import { createElement } from './../../utils/bem';
import ViewStubContainer from './../../containers/ViewStubContainer';
import Log from './../Log/Log';
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
        content: [ViewStubContainer, Log]
      }
    ],
    ...props
  });

  return view;
};

export default Main;
