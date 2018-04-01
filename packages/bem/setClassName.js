import createClassList from './createClassList';

const setClassName = (view, props) => {
  const classList = createClassList(props);

  if (classList.length !== 0) {
    view.className = classList.join(' ');
  }
};

export default setClassName;
