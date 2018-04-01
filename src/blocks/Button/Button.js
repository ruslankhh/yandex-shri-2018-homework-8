import { createElement } from './../../utils/bem';
import './Button.css';

const Button = (props = {}) => {
  const block = 'Button';

  const view = createElement({
    block,
    tag: 'button',
    content: 'Button',
    ...props
  });

  return view;
};

export default Button;
