require('./configure-env');

const env = {
  PORT: process.env.APP_PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  REDIS_URL: process.env.REDIS_URL,
  DATABASE_URL: process.env.DATABASE_URL || ''
};

export default env;
