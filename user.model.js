// import db from "./db.auth.js"
// const {sequelizeInstance,DataTypes} = db


function User(sequelizeInstance,DataTypes) {
    sequelizeInstance.define('User', {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING
      // allowNull defaults to true
    }
  }, {
    // Other model options go here
  });
  return User
}

  export default User;
  

