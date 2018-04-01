import createViewList from './createViewList';

const render = (value, root) => {
  if (typeof value !== 'undefined') {
    const viewList = createViewList(value);

    root.innerHTML = '';
    root.append(...viewList);
  }
};

export default render;
