require('dotenv').config();

const environment = process.env.NODE_ENV || "development";

const suffix = {
  prod: "",
  production: "",
  dev: "-dev",
  development: "-dev",
  test: "-test",
};

const options = {
  host: process.env.PGHOST || 'localhost',
  port: process.env.PGPORT || '5432',
  database: 
    `${process.env.PGDATABASE || 'lexart-database'}${suffix[environment] || suffix.test}`,
  username: process.env.PGUSER || 'postgres',
  password: process.env.PGPASSWORD || '89012345',
  dialect: 'postgres',
  dialectOptions: {
    timezone: 'Z',
    ssl: {
      require: true,
    },
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
