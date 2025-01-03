import { Request, Response } from "express";

export const privacy = (req: Request, res: Response) => {
   res.render('pages/privacy');
}