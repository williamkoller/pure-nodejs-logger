import fs from 'fs';
import { Console } from 'node:console';

const outputLog = fs.createWriteStream('./output.log');
const errorLog = fs.createWriteStream('./error.log');

const logger = new Console({
  stdout: outputLog,
  stderr: errorLog,
  groupIndentation: 5,
});

const count = 5;

logger.log('count: %d', count);
logger.error('An Error!');

logger.group('Custom logger group.');
logger.log('Inside group');
logger.groupEnd();
