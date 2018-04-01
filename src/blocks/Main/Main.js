import { createElement } from './../../utils/bem';
import ViewStub from './../ViewStub/ViewStub';
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
        content: [ViewStub, Log]
      }
    ]
  });

  return view;
};

export default Main;