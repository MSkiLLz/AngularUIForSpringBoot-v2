import { TaskStatusPipe } from "./task-status.pipe";
import { TaskStatus } from '../models/task-status.model';

describe('TaskStatusPipe', () => {
    let pipe = new TaskStatusPipe();
   
    it('transforms "notstarted" to "Not Started"', () => {
      expect(pipe.transform(TaskStatus.notstarted)).toBe('Not Started');
    });
   
    it('transforms "inprogress" to "In Progress"', () => {
      expect(pipe.transform(TaskStatus.inprogress)).toBe('In Progress');
    });

    it('transforms "complete" to "Complete"', () => {
        expect(pipe.transform(TaskStatus.complete)).toBe('Complete');
      });

});
  