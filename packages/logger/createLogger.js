const createLogger = () => {
  let listeners = [];

  const decorate = (message, func) => (...input) => {
    // console.log('[INPUT]', input);

    const inputString = input.map(arg => JSON.stringify(arg)).join(', ');
    const message1 = `${message} input: ${inputString}`;

    listeners.forEach(listener => listener(message1));

    const output = func(...input);
    // console.log('[OUTPUT]', output);

    if (typeof output !== 'undefined') {
      const outputString = JSON.stringify(output);
      const message2 = `${message} output: ${outputString}`;

      listeners.forEach(listener => listener(message2));

      return output;
    }
  };

  const subscribe = listener => {
    listeners = [...listeners, listener];
  };

  return {
    decorate,
    subscribe
  };
};

export default createLogger;
