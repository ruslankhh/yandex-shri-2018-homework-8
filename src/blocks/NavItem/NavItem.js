import { createElement } from './../../utils/bem';
import './NavItem.css';

const NavItem = (props = {}) => {
  const block = 'NavItem';

  return createElement({
    block,
    tag: 'li',
    content: { block, tag: 'a', elem: 'link', ...props }
  });
};

export default NavItem;
