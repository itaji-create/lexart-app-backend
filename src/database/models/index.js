'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const { DATABASE_URL } = process.env;
const db = {};
const pg = require('pg');

const sequelize = new Sequelize(DATABASE_URL, {
  dialectModule: pg
});

fs.readdirSync(__dirname)
  .filter(file => file.endsWith('.js') && file !== 'index.js')
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.values(db).forEach(model => model.associate && model.associate(db));

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;