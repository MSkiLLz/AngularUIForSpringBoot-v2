import { Pipe, PipeTransform } from '@angular/core';

import { TaskStatus } from '../models/task-status.model';

@Pipe({name: 'taskStatus'})
export class TaskStatusPipe implements PipeTransform {
  transform(value: TaskStatus): string {
    if(value === TaskStatus.notstarted){
        return "Not Started";
    } else if (value === TaskStatus.inprogress) {
        return "In Progress";
    } else if (value === TaskStatus.complete) {
        return "Complete";
    } else if (value === "notstarted") {
        return "Not Started";
    } else if (value === "inprogress") {
        return "In Progress";
    } else if (value === "complete") {
        return "Complete";
    } else {
        return "Unknown Status";
    }
  }
}