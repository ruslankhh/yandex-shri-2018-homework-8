import { createElement } from 'bem';
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
