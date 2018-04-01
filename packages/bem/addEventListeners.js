const addEventListeners = (view, props) => {
  const { onChange, onClick, onInput, onKeydown } = props;

  if (onChange) {
    view.onchange = onChange;
  }

  if (onClick) {
    view.onclick = onClick;
  }

  if (onInput) {
    view.oninput = onInput;
  }

  if (onKeydown) {
    view.onkeydown = onKeydown;
  }
};

export default addEventListeners;
