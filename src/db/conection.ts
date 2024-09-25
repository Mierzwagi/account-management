import { Sequelize } from 'sequelize';

//Criando a instancia e conectando ao Banco
export const db = new Sequelize('account-management', 'root', 'root', {
    //especificando o banco
    dialect: 'mysql'
});
