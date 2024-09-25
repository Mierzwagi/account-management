import {User}from "../../models/user";
import { Request, Response } from 'express';

export const signUpUser = async(req: Request, res: Response ) => {

    const { email, name }: { email: string; name: string; } = req.body;

      try{
        //Criando um novo usuário
        const newUser = await User.create({name, email})

        //verificando se ele já existe
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
          return res.status(400).json({
            message: 'Usuário já existe!',
          });
        }

        //Sanvalndo o user
        const savedUser = await newUser.save();

        return res.status(200).json({
            message: 'Usuário cadastrado com sucesso!',
            result: savedUser,
          });
      }catch(error) {
        return res.status(500).json({
            message: 'Erro ao cadastrar o Usuário!',
            result: error,
          });
      }
};

export const signInUser = async(req: Request, res: Response ) => {

    const { email, name }: { email: string; name: string; } = req.body;

      try{
        //Buscando o usuário
        const user = await User.findOne({ where: {name, email}})

        if (!user) {
          return res.status(401).json({
            message: 'Usuário não cadastrado!',
          });
        }      

        return res.status(200).json({
            message: 'Login realizado!',
            user
          });
      }catch(error) {
        return res.status(500).json({
            message: 'Erro ao fazer login!',
            result: error,
          });
      }
};

