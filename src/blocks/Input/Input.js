import { createElement } from 'bem';
import './Input.css';

const Input = (props = {}) => {
  const block = 'Input';

  const view = createElement({
    block,
    tag: 'input',
    ...props
  });

  return view;
};

export default Input;
