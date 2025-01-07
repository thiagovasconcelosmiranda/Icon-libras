import { Request, Response } from "express";

export const faq = (req: Request, res: Response) => {
   let footer: boolean = false;

   res.render('pages/faq', {footer});
}
