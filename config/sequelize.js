import Sequelize from 'sequelize';

const sequelize = new Sequelize('usersdb', 'root', 'root', {
    logging:false,
    dialect: 'mysql',
  });
  try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } 

export default sequelize;