const createBEM = ({ block, tag = 'div', elem, mods, mix, attrs, content }) => {
  const bem = createBEM;
  const view = document.createElement(tag);
  let classList = [];
  let prefix;

  if (elem) {
    prefix = `${block}__${elem}`;
    classList = [...classList, prefix];
  } else {
    prefix = block;
    classList = [...classList, prefix];
  }

  if (mods) {
    const classModList = Object.keys(mods).map(mod => `${prefix}--${mod}-${mods[mod]}`);
    classList = [...classList, ...classModList];
  }

  if (mix) {
    classList = [...classList, ...[].concat(mix)];
  }

  view.className = classList.join(' ');

  if (attrs) {
    Object.keys(attrs).forEach(name => {
      view.setAttribute(name, attrs[name]);
    });
  }

  if (content) {
    if (content instanceof Array) {
      view.append(
        ...content.map(obj => {
          if (obj instanceof Element) {
            return obj;
          } else {
            return bem(obj);
          }
        })
      );
    } else if (content instanceof Object) {
      view.append(bem(content));
    } else {
      view.append(content);
    }
  }

  return view;
};

export default createBEM;
