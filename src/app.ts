import express  from "express";
import bodyParser from "body-parser";
import { routerUser } from './routes/usersRoutes';
import { routerAccount } from './routes/accountRoutes'
import {db} from './db/conection';


const app = express();
app.use(bodyParser.json());
app.use(express.json());


app.use('/users', routerUser);
app.use('/account', routerAccount)

// Conectando ao banco de dados
db.authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados realizada com sucesso!");
  })
  .catch((error) => {
    console.log("Erro ao conectar com o banco de dados: ", error);
  });

//sinroniza os 'models' com o db
db.sync();

//Rodar o servidor
app.listen(1111, ()=>{
    console.log('Servidor no ar');
    
})