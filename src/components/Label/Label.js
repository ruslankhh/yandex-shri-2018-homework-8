import { createElement } from 'bem';

const Label = (props = {}) => {
  const block = 'Label';

  const view = createElement({ block, ...props });

  return view;
};

export default Label;
