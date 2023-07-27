import { Request, Response } from "express";
import { showService } from "../../utils/db_functions/service.db";
export const deleteImage = async (req:Request, res:Response) => {
    //Destruct the data sent from req.body 
    // const uploader = async (path) => await uploads(path, "Images")
    const { serviceId, id} = req.params
    try {

        if (req.method === 'POST') {
           
            //we use uuidv4 to generate a random and unique id for the services
            const verifyservice = await showService(serviceId); 
            if(!verifyservice){
                return res.status(404).json({
                    message: "service not found", 
                    status: false
                })
            }
            const filesarray = verifyservice.files
            const newfilesarray = filesarray.filter((image)=>
                image.id !== id
            )
            verifyservice.files = newfilesarray
            verifyservice.save()
            return res.status(410).json({
                success: true,
                message: "image deleted sucessfully",
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
