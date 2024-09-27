import { Account }from "../../models/accounts";
import { Request, Response } from 'express';

export const createAccount = async(req: Request, res: Response ) => {
    
    const { name, value, date } : { name: string; value:string; date:string} = req.body;
    
      try{
        
        /* const newAccounts = new Account(req.body); */
        const newAccounts = await Account.create({name, value, date})
        //Sanvalndo o user
        const savedAccount = await newAccounts.save();

        return res.status(200).json({
            message: 'Conta cadastrada',
            result: savedAccount,
          });
      }catch(error) {
        return res.status(500).json({
            message: 'Erro ao cadastrar conta',
            result: error,
          });
      }
};

export const getAccounts = async( res: Response ) => {
    
    try{
      const accounts = await Account.findAll();

      return res.status(200).json({
          message: 'Produtos encontratos com sucesso',
          result: accounts,
        });
    }catch(error) {
        
      return res.status(500).json({
          message: 'Erro ao cadastrar conta',
          result: error,
        });
    }
};

export const dellAccounts = async( res: Response ) => {
    
  try{
    const accounts = await Account.findAll();

    return res.status(200).json({
        message: 'Produtos encontratos com sucesso',
        result: accounts,
      });
  }catch(error) {
      
    return res.status(500).json({
        message: 'Erro ao cadastrar conta',
        result: error,
      });
  }
};

