import addEventListeners from './addEventListeners';
import setAttributes from './setAttributes';
import setClassName from './setClassName';
import render from './render';

const createElement = props => {
  const { tag = 'div', content } = props;
  const view = document.createElement(tag);

  setClassName(view, props);
  setAttributes(view, props);
  addEventListeners(view, props);
  render(content, view);

  return view;
};

export default createElement;
