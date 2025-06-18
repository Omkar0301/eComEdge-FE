const ENV = process.env.NEXT_ENV || "development";

const CONFIG = {
  development: {
    BASE_URL: process.env.API_BASE_URL,
  },
  production: {
    BASE_URL: process.env.API_BASE_URL,
  },
  staging: {
    BASE_URL: process.env.API_BASE_URL,
  },
};

const currentConfig = CONFIG[ENV];

export const BASE_URL = currentConfig.BASE_URL;
