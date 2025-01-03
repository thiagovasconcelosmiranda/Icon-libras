import { Request, Response } from "express";


export const home = (req: Request, res: Response) => {
    let title: string = "ICON - LIBRAS";

    res.render('pages/home');
}