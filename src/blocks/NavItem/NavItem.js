import bem from './../../utils/createBEM';
import './NavItem.css';

const NavItem = (props = {}) => {
  const block = 'NavItem';

  return bem({
    block,
    tag: 'li',
    content: { block, tag: 'a', elem: 'link', ...props }
  });
};

export default NavItem;
