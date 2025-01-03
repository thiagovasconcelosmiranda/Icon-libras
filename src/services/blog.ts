import { Request, Response } from "express";
import { prisma } from "../utils/prisma";

async function create() {
     await prisma.blog.create({
          data: {
               imagem: 'image-icom2.jpg',
               titulo: 'Aprenda com a idade surda',
               descricao: 'Você se incomoda de ser reduzido a um grupo no qual pertence? Como coisas "Toda toda mulher é assim" e etc! Pois é! Então não seja como toda pessoa surda do mesmo jeito.',
               data: '11/09/2024'
          }
     });
}


export const pagFind = async (skip: any, take: any) => {
     const [blog, total] = await prisma.$transaction([

          prisma.blog.findMany({
               select: {
                    id: true,
                    imagem: true,
                    titulo: true,
                    descricao: true,
                    data: true
               },
               skip, take
          }),
          prisma.blog.count()
     ]);
     const totalPage = Math.ceil(total / take);

     return { blog,  total,  totalPage };
}
export const pagAll = async (req: Request, res: Response) => {
     const blog = await prisma.blog.findMany();
     return res.json({ blog: blog });
}
