import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';
import Departamento from './departamento.js';

const Cama = sequelize.define('Product', {
  numero: { 
    type: DataTypes.NUMBER, 
    allowNull: true 
  },
  estado: { 
    type: DataTypes.ENUM("libre", "ocupada", "en mantenimiento"),
    allowNull: true 
  },

  fechaAsignacion: { 
    type: DataTypes.DATEONLY, 
    allowNull: true 

  },telefono: { 
    type: DataTypes.STRING, 
    allowNull: true 

  },pacienteId: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
  },
  salaId: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
  },
  
});

export default Cama;