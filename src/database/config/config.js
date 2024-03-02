require('dotenv').config();

const environment = process.env.NODE_ENV || "test";

const suffix = {
  prod: "",
  production: "",
  dev: "-dev",
  development: "-dev",
  test: "-test",
};

const options = {
  host: process.env.HOSTNAME || 'localhost',
  port: process.env.PGPORT || '5432',
  database: 
    `${process.env.DATABASE || 'lexart-database'}${suffix[environment] || suffix.test}`,
  username: process.env.USER || 'postgres',
  password: process.env.PASSWORD || '89012345',
  dialect: 'postgres',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

module.exports = {
  development: {
    ...options,
  },
  test: {
    ...options,
  },
  production: {
    ...options,
  },
};
