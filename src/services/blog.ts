import { Request, Response } from "express";
import { prisma } from "../utils/prisma";

export const create = () => {
     let array = [
          {
               image: 'image-icom.jpg',
               titulo: 'Como a tecnologia pode ajudar na diversidade e inclusão das empresas',
               descricao: 'Embora muitos também estão utilizando como sinônimos, equidade e igualdade não são sinônimos.',
               data: '03/01/2025',
          },
          {
               image: 'image-icom2.jpg',
               titulo: 'O que é Lei Brasileira de inclusão? Siaba como o que sua empresa precisa fazer.',
               descricao: 'Saiba que a lei Brasileira de inclusão e o que sua empresa precisar fazer',
               data: '03/01/2025',
          },
          {
               image: 'image-icom3.jpg',
               titulo: 'Aprenda com a idade surda que as pessoas são diferentes ',
               descricao: 'Você se incomoda em ser reduzido a um grupo no qual pretence? Como coisas "Toda mulher é assim" e etc? Pois é! Então não seja toda pessoa surda do mesmo jeito.',
               data: '03/01/2025',
          }
     ];

     array.map(async (item) => {
          await prisma.blog.create({
               data: {
                    imagem: item.image,
                    titulo: item.titulo,
                    descricao: item.descricao,
                    data: item.data
               }
          });
     });
}

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
