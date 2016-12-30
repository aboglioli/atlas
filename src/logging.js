import Bunyan from 'bunyan';
import config from './config';

console.log(config);

export default Bunyan.createLogger({
  name: 'atlas',
  streams: config.logs.streams
});