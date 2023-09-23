import { createClient } from 'redis';
import logger from './logger';
import config from '../config';

let redisClient = createClient({
  url: config.redis.url
});

redisClient.on(`error`, (err) => logger.error(`redis error`, err));

redisClient.on(`connect`, () => logger.info(`redis connedted`));

const connectRedis = async (): Promise<void> => {
  await redisClient.connect();
};

export const RedisClient = { connectRedis };
