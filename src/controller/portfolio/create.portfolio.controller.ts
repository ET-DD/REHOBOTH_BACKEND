//Importing the product model to the controller
import PortfolioModel from "../../model/portfolio.model";

// Importing the the cloudinary config
import { uploads } from "../../config/cloudinary";
import { Request, Response } from "express";

//Imporing file system library
import fs from "fs";


export const create = async (req:Request, res:Response) => {
    //Destruct the data sent from req.body 
    const { title, description, body } = req.body
    const uploader = async (path) => await uploads(path, "Images")

    try {

        if (req.method === 'POST') {

            const urls = []
            if (req.files) {
                const files = req.files;
                // for (const file of files) {
                //     const { path } = file;
                //     const newPath = await uploader(path)
                //     urls.push(newPath)
                //     fs.unlinkSync(path)
                // }
            }


            //creating the service
            const portfolio = await new PortfolioModel({
                title: title,
                description: description,
                body: body,
                files: urls
            })

            portfolio.save()
            return res.status(201).json({
                success: true,
                message: "portfolio created sucessfully",
            })
        } else {
            return res.status(405).json({
                err: `${req.method} method not allowed`
            })
        }

    } catch (error) {
        return res.status(412).json({
            success: false,
            message: error
        })
    }

}