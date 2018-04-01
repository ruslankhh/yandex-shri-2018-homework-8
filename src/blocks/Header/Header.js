import bem from './../../utils/createBEM';
import './Header.css';

const Header = (props = {}) => {
  const block = 'Header';
  const links = [
    { block, tag: 'a', elem: 'navLink', attrs: { href: '/' }, content: 'Flux' },
    { block, tag: 'a', elem: 'navLink', attrs: { href: '/mvp' }, content: 'MVP' },
    { block, tag: 'a', elem: 'navLink', attrs: { href: '/mvc' }, content: 'MVC' },
    { block, tag: 'a', elem: 'navLink', attrs: { href: '/mvvm' }, content: 'MVVM' }
  ];
  links.slice(1).forEach(props => {
    props.mods = { disabled: true };
  });

  return bem({
    block,
    content: [
      {
        block,
        tag: 'a',
        elem: 'title',
        attrs: { href: '/' },
        content: 'Архитектура приложения'
      },
      {
        block,
        elem: 'nav',
        content: [
          {
            tag: 'ul',
            content: links.map(prop => ({
              block,
              tag: 'li',
              elem: 'navItem',
              content: prop
            }))
          }
        ]
      }
    ]
  });
};

export default Header;
