import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';
import Departamento from './departamento.js';

const CitaMedica = sequelize.define('Product', {
  fecha: { 
    type: DataTypes.STRING, 
    allowNull: true 
  },
  hora: { 
    type: DataTypes.STRING,
    allowNull: true 
  },

  paciente: { 
    type: DataTypes.STRING, 
    allowNull: true 

  },
  pacienteId: { 
    type: DataTypes.INTEGER, 
    allowNull: true 

  },
   departamentoId: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
  },
   medicoId: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
  },
  
 
  
});

export default CitaMedica;