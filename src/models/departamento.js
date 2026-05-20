import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Departamento = sequelize.define('Product', {
  nombre: { 
    type: DataTypes.STRING, 
    allowNull: true 
  },
  jefe: { 
    type: DataTypes.STRING,
    allowNull: true 
  }
});

export default Departamento;