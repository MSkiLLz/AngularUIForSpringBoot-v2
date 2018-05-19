import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model';
import {Task} from '../models/task.model';
import { UserService } from '../services/user.service';
import { TaskService } from '../services/task.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
 
  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private taskService: TaskService,
              private location: Location) { }

  ngOnInit() {
    this.getUser();
  }

  public newTask: Task = new Task();
  user: User;
  task: Task;
  taskList: Task[] = [];
  usersList: User[] = [];
  editUsers: User[] = [];
  enteredTask: string;
  isAdded: boolean = false;
  confirmationString: string = "New Task Added";


  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(id)
      .subscribe(user => this.user = user);
  }

  editUser(user) {
    debugger
    console.log(user)
    // if(this.usersList.includes(user)){
      // if(!this.editUsers.includes(user)){
        // this.editUsers.push(user)
      // }else{
        // this.editUsers.splice(this.editUsers.indexOf(user), 1)
        const id = +this.route.snapshot.paramMap.get('id');
        this.userService.editUser(id,user.userName).subscribe(res => {
          console.log('Update Succesful')
        }, err => {
          this.editUser(user)
          console.error('Update Unsuccesful')
        })
      // }
    // }
  }

  addTask(taskName: string) {
    debugger
    const id = +this.route.snapshot.paramMap.get('id');
    this.taskService.createTask({name:taskName} as Task, id)
      .subscribe((res) => {
        this.usersList.push(res.data)
        this.newTask = new Task()
        this.isAdded = true;
      })
  }

  goBack(): void {
    this.location.back();
  }



}
