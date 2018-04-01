import { createElement } from './../../utils/bem';
import Nav from './../../blocks/Nav/Nav';
import './Header.css';

const Header = (props = {}) => {
  const block = 'Header';

  return createElement({
    block,
    content: [
      {
        block,
        tag: 'a',
        elem: 'title',
        attrs: { href: '/' },
        content: 'Архитектура приложения'
      },
      Nav
    ]
  });
};

export default Header;
