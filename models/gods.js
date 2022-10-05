const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const God = sequelize.define('God', {
    name: {
        type: DataTypes.STRING()
    },
    symbol: {
        type: DataTypes.STRING()
    }
});

module.exports = God;