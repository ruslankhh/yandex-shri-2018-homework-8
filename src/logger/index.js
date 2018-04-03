import { createLogger } from 'logger';

const logger = createLogger();

logger.subscribe(message => console.log(message));

export default logger;
