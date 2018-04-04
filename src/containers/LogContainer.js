import { createElement, render } from 'bem';
import toLog from './../utils/toLog';
import Log from './../blocks/Log/Log';

import logger from './../logger';

const LogContainer = (props = {}) => {
  const block = 'LogContainer';
  let log = [];

  const view = createElement({
    block,
    content: [Log({ output: '...', ...props })]
  });

  logger.subscribe((message, data) => {
    const logMessage = `${message} ${toLog(data)}`;

    log = [...log, logMessage];

    const output = log.join('\n');

    view.innerHTML = '';
    view.append(...render(Log({ output, ...props })));
  });

  return view;
};

export default LogContainer;
