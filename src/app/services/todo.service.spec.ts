import { HttpClientModule } from '@angular/common/http';
import { TestBed, inject, getTestBed, async, fakeAsync, tick } from '@angular/core/testing';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {ResponseOptions} from '@angular/http';
import {
  Headers, BaseRequestOptions,
  Response, HttpModule, Http, XHRBackend, RequestMethod
} from '@angular/http';

import { TaskService } from './task.service';
import { Task } from '../models/task.model';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TaskStatus } from '../models/task-status.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user.model';
import { defer } from 'rxjs/observable/defer';
import {mock, instance, when, verify} from 'ts-mockito';
import { Observable } from 'rxjs/Rx';



describe('TaskService: getTasks', () => {
  let service: TaskService;
  let taskService: TaskService;
  let mockTaskService: TaskService;
  let mockBackend: MockBackend;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(async(() => {
    //service = new TaskService(new HttpClient());
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new TaskService(<any> httpClientSpy);
    mockTaskService = mock(TaskService);


    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        TaskService, 
        MockBackend,
        BaseRequestOptions,
        {
          provide: HttpClient,
          deps: [MockBackend, BaseRequestOptions],
          useFactory:
            (backend, options) => {
              return new Http(backend, options);
            }
       }
      ]
    });
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    //mockBackend = getTestBed().get(MockBackend);
    mockBackend = TestBed.get(MockBackend);
    taskService =  TestBed.get(TaskService);
  }));

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', inject([TaskService], (service: TaskService) => {
    expect(service).toBeTruthy();
  }));

 
  it('#getObservableValue should return value from observable', 
    () => {
    const expectedTasks: Task[] =
    [{ _id: 1, name: 'A', description:"description", status: TaskStatus.notstarted, assignedUser: new User() }];
 
  httpClientSpy.get.and.returnValue(asyncData(expectedTasks));
 
  service.getTasks().subscribe(
    tasks => expect(tasks).toEqual(expectedTasks, 'expected tasks'),
    fail
  );
  expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return tasks', fakeAsync(() => {
    let response = {
    "resultCount":1,
     "results": [{ "_id": 1, "name": 'A', "description":"description", "status": TaskStatus.notstarted, "assignedUser": new User() }]
    };

    mockBackend.connections.subscribe( connection => {
      connection.mockRespond(new Response(<ResponseOptions>{
        body: JSON.stringify(response)
    }));
  });

    taskService.getTasks();
    tick();

    
  }))

  

  function asyncData<T>(data: T) {
    return defer(() => Promise.resolve(data));
  }
});
