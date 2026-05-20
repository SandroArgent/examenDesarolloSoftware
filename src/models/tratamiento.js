import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';
import Departamento from './departamento.js';

const Tratamiento = sequelize.define('Product', {
  descripcion: { 
    type: DataTypes.TEXT, 
    allowNull: true 
  },
  historial: { 
    type: DataTypes.STRING,
    allowNull: true 
  },

  fecha: { 
    type: DataTypes.DATEONLY, 
    allowNull: true 

  },
  medico: { 
    type: DataTypes.STRING, 
    allowNull: true 

  },
  historialMedicoId: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
  },
  
});

export default Tratamiento;