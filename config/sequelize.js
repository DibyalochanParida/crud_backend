import Sequelize from 'sequelize';

const sequelize = new Sequelize('test-db', 'user', 'pass', {
  dialect: 'sqlite',
  host: ':memory:'
});
try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default sequelize;