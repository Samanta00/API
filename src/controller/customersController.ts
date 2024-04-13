const dataSchema = require('../models/customersSchema')
const dataNewUser = require('../models/newUserSchema')
const jwt = require('jsonwebtoken')
const SECRET = 'ellen'

import { Request, Response } from 'express'



//Método para visualizar todos os cadastros
export const getAll = async (req: Request, res: Response) => {
    try {
        const notes = await dataSchema.findAll()
        console.log("valores de notes", notes)
        return res.status(200).json(notes)
    }
    catch (err: unknown) {
        const error = err as String
        res.status(500).json({ message: error })

    }
}


export const getPerson = async (req: Request, res: Response) => {
    try {
        const personId = req.params.id;
        const person = await dataSchema.findByPk(personId);
        
        if (person) {
            return res.status(200).json(person);
        } else {
            return res.status(404).json({ message: "Pessoa não encontrada" });
        }
    } catch (err: unknown) {
        const error = err as string;
        console.log("Erro ao buscar pessoa:", error);
        return res.status(500).json({ message: "Erro ao buscar pessoa" });
    }
}


// criar método para cadastrar uma Pessoa 
export const createRegistration = async (req: Request, res: Response) => {
    try {
        const { descricao, atividade} = req.body

        if (!descricao.trim() || descricao== undefined || descricao.length <= 1 || descricao == "") {
            console.log('Nome está sendo Passado indefinidamente.')
        }
        else if (!atividade.trim() || atividade == undefined || atividade.length < 1 || atividade == "") {
            console.log('Endereço está sendo passado indefinidamente.')
        }
        else {
            const newNote = new dataSchema({
                descricao: descricao,
                atividade: atividade
            })

            const savedNote = await newNote.save()
            res.status(201).json(savedNote)
        }


    } catch (err: unknown) {
        const error = err as String
        res.status(500).json({ message: error })

    }
}



// criar método para atualizar informações de uma Pessoa
export const updatePeopleById = async (req: Request, res: Response) => {
    try {
        const personId = req.params.id;
        const findPeople = await dataSchema.findByPk(personId);
        console.log(findPeople)

        if (findPeople) {
            findPeople.descricao = req.body.descricao || findPeople.descricao
            findPeople.atividade = req.body.atividade || findPeople.atividade


        }
        const savedPeople = await findPeople.save()
        console.log('APÓS ATUALIZAÇÃO', savedPeople)

        res.status(200).json({
            message: "Usuário atualizado com sucesso!!!!",
            savedPeople
        })

    } catch (error) {

    }
}

//Método para deletar pessoa pelo identificador
export const deletePeopleById = async (req: Request, res: Response) => {
    try {
        const personId = req.params.id;
        const peopleFound = await dataSchema.findByPk(personId);

        await peopleFound.destroy()

        res.status(200).json({
            mensagem: `Pessoa com o email:'${peopleFound.email}' deletada com sucesso!`
        })

    }
    catch (err: unknown) {
        const error = err as String
        res.status(500).json({ message: error })

    }
}



