


import superTest from 'supertest'
import app from '../app'
import * as jwt from 'jsonwebtoken'

const { User } = require('../models/customersSchema')


const SECRET = '123'

describe("teste de rotas", () => {
    let token = '';


    beforeAll(async () => {
        token = jwt.sign({ userId: 1 }, SECRET, { expiresIn: "30d" });
    })

    test('GET - Retorna lista informacional de Pessoas cadastradas na API com autenticação', async () => {
        const response = await superTest(app).get('/customers/').set('authorization', 'Bearer ' + token)
        expect(response.statusCode).toEqual(200)

    })
    test('GET - Retorna API com erro de autenticação', async () => {
        const response = await superTest(app).get('/customers/')
        expect(response.statusCode).toEqual(401)
        expect(response.body).toHaveProperty('message')
    })

    test('POST - Método para Criar Pessoas na API com autenticação', async () => {
        const response = await superTest(app).post("/customers")

            .send({
                nome: 'Samanta',
                email: 'Ellen.samanta@outlook.com',
                telefone: '81981311245',
                endereco: 'rua mergulhador roberto uchoa',
                cpf: '45139845125'
            }).set('authorization', 'Bearer ' + token)
        expect(response.statusCode).toEqual(201)
    })

    test('POST - Método para chamar API sem autenticação', async () => {
        const response = await superTest(app)
            .post("/customers/")
            .send({
                nome: 'Samanta',
                email: 'Ellen.samanta@outlook.com',
                telefone: '81981311245',
                endereco: 'rua mergulhador roberto uchoa',
                cpf: '5652398420'
            })
        expect(response.statusCode).toEqual(401)
    })

    test("PUT - Método para atualizar cadastro da api com usuário Autenticado", async () => {
        const pessoa = {
            id: 1,
            nome: 'Samanta',
            email: 'Ellen.samanta@outlook.com',
            telefone: '81981311245',
            endereco: 'rua mergulhador roberto uchoa',
            cpf: '5652398420'
        }

        superTest(app)
            .put("/customers/" + pessoa.id)
            .send(pessoa)
            .set('authorization', 'Bearer ' + token)

            .expect(200)
            .expect(res => {
                expect(res.body.nome).toBe("nome atualizado")
                expect(res.body.email).toBe("novoemail@email.com")
            })
            .end(err => {
                if (err) return err

            })
    })


    test("DELETE - Método para deletar cadastro da api com usuário autenticado", async () => {
        const pessoa = {
            id: 1,
            nome: 'Samanta',
            email: 'Ellen.samanta@outlook.com',
            telefone: '81981311245',
            endereco: 'rua mergulhador roberto uchoa',
            cpf: '5652398420'
        }

        superTest(app)
            .put("/customers/" + pessoa.id)
            .send(pessoa)
            .set('authorization', 'Bearer ' + token)

            .expect(200)
            .end(err => {
                if (err) return err

            })
    })
})














