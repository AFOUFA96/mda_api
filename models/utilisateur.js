const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('utilisateur', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mail: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mdp: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    id_annee: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'annee',
        key: 'id'
      }
    },
    id_langue: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'langue',
        key: 'id'
      }
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    pseudo: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'utilisateur',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "id_annee",
        using: "BTREE",
        fields: [
          { name: "id_annee" },
        ]
      },
      {
        name: "id_langue",
        using: "BTREE",
        fields: [
          { name: "id_langue" },
        ]
      },
    ]
  });
};
