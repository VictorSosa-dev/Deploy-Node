const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env['DATABASE_URL'],
    process.env['DATABASE_USER'],
    process.env['DATABASE_PASSWORD'],
    {
        host: process.env['DATABASE_HOST'],
        dialect: process.env['DATABASE_DIALECT']
    });

module.exports = sequelize;