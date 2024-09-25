import { DataTypes, Model } from "sequelize";
import { db } from "../db/conection";


//Tipoando o modal
interface AccountAttributes {
    id?: number;  
    name: string;
    value: number; 
    due_date: Date; 
  }

  export class Account extends Model<AccountAttributes> implements AccountAttributes {
    public id!: number;
    public name!: string;
    public value!: number;
    public due_date!: Date;
  }

  Account.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    value: {
      type: DataTypes.DECIMAL, 
    },
    due_date: {
      type: DataTypes.DATE,
    },
  }, {
    sequelize: db,
    modelName: 'Account',
  });
  
