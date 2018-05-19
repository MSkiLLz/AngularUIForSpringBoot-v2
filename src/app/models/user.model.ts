import { Task } from "./task.model";

export class User {
    id: number;
    userName: string = '';
    tasks: Task[];
}
