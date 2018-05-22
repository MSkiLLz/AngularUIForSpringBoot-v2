import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { TaskService } from './services/task.service';
import { UserService } from './services/user.service';
import { TestBed, async } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { TaskComponent } from './task/task.component';
import { IncompleteTaskComponent } from './task/incomplete-task.component';
import { NotStartedTaskComponent} from './task/notstarted-task.component';
import { InProgressTaskComponent} from './task/inprogress-task.component';
import { CompleteTaskComponent} from './task/complete-task.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { TaskStatusPipe } from './shared/task-status.pipe';

const routes: Routes = [
  { path: 'users/:id', component: UserDetailComponent },
  { path: "tasks", component: TaskComponent },
  { path: "tasks/notcompleted", component: IncompleteTaskComponent },
  { path: "tasks/notstarted", component: NotStartedTaskComponent },
  { path: "tasks/inprogress", component: InProgressTaskComponent },
  { path: "tasks/complete", component: CompleteTaskComponent },
  { path: "users", component: UserComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' }];

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        UserComponent,
        TaskComponent,
        TaskStatusPipe,
        UserDetailComponent,
        IncompleteTaskComponent,
        NotStartedTaskComponent,
        InProgressTaskComponent,
        CompleteTaskComponent,
      ],
      imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        
        RouterModule.forRoot(
          routes,
        ),
        NgbModule.forRoot()
      ],
      providers: [
        TaskService, UserService,
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'TodoList App'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('TodoList App');
  }));

  it('should render links routing to users and tasks by status type', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a[routerLink="/users"]')).toBeTruthy();
    expect(compiled.querySelector('a[routerLink="/tasks"]')).toBeTruthy();
    expect(compiled.querySelector('a[routerLink="/tasks/notcompleted"]')).toBeTruthy();
    expect(compiled.querySelector('a[routerLink="/tasks/notstarted"]')).toBeTruthy();
    expect(compiled.querySelector('a[routerLink="/tasks/inprogress"]')).toBeTruthy();
    expect(compiled.querySelector('a[routerLink="/tasks/complete"]')).toBeTruthy();
  }));
});
