import { Request, Response } from "express";
import { showHero } from "../../utils/db_functions/hero.db";
export const deleteImage = async (req:Request, res:Response) => {
    //Destruct the data sent from req.body 
    // const uploader = async (path) => await uploads(path, "Images")
    const { heroId, id} = req.params
    try {

        if (req.method === 'POST') {
           
            //we use uuidv4 to generate a random and unique id for the heros
            const verifyhero = await showHero(heroId); 
            if(!verifyhero){
                return res.status(404).json({
                    message: "hero not found", 
                    status: false
                })
            }
            const filesarray = verifyhero.files
            const newfilesarray = filesarray.filter((image)=>
                image.id !== id
            )
            verifyhero.files = newfilesarray
            verifyhero.save()
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
