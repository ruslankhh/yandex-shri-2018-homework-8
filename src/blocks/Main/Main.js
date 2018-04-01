import bem from './../../utils/createBEM';
import ViewStub from './../ViewStub/ViewStub';
import Log from './../Log/Log';
import './Main.css';

const Main = (props = {}) => {
  const block = 'Main';

  const view = bem({
    block,
    tag: 'main',
    content: [
      {
        block,
        elem: 'container',
        mods: { flex: true },
        content: [ViewStub(), Log()]
      }
    ]
  });

  console.log(view);

  return view;
};

export default Main;
