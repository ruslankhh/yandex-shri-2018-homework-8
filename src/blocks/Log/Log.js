import { createElement } from 'bem';
import './Log.css';

const Log = (props = {}) => {
  const { output = '...' } = props;
  const block = 'Log';

  const view = createElement({
    block,
    content: [
      { block, tag: 'h3', elem: 'title', content: 'Лог' },
      { block, tag: 'pre', elem: 'output', content: output }
    ],
    ...props
  });

  return view;
};

export default Log;
