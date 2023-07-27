//Importing the product model to the controller
import ServiceModel from "../../model/service.model";

// Importing the the cloudinary config
import { uploads } from "../../config/cloudinary";

//Imporing file system library
import fs from "fs";

import { Request, Response } from "express";

export const create = async (req:Request, res:Response) => {
    //Destruct the data sent from req.body 
    const { name, description, price, quantity } = req.body
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
            const service = await new ServiceModel({
                name: name,
                description: description,
                price: price,
                quantity: quantity,
                files: urls
            })

            service.save()
            return res.status(201).json({
                success: true,
                message: "service created sucessfully",
                data: service
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