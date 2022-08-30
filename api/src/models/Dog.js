const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true ,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      defaultValue: "https://i.pinimg.com/736x/9a/ca/69/9aca6916ed98237d08c956e319bc51e0.jpg",
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false ,
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false ,
    },
    lifeSpan: {
      type: DataTypes.STRING,
    },
    createdInDB: {
      type: DataTypes.STRING,
      defaultValue: true
    },
  },
  {
    timestamps:false
  }
  );
};
