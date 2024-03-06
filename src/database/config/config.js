require('dotenv').config();

const options = {
  host: process.env.PGHOST || 'localhost',
  port: process.env.PGPORT || '5432',
  database: 
    `${process.env.PGDATABASE || 'database'}`,
  username: process.env.PGUSER || 'postgres',
  password: process.env.PGPASSWORD || 'password',
  dialect: 'postgres',
  dialectOptions: {
    timezone: 'Z',
    ssl: {
      require: true,
    },
  },
  logging: false,
};

module.exports = options;
