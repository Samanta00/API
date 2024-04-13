const { DataTypes } = require('sequelize');
import sequelize from '../database/postgreConfig';

const DataNewUser = sequelize.define('cadastros_novos_clientes', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  timestamps: false // Esta opção desativa a adição automática dos campos createdAt e updatedAt
});

module.exports = DataNewUser;
