const { DataTypes } = require('sequelize');
import sequelize from '../database/postgreConfig';


const Data = sequelize.define('registro_tarefas', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false
  },
  atividade: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false // Esta opção desativa a adição automática dos campos createdAt e updatedAt
  });

module.exports = Data;
