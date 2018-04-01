import { createElement } from './../../utils/bem';
import Button from './../Button/Button';
import Input from './../Input/Input';
import LabelContainer from './../../containers/LabelContainer';
import './ViewStub.css';

const ViewStub = (props = {}) => {
  const {
    onButtonClick: onClick,
    onInputInput: onInput,
    onInputKeydown: onKeydown
  } = props;
  const block = 'ViewStub';

  const view = createElement({
    block,
    content: [
      { block, tag: 'h3', elem: 'title', content: 'Ввод' },
      {
        block,
        elem: 'inputContainer',
        content: [
          Input({ mix: { block, elem: 'input' }, onInput, onKeydown }),
          Button({ mix: { block, elem: 'button' }, content: 'Отправить', onClick })
        ]
      },
      { block, tag: 'h3', elem: 'title-2', content: 'Ответ сервера' },
      LabelContainer({ mix: { block, elem: 'label' } })
    ],
    ...props
  });

  return view;
};

export default ViewStub;
