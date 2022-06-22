import {request, response, Router} from 'express';

const routes = Router()

const database = ['Nath']

routes.get('/users', (request, response)=>{
    return response.status(200).json(database)
})


routes.post('/users', (request, response) =>{
    console.log(request.body)
})


//STATUS CODE
//200 e 201
//404

//GET - ler os dados
//POST - criar os dados
//PU/PATCH - editar os dados
// DELETE - deletar dados

export {routes}