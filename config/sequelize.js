import Sequelize from 'sequelize';

const sequelize = new Sequelize('sql5522538', 'sql5522538', 'cmabhLUUmY', {
    host: 'sql5.freesqldatabase.com',
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