import { Component, OnInit } from '@angular/core';

import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-incomplete-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class IncompleteTaskComponent implements OnInit {

  constructor(
    private taskService: TaskService
  ) { }
  tasksList: Task[];
  editTasks: Task[] = [];

  ngOnInit() {
    this.taskService.getTasksNotCompleted()
      .subscribe(tasks => {
        this.tasksList = tasks
        console.log(tasks)
      })
  }

}
