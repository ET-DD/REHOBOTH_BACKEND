import { Date } from "mongoose"

export interface Route {
  startingPoint: Date,
  endingPoint: Date
  price:number,
  description: string,
  path: Path[]
  }
  
  export interface Path {
    name: string,
  }
  