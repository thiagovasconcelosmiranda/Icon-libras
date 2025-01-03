import { Request, Response } from "express";
import { pagAll, pagFind } from '../services/blog';

export const blog = async (req: Request, res: Response) => {
    res.render('pages/blog');
}

export const blogPag = async (req: Request, res: Response) => {
    if (req.params.namePage === 'Blog') {
        await pagAll(req, res);
    } else {
        await pag(req, res);
    }
};

const pag = async (req: Request, res: Response) => {
    const skip = Number(req?.params?.pag) || 0;
    const take = 3;
    const blog = await pagFind(skip, take);
    return res.json(blog);
}


