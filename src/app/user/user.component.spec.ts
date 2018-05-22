import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { UserComponent } from './user.component';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { UserService } from '../services/user.service';



const routes: Routes = [
  { path: 'users/:id', component: UserDetailComponent },
  { path: "users", component: UserComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' }];


describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent,
        UserDetailComponent],
      imports: [
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(
          routes,
        { enableTracing: true})],
      providers: [
        UserService, {provide: APP_BASE_HREF, useValue: '/'}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
