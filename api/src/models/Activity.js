const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
   id: { 
   primaryKey: true,
   type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
      
    },
 name: {
            type: DataTypes.STRING,
            allowNull: true
          },
difficulty: {
            type: DataTypes.ENUM ("1","2","3","4","5"),
            allowNull: true
          },
duration:{
            type: DataTypes.ENUM ("30 M", "1H", "2H", "3H", "+H"), 
            allowNull: true
          },
season:{
            type: DataTypes.ENUM('Summer', 'Autumn', 'Winter', 'Spring'),
            allowNull: true
          },
 time:{
  type: DataTypes.ENUM("A.M.", "P.M."),
  allowNull:true

          },
   details:{
            type: DataTypes.STRING,
            allowNull:true
          }
    


  });
};
