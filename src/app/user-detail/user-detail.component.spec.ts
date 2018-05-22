import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Location, LocationStrategy } from '@angular/common';

import { UserDetailComponent } from './user-detail.component';
import { UserService } from '../services/user.service';
import { TaskService } from '../services/task.service';


describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  const fakeActivatedRoute = {
    snapshot: { data: { } }
  } as ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailComponent ],
      imports: [
        FormsModule,
        HttpClientModule],
        providers: [
          UserService,
          TaskService,
          Location,
          LocationStrategy,
          {provide: ActivatedRoute, useValue: fakeActivatedRoute}, 
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
