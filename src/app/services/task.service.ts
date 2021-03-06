import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Response} from '@angular/http';
import { Injectable } from '@angular/core';

import Task from '../models/task.model';


import 'rxjs/add/operator/map';
import { TaskStatus } from '../models/task-status.model';

@Injectable()
export class TaskService {

  api_url = 'http://localhost:8080';
  taskUrl = `${this.api_url}/tasks`;
  results: Task[];
  constructor(
    private http: HttpClient
  ) { }


  createTask(task: Task, id: number): Observable<any>{
    return this.http.post(`${this.taskUrl}`+'/add/users/' + `${id}`, task);
  }

  getTasks(): Observable<Task[]>{
    return this.http.get(this.taskUrl)
    .map(res  => {
      this.results = res as Task[]
      return res as Task[];
    })
  }

  getTasksNotCompleted():Observable<Task[]>{
    let notcompletedUrl = `${this.taskUrl}`+'/notcompleted'
    return this.http.get(notcompletedUrl)
    .map(res  => {
      return res as Task[];
    })
  }

  getTasksNotStarted():Observable<Task[]>{
    let notcompletedUrl = `${this.taskUrl}`+'/notstarted'
    return this.http.get(notcompletedUrl)
    .map(res  => {
      return res as Task[];
    })
  }

  getTasksInProgress():Observable<Task[]>{
    let notcompletedUrl = `${this.taskUrl}`+'/inprogress'
    return this.http.get(notcompletedUrl)
    .map(res  => {
      return res as Task[];
    })
  }

  getTasksCompleted():Observable<Task[]>{
    let notcompletedUrl = `${this.taskUrl}`+'/complete'
    return this.http.get(notcompletedUrl)
    .map(res  => {
      return res as Task[];
    })
  }

  editTask(task:Task, id: number){
    let editUrl = `${this.taskUrl}`+'/update/users/' + `${id}`
    return this.http.put(editUrl, task);
  }

  deleteTask(id:number):any{
    let deleteUrl = `${this.taskUrl}/${id}`
    return this.http.delete(deleteUrl)
    .map(res  => {
      return res;
    })
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
