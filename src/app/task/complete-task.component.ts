import { Component, OnInit } from '@angular/core';

import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-complete-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class CompleteTaskComponent implements OnInit {

  constructor(
    private taskService: TaskService
  ) { }
  tasksList: Task[];
  editTasks: Task[] = [];
  showOptions: boolean = false;

  ngOnInit() {
    this.taskService.getTasksCompleted()
      .subscribe(tasks => {
        this.tasksList = tasks
        console.log(tasks)
      })
  }

}
