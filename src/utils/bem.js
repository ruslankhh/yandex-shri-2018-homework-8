const createElement = ({ block, tag = 'div', elem, mods, mix, attrs, content }) => {
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
    render(content, view);
  }

  return view;
};

const render = (value, root) => {
  if (value instanceof Array) {
    root.append(
      ...value.map(obj => {
        if (obj instanceof Function) {
          return obj();
        } else if (obj instanceof Object) {
          return createElement(obj);
        } else {
          return obj;
        }
      })
    );
  } else if (value instanceof Function) {
    root.append(value());
  } else if (value instanceof Object) {
    root.append(createElement(value));
  } else {
    root.append(value);
  }
};

export default { createElement, render };
