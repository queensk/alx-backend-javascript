namespace Subjects {
    export interface Teacher {
      firstName: string;
      lastName: string;
      experienceTeaching?: number;
      experienceTeachingC?: number;
      experienceTeachingReact?: number;
      experienceTeachingJava?: number;
    }
  
    export class Java implements Subject {
      teacher: Teacher;
  
      setTeacher(teacher: Teacher) {
        if (teacher.experienceTeachingJava !== undefined) {
          this.teacher = teacher;
        } else {
          throw new Error('Teacher must have experience teaching Java');
        }
      }
  
      getRequirements(): string {
        return 'Here is the list of requirements for Java';
      }
  
      getAvailableTeacher(): string {
        if (this.teacher) {
          return `Available Teacher: ${this.teacher.firstName}`;
        } else {
          return 'No available teacher';
        }
      }
    }
  }
  