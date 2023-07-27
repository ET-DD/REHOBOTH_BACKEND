import { FilesObject } from "../controller/blog/addImage.blog.controller";

export interface Blog {
    title: string,
    description: string, 
    body:string,
    links:string,
    files: FilesObject[]
}
  
  