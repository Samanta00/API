
import express from 'express';
const router = express.Router()
import * as autenticacaoController from '../controller/authenticationController'


// Demanda: Criar uma autenticação de acesso de todas as rotas, porém, apenas para usuários inseridos no identificador.
router.post('/login', autenticacaoController.gerarToken)



export default router 