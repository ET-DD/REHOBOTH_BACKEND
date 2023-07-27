import { Request, Response } from "express";
import { showBlog } from "../../utils/db_functions/blog.db";
export const deleteImage = async (req:Request, res:Response) => {
    //Destruct the data sent from req.body 
    // const uploader = async (path) => await uploads(path, "Images")
    const { blogId, id} = req.params
    try {

        if (req.method === 'POST') {
           
            //we use uuidv4 to generate a random and unique id for the blogs
            const verifyblog = await showBlog(blogId); 
            if(!verifyblog){
                return res.status(404).json({
                    message: "blog not found", 
                    status: false
                })
            }
            const filesarray = verifyblog.files
            const newfilesarray = filesarray.filter((image)=>
                image.id !== id
            )
            verifyblog.files = newfilesarray
            verifyblog.save()
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
