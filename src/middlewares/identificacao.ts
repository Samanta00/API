import * as jwt from 'jsonwebtoken'

import { Request, Response, NextFunction } from 'express'

const SECRET = process.env.SECRET;
export const verificarToken = (req: Request, res: Response, next: NextFunction) => {

    const token = req.get('authorization')?.slice(7)
    try {
        const payload = jwt.verify(token!, SECRET!)
        next()

    } catch (err: any) {
        console.error(err)
        return res.status(401).send({
            message: err.message
        })
    }
}

