const createClassList = props => {
  const { block, elem, mods, mix } = props;
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
    let classMixList;

    if (mix instanceof Array && typeof mix[0] !== 'undefined') {
      if (typeof mix[0] === 'string') {
        classMixList = mix;
      } else if (typeof mix[0] === 'object') {
        classMixList = mix
          .map(createClassList)
          .reduce((arr1, arr2) => [...arr1, ...arr2]);
      }
    } else if (mix instanceof Object) {
      classMixList = createClassList(mix);
    } else if (typeof mix === 'string') {
      classMixList = [mix];
    }

    classList = [...classList, ...classMixList];
  }

  classList = classList.filter(c => !!c);

  return classList;
};

const createElement = props => {
  const { tag = 'div', attrs, content } = props;
  const view = document.createElement(tag);
  const classList = createClassList(props);

  if (classList.length !== 0) {
    view.className = classList.join(' ');
  }

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
        } else if (obj instanceof Element) {
          return obj;
        } else if (obj instanceof Object) {
          return createElement(obj);
        } else {
          return obj;
        }
      })
    );
  } else if (value instanceof Function) {
    root.append(value());
  } else if (value instanceof Element) {
    root.append(value);
  } else if (value instanceof Object) {
    root.append(createElement(value));
  } else {
    root.append(value);
  }
};

export default { createElement, render };
