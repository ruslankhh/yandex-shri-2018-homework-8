const createLogger = () => {
  let listeners = [];

  const listen = (message, func, type = 'output') => (...input) => {
    if (type === 'input') {
      listeners.forEach(listener => listener(message, input));
    }

    const output = func(...input);

    if (type === 'output') {
      listeners.forEach(listener => listener(message, output));
    }

    return output;
  };

  const listenAsync = (message, func, type = 'output') => (...input) => {
    if (type === 'input') {
      listeners.forEach(listener => listener(message, input));
    }

    return func(...input).then(output => {
      if (type === 'output') {
        listeners.forEach(listener => listener(message, output));
      }

      return output;
    });
  };

  const subscribe = listener => {
    listeners = [...listeners, listener];
  };

  const unsubscribe = listener => {
    listeners = listeners.filter(oldListener => oldListener !== listener);
  };

  return {
    listen,
    listenAsync,
    subscribe,
    unsubscribe
  };
};

export default createLogger;
