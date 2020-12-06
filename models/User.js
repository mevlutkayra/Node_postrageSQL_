 
 
const { Sequelize, Model, DataTypes } = require("sequelize");

//Connect to DB
//postgres://user:pass@example.com:5432/dbname

//const sequelize = new Sequelize('postgres://postgres:Ekim2019@localhost:5432/nodedatabase');

const { DB_USER_NAME, DB_PASWORD, DB_HOSTNAME, DB_PORT, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER_NAME}:${DB_PASWORD}@${DB_HOSTNAME}:${DB_PORT}/${DB_NAME}`
);

sequelize
  .authenticate()
  .then(() => console.log("Sucess Bağlandı"))
  .catch((err) => console.log("Error" + err));

const UserModel = sequelize.define(
  "recruiter",
  {
    // Model attributes are defined here

    //id firstName lastName createdAt updatedAt
    firstName: {
      type: DataTypes.STRING,
      allowNull:false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull:false
     
    },
  },
  {
    freezeTableName:true
    // Other model options go here
  }
);
module.exports= UserModel;
