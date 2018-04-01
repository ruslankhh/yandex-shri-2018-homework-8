import { createElement } from './../../utils/bem';
import './ViewStub.css';

const ViewStub = (props = {}) => {
  const { label = '...' } = props;
  const block = 'ViewStub';

  const view = createElement({
    block,
    content: [
      { block, tag: 'h3', elem: 'title', content: 'Ввод' },
      {
        block,
        elem: 'inputContainer',
        content: [
          { block, tag: 'input', elem: 'input' },
          { block, tag: 'button', elem: 'button', content: 'Отправить' }
        ]
      },
      { block, tag: 'h3', elem: 'title-2', content: 'Ответ сервера' },
      { block, elem: 'label', content: label }
    ]
  });

  return view;
};

export default ViewStub;
