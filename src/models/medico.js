import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';
import Departamento from './departamento.js';

const Medico = sequelize.define('Product', {
  nombre: { 
    type: DataTypes.STRING, 
    allowNull: true 
  },
  matricula: { 
    type: DataTypes.STRING,
    allowNull: true 
  },

  especialidad: { 
    type: DataTypes.STRING, 
    allowNull: true 

  },telefono: { 
    type: DataTypes.STRING, 
    allowNull: true 

  },DepartamentoId: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
  },
  
});

export default Medico;