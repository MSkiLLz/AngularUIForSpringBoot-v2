import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TaskService } from './services/task.service';
import { UserService } from './services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UserComponent } from './user/user.component';
import { TaskComponent } from './task/task.component';
import { IncompleteTaskComponent } from './task/incomplete-task.component';
import { NotStartedTaskComponent} from './task/notstarted-task.component';
import { InProgressTaskComponent} from './task/inprogress-task.component';
import { CompleteTaskComponent} from './task/complete-task.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { TaskStatusPipe } from './task/task-status.pipe';

const routes: Routes = [
  { path: 'users/:id', component: UserDetailComponent },
  { path: "tasks", component: TaskComponent },
  { path: "tasks/notcompleted", component: IncompleteTaskComponent },
  { path: "tasks/notstarted", component: NotStartedTaskComponent },
  { path: "tasks/inprogress", component: InProgressTaskComponent },
  { path: "tasks/complete", component: CompleteTaskComponent },
  { path: "users", component: UserComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' }
  
  // { path: 'detail/:id', component: HeroDetailComponent },
  
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TaskComponent,
    UserDetailComponent,
    IncompleteTaskComponent,
    NotStartedTaskComponent,
    InProgressTaskComponent,
    CompleteTaskComponent,
    TaskStatusPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      routes,
    { enableTracing: true}),
    NgbModule.forRoot()
  ],
  providers: [
    UserService,TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
