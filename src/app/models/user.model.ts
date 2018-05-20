import { Task } from "./task.model";

export class User {
    id: number;
    userName: string = '';
    tasks: Task[];

    constructor(options?: any){
       if (options){
        Object.assign(this,options);
       } 
    }
}
