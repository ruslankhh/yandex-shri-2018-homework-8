const toLog = object => {
  if (object instanceof Array) {
    return object
      .map(object => {
        if (object instanceof window.Event) {
          return object.toString();
        } else {
          return JSON.stringify(object);
        }
      })
      .toString()
      .replace(/(,|:)/g, '$1 ');
  } else {
    return JSON.stringify(object).replace(/(,|:)/g, '$1 ');
  }
};

export default toLog;
