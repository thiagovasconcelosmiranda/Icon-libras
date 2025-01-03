import { Request, Response } from "express";
import { prisma } from "../utils/prisma";


export const pagFind = async (skip: number, take: number) => {
     const blog = await prisma.blog.findMany({
          select: {
               id: true,
               imagem: true,
               titulo: true,
               descricao: true,
               data: true
          },
          skip: skip,
          take: take
     });

     let total = await prisma.blog.count();
     const totalPage = Math.ceil(total / take);
     return { blog, total, totalPage };
}

export const pagAll = async (req: Request, res: Response) => {
     const blog = await prisma.blog.findMany();
     return res.json({ blog: blog });
}
