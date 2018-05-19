import { TaskStatus } from "./task-status.model";
import { User } from "./user.model";

export class Task {
    _id:number;
    name: string;
    description: string;
    status: TaskStatus;
    assignedUser: User;

    constructor(
    ){
        this.name = ""
        this.description = ""
        this.status = TaskStatus.notstarted
    }
}

export default Task;