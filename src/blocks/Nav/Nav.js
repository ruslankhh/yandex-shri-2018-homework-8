import { createElement } from './../../utils/bem';
import NavItem from './../../blocks/NavItem/NavItem';
import './Nav.css';

const Nav = (props = {}) => {
  const block = 'Nav';
  const items = [
    { mods: { active: true }, attrs: { href: '/' }, content: 'Flux' },
    { mods: { disabled: true }, attrs: { href: '/mvp' }, content: 'MVP' },
    { mods: { disabled: true }, attrs: { href: '/mvc' }, content: 'MVC' },
    { mods: { disabled: true }, attrs: { href: '/mvvm' }, content: 'MVVM' }
  ];

  const view = createElement({
    block,
    content: {
      tag: 'ul',
      content: items.map(NavItem)
    }
  });

  return view;
};

export default Nav;
