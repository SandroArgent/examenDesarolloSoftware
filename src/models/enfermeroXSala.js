import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';
import Departamento from './departamento.js';

const enfermeroXSala = sequelize.define('Product', {
  salaId: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
  },
  enfermeroId: { 
    type: DataTypes.INTEGER,
    allowNull: true 
  },

  
});

export default enfermeroXSala;