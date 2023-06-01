const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET;

import { Request, Response } from 'express'

// gerar identificador de acesso para entrar no sistema
export const gerarToken = (req: Request, res: Response) => {
    const { nome, senha } = req.body
    console.log(nome, senha)
    if (nome === 'desafiosharenergy' && senha === 'sh@r3n3rgy') {
        const token = jwt.sign({ userId: 1 }, SECRET, { expiresIn: "30d" });
        return res.json({ tipo: "Bearer", token })
    }
    res.status(401).end()
}



// module.exports={
//     gerarToken
// }
//sempre que precisa importar coisas dentro não é export default 