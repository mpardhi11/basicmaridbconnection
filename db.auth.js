import { Sequelize, DataTypes } from "sequelize";
import User from "./user.model.js";
const sequelizeInstance = new Sequelize(
    'mohit',
    "root",
    'root',
    {
        host: 'localhost',
        port: 3306,
        dialect: "mariadb",
        pool: { max: 5, min: 0, idle: 10000 },
    }
);

sequelizeInstance
    .authenticate()
    .then(() => {
        console.log("DataBase Connected /MySQL/");
    })
    .catch((error) => {
        console.log("Error ------ >>>>>>>", error.original.code);
        console.log("Messsage ------ >>>>>", error.original.sqlMessage);
    });
const db = {};

db.Sequelize = Sequelize;
db.sequelizeInstance = sequelizeInstance;

db.user= User(sequelizeInstance,DataTypes)


db.sequelizeInstance
    .sync() //{ force: true }
    .then(() => {
        console.log(`yes DB re-sync`);
    })
    .catch((error) => {
        console.log("error", error);
    });

export default db;
