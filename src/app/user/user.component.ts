import { Response } from '@angular/http';
import { UserService } from '../services/user.service';
import {User} from '../models/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-root',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  public newUser: User = new User()

  usersList: User[];
  editUsers: User[] = [];

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe(users => {
        this.usersList = users
        console.log(users)
      })
  }


  addUser(userName: string) {
    this.userService.createUser(userName)
      .subscribe((res) => {
        this.usersList.push(res)
        console.log(res)
      })
  }


  deleteUser(user: User) {
    if(confirm("Delete "+user.userName+"?")) {
    this.userService.deleteUser(user.id).subscribe(res => {
      this.usersList.splice(this.usersList.indexOf(user), 1);
    })
  }
  }


}
