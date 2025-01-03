import { Request, Response } from "express";

export const about = (req: Request, res: Response) => {
   res.render('pages/about');
}