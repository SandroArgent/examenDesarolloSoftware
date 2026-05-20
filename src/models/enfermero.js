import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';
import Departamento from './departamento.js';

const Enfermero = sequelize.define('Product', {
  legajo: { 
    type: DataTypes.TEXT, 
    allowNull: true 
  },
  nombre: { 
    type: DataTypes.STRING,
    allowNull: true 
  },


});

export default Enfermero;