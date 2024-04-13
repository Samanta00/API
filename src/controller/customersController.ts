const dataSchema = require('../models/customersSchema')
const dataNewUser = require('../models/newUserSchema')
const jwt = require('jsonwebtoken')
const SECRET = 'ellen'

import { Request, Response } from 'express'



//Método para visualizar todos os cadastros
export const getAll = async (req: Request, res: Response) => {
    try {
        const notes = await dataSchema.find()
        return res.status(200).json(notes)

    }
    catch (err: unknown) {
        const error = err as String
        res.status(500).json({ message: error })

    }
}




export const getAllRegister = async (req: Request, res: Response) => {
    try {
        const notes = await dataNewUser.find()
        return res.status(200).json(notes)

    }
    catch (err: unknown) {
        const error = err as String
        res.status(500).json({ message: error })

    }
}

export const getPeople = async (req: Request, res: Response) => {
    try {
        const findPeople = await dataSchema.findById(req.params.id)
        if (findPeople) {
            return res.status(200).json(findPeople)
        }

    }
    catch (err: unknown) {
        const error = err as String
        res.status(500).json({ message: error })

    }
}

// criar método para cadastrar uma Pessoa 
export const createNewUser = async (req: Request, res: Response) => {
    try {
        const { email, senha } = req.body;

        if (!email.trim() || email == undefined || email.length <= 1 || email == "") {
            console.log('O Email está sendo Passado indefinidamente.');
        } else if (!senha.trim() || senha == undefined || senha.length < 11 || senha == "") {
            console.log('A senha está sendo passado indefinidamente, crie uma senha maior do que 11 caracteres.');
        } else {
            const newNoteRegister = new dataNewUser({
                email: email,
                senha: senha
            });

            const savedNote = await newNoteRegister.save();
            res.status(201).json(savedNote);
        }
    } catch (err: unknown) {
        const error = err as string;
        res.status(500).json({ message: error });
    }
};

// criar método para cadastrar uma Pessoa 
export const createRegistration = async (req: Request, res: Response) => {
    try {
        const { nome, email, telefone, endereco, cpf } = req.body

        if (!nome.trim() || nome == undefined || nome.length <= 1 || nome == "") {
            console.log('Nome está sendo Passado indefinidamente.')
        }
        else if (!email.trim() || email == undefined || email.length <= 5 || email.includes("@") == false || email == "") {
            console.log('email esta sendo passado indefinidamente.')
        }
        else if (!telefone.trim() || telefone == undefined || telefone.length < 10 || telefone == "") {
            console.log('Telefone está sendo Passado indefinidamente.')
        }
        else if (!endereco.trim() || endereco == undefined || endereco.length < 5 || endereco == "") {
            console.log('Endereço está sendo passado indefinidamente.')
        }
        else if (!cpf.trim() || cpf == undefined || cpf.length < 11 || cpf == "") {
            console.log('CPF está sendo passado indefinidamente.')
        }

        else {
            const newNote = new dataSchema({
                nome: nome,
                email: email,
                telefone: telefone,
                endereco: endereco,
                cpf: cpf
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
        const findPeople = await dataSchema.findById(req.params.id)
        console.log(findPeople)

        if (findPeople) {
            findPeople.nome = req.body.nome || findPeople.nome
            findPeople.email = req.body.email || findPeople.email
            findPeople.telefone = req.body.telefone || findPeople.telefone
            findPeople.endereco = req.body.endereco || findPeople.endereco
            findPeople.cpf = req.body.cpf || findPeople.cpf

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
        const peopleFound = await dataSchema.findById(req.params.id)

        await peopleFound.delete()

        res.status(200).json({
            mensagem: `Pessoa '${peopleFound.nome}' deletada com sucesso!`
        })

    }
    catch (err: unknown) {
        const error = err as String
        res.status(500).json({ message: error })

    }
}



