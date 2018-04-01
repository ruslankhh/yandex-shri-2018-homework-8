import { createElement } from './../../utils/bem';
import './Log.css';

const Log = (props = {}) => {
  const { output = '...' } = props;
  const block = 'Log';

  return createElement({
    block,
    content: [
      { block, tag: 'h3', elem: 'title', content: 'Лог' },
      { block, tag: 'pre', elem: 'output', content: output }
    ]
  });
};

export default Log;
