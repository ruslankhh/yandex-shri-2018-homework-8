import { createLogger } from 'logger';

const logger = createLogger();

logger.subscribe(console.log);

export default logger;
