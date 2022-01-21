import { NodeEnv } from "../ts/config/NodeEnv";

interface AppConfig {
  NODE_ENV: NodeEnv;
  RUN_CRON_STARTUP: string;
  PRODUCTION_PORT: string;
  DEVELOPMENT_PORT: string;
  SSL_CERT: string;
  SSL_KEY: string;
  SECRET: string;
  EXPIRES: string;
}

export default {
  SECRET: process.env.SECRET,
  EXPIRES: process.env.EXPIRES,
  NODE_ENV: process.env.NODE_ENV,
  RUN_CRON_STARTUP: process.env.RUN_CRON_STARTUP,
  PRODUCTION_PORT: process.env.PRODUCTION_PORT,
  DEVELOPMENT_PORT: process.env.DEVELOPMENT_PORT,
  SSL_CERT: process.env.SSL_CERT,
  SSL_KEY: process.env.SSL_KEY,
} as AppConfig;
