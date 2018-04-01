const setAttributes = (view, props) => {
  const { attrs } = props;

  if (attrs) {
    Object.keys(attrs).forEach(name => {
      view.setAttribute(name, attrs[name]);
    });
  }
};

export default setAttributes;
