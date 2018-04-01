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

export default createClassList;
