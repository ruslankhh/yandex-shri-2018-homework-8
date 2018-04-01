import { createElement } from './../../utils/bem';
import NavItem from './../../blocks/NavItem/NavItem';
import './Nav.css';

const Nav = (props = {}) => {
  const block = 'Nav';
  const items = [
    { mods: { active: true }, attr: { href: '/' }, content: 'Flux' },
    { mods: { disabled: true }, attr: { href: '/mvp' }, content: 'MVP' },
    { mods: { disabled: true }, attr: { href: '/mvc' }, content: 'MVC' },
    { mods: { disabled: true }, attr: { href: '/mvvm' }, content: 'MVVM' }
  ];

  return createElement({
    block,
    content: [
      {
        block,
        elem: 'nav',
        content: { tag: 'ul', content: items.map(NavItem) }
      }
    ]
  });
};

export default Nav;
