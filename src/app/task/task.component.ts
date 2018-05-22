import { Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';

import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';
import { TaskStatus} from '../models/task-status.model';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  constructor(
    private taskService: TaskService
  ) { }

  public newTask: Task = new Task()

  tasksList: Task[];
  editTasks: Task[] = [];
  showOptions: boolean = true;

  ngOnInit(): void {
    this.taskService.getTasks()
      .subscribe(tasks => {
        this.tasksList = tasks
        console.log(tasks)
      })
  }

  

  create(task: Task) {
    this.taskService.createTask(this.newTask, task._id)
      .subscribe((res) => {
        this.tasksList.push(res.data)
        this.newTask = new Task()
      })
  }

  editTask(task: Task) {
    console.log(task)
    if(this.tasksList.includes(task)){
      if(!this.editTasks.includes(task)){
        this.editTasks.push(task)
      }else{
        this.editTasks.splice(this.editTasks.indexOf(task), 1)
        this.taskService.editTask(task,task.assignedUser.id).subscribe(res => {
          console.log('Update Succesful')
        }, err => {
          this.editTask(task)
          console.error('Update Unsuccesful')
        })
      }
    }
  }

  doneTask(task:Task){
    debugger
    task.status = TaskStatus.complete
    this.taskService.editTask(task,task.assignedUser.id).subscribe(res => {
      console.log('Update Succesful')
    }, err => {
      this.editTask(task)
      console.error('Update Unsuccesful')
    })
  }

  inProgress(task:Task){
    task.status = TaskStatus.inprogress
    this.taskService.editTask(task,task.assignedUser.id).subscribe(res => {
      console.log('Update Succesful')
    }, err => {
      this.editTask(task)
      console.error('Update Unsuccesful')
    })
  }

  notStarted(task:Task){
    task.status = TaskStatus.notstarted
    this.taskService.editTask(task,task.assignedUser.id).subscribe(res => {
      console.log('Update Succesful')
    }, err => {
      this.editTask(task)
      console.error('Update Unsuccesful')
    })
  }

  submitTask(event, task:Task){
    if(event.keyCode ==13){
      this.editTask(task)
    }
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task._id).subscribe(res => {
      this.tasksList.splice(this.tasksList.indexOf(task), 1);
    })
  }

}
