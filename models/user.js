import { Sequelize } from 'sequelize';
import sequelize from '../config/sequelize.js';

  const User = sequelize.define('users', {
    name: {
      type: Sequelize.STRING(150),
      allowNull: false
    },
    email:{
      type: Sequelize.STRING(150),
      allowNull: false
    },
    phone:{
      type: Sequelize.STRING(10),
      allowNull: false
    },
    status:{
      type: Sequelize.STRING(150),
      allowNull:true
    },
  });

  export default User;




