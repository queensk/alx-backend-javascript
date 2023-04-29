namespace Subjects {
    export interface Teacher {
      firstName: string;
      lastName: string;
    }
  
    export class Subject {
      private _teacher: Teacher;
  
      setTeacher(teacher: Teacher) {
        this._teacher = teacher;
      }
    }
  }
  