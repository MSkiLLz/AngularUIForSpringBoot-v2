import { User }  from '../models/user.model';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Response} from '@angular/http';
import { Injectable } from '@angular/core';


import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  api_url = 'http://localhost:8080';
  userUrl = `${this.api_url}/users`;

  constructor(
    private http: HttpClient
  ) { }


  createUser(userName: string): Observable<User>{
    return this.http.post<User>(`${this.userUrl}`, new User({userName:userName}));
  }

  getUsers(): Observable<User[]>{
    return this.http.get(this.userUrl)
    .map(res  => {
      return res as User[];
    })
  }

  getUserById(id:number): Observable<User>{
    let editUrl = `${this.userUrl}/${id}`
    return this.http.get(editUrl)
    .map(res  => {
      return res as User;
    })
  }

  

  editUser(id:number, userName:String){
    let editUrl = `${this.userUrl}/${id}`
    return this.http.put(editUrl, {id,userName});
  }

  deleteUser(id:number):any{
    let deleteUrl = `${this.userUrl}/${id}`
    return this.http.delete(deleteUrl)
    .map(res  => {
      return res;
    })
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
