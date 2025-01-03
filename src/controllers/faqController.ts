import { Request, Response } from "express";

export const faq = (req: Request, res: Response) => {
   res.render('pages/faq');
}