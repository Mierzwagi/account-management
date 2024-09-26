
import { DataTypes } from "sequelize";
import { db } from "../db/conection";

export const Account = db.define("Account", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  value: {
    type: DataTypes.STRING,
  },
  date: {
    type: DataTypes.STRING,
  },
});

