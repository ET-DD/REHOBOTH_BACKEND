export interface Folder {
    name: string,
    userId: string
    note: Note[]
  }
  
  export interface Note {
    title: string,
    body: string
  }
  