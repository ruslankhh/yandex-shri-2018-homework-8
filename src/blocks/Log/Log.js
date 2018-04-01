import bem from './../../utils/createBEM';
import './Log.css';

const Log = (props = {}) => {
  const { output = '...' } = props;
  const block = 'Log';

  return bem({
    block,
    content: [
      { block, tag: 'h3', elem: 'title', content: 'Лог' },
      { block, tag: 'pre', elem: 'output', content: output }
    ]
  });
};

export default Log;
