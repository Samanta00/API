import express from 'express';

const router = express.Router()

import * as controller from '../controller/customersController'
// const controller = require("../controller/customersController")


const { verificarToken } = require("../middlewares/identificacao")


// Demanda: Criar uma autenticação de acesso de todas as rotas, porém, apenas para usuários inseridos no identificador.


// DEMANDA: visualizar todas as Pessoas cadastradas
router.get("/", controller.getAll)


// DEMANDA: visualizar uma Pessoa cadastrada
router.get("/:id", controller.getPerson)


// DEMANDA: cadastrar uma Pessoa
router.post("/", controller.createRegistration)

// DEMANDA: atualizar dados de uma Pessoa
router.put("/:id", controller.updatePeopleById)

// DEMANDA: excluir uma Pessoa
router.delete("/:id", controller.deletePeopleById)

export default router;