import { createElement } from './../../utils/bem';
import Button from './../Button/Button';
import Input from './../Input/Input';
import Label from './../Label/Label';
import './ViewStub.css';

const ViewStub = (props = {}) => {
  const block = 'ViewStub';

  const view = createElement({
    block,
    content: [
      { block, tag: 'h3', elem: 'title', content: 'Ввод' },
      {
        block,
        elem: 'inputContainer',
        content: [
          Input({ mix: { block, elem: 'input' } }),
          Button({ mix: { block, elem: 'button' }, content: 'Отправить' })
        ]
      },
      { block, tag: 'h3', elem: 'title-2', content: 'Ответ сервера' },
      Label({ mix: { block, elem: 'label' }, content: '...' })
    ],
    ...props
  });

  return view;
};

export default ViewStub;
