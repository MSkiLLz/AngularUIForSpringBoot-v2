import { Component, OnInit } from '@angular/core';

import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-inprogress-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class InProgressTaskComponent implements OnInit {

  constructor(
    private taskService: TaskService
  ) { }
  tasksList: Task[];
  editTasks: Task[] = [];

  ngOnInit() {
    this.taskService.getTasksInProgress()
      .subscribe(tasks => {
        this.tasksList = tasks
        console.log(tasks)
      })
  }

}
