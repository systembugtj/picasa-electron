
const log4js = requireNode('log4js');

const logger = log4js.getLogger();
logger.level = 'debug';
//logger.debug("Some debug messages");

export function debug() {
  logger.debug(...arguments);
}

export function warn() {
  logger.warn(...arguments);
}

export function info() {
  logger.info(...arguments);
}

export function trace() {
  logger.trace(...arguments);
}

export function fatal() {
  logger.fatal(...arguments);
}

export function error() {
  logger.error(...arguments);
}
