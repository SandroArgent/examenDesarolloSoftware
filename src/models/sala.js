import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';
import Departamento from './departamento.js';

const Sala = sequelize.define('Product', {
  nombre: { 
    type: DataTypes.STRING, 
    allowNull: true 
  },
  numero: { 
    type: DataTypes.NUMBER,
    allowNull: true 
  },

  departamentoId: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
  },
});

export default Sala;