import createViewList from './createViewList';

const render = (value, root) => {
  if (typeof value !== 'undefined') {
    const viewList = createViewList(value);

    if (typeof root !== 'undefined') {
      root.innerHTML = '';
      root.append(...viewList);
    }

    return viewList;
  }
};

export default render;
