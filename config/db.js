const { Sequelize } = require('sequelize');

if(process.env['NODE_ENV'] === 'production'){
    module.exports = new Sequelize(process.env['DATABASE_URL']);
}else{
    module.exports =  new Sequelize(
        process.env['DATABASE_URL'],
        process.env['DATABASE_USER'],
        process.env['DATABASE_PASSWORD'],
        {
            host: process.env['DATABASE_HOST'],
            dialect: process.env['DATABASE_DIALECT']
        });
}