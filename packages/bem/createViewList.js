import createElement from './createElement';

const getViewList = value => {
  let viewList = [];

  if (value instanceof Array) {
    viewList = value.map(obj => {
      if (obj instanceof Function) {
        return obj();
      } else if (obj instanceof Element) {
        return obj;
      } else if (obj instanceof Object) {
        return createElement(obj);
      } else {
        return obj;
      }
    });
  } else if (value instanceof Function) {
    viewList = [value()];
  } else if (value instanceof Element) {
    viewList = [value];
  } else if (value instanceof Object) {
    viewList = [createElement(value)];
  } else {
    viewList = [value];
  }

  return viewList;
};

export default getViewList;
