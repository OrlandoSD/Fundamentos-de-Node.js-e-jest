import { Request, Response } from 'express'
import { database } from '../database.js'

export class UsersController  {
    criarUsuario  (request: Request, response: Response): Response {
        const { name } = request.body
        if(name.length < 1){
            return response.status(403).json({menssagem: 'Não é possivel criar usuários sem um nome'})
        }
        database.push(name)
        return response.status(201).json({'mensagem': `Usuário ${name} criado`})
    }

   // listarUsuario(request, response){
     //   return response.status(200).json(database)
    //}
}

