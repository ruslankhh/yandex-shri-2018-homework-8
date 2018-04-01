import bem from './../../utils/createBEM';
import Nav from './../../blocks/Nav/Nav';
import './Header.css';

const Header = (props = {}) => {
  const block = 'Header';

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
      Nav
    ]
  });
};

export default Header;
