import  Sequelize from 'sequelize';
export let sequelize = new Sequelize('postgres', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres'
});

