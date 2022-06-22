import { Router } from 'express';
import { usersController } from '../controllers/usersController';

const database = []

const routes = Router()



routes.get('/users', usersController.listarUsuario)


routes.post('/users', usersController.criarUsuario)

export {routes}

