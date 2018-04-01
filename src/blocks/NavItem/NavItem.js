import { createElement } from './../../utils/bem';
import './NavItem.css';

const NavItem = (props = {}) => {
  const block = 'NavItem';

  const view = createElement({
    block,
    tag: 'li',
    content: { block, tag: 'a', elem: 'link', ...props }
  });

  return view;
};

export default NavItem;
