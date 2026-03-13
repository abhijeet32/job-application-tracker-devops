import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export interface CustomRequest extends Request {
    user?: any;
    body: any;
    params: any;
    file?: any;
}

const authenticationJwt = (req: CustomRequest, res: Response, next: NextFunction) => {
    const authhead: any = req.headers.authorization;

   if(authhead){
    const token = authhead.split(' ')[1];
    jwt.verify(token, process.env.SECRET as string, (err: any, user: any) => {
        if(err){
            return res.sendStatus(200);
        }
        req.user = user;
        next();
    })
   } else {
    res.sendStatus(401);
   }

}

export default authenticationJwt;