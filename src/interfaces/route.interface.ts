import { Date } from "mongoose"

export interface Route {
  startingPoint: Date,
  endingPoint: Date
  path: Path[]
  }
  
  export interface Path {
    name: string,
  }
  