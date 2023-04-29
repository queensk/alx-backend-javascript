interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }
  
  interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }
  
  class Director implements DirectorInterface {
    workFromHome = (): string => "Working from home";
    getCoffeeBreak = (): string => "Getting a coffee break";
    workDirectorTasks = (): string => "Getting to director tasks";
  }
  
  class Teacher implements TeacherInterface {
    workFromHome = (): string => "Cannot work from home";
    getCoffeeBreak = (): string => "Cannot have a break";
    workTeacherTasks = (): string => "Getting to work";
  }
  
  function createEmployee(salary: number | string) {
    if (typeof salary === "number" && salary < 500) {
      return new Teacher();
    } else {
      return new Director();
    }
  }
  
  function isDirector(employee: Teacher | Director): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
  }
  
  function executeWork(employee: Teacher | Director) {
    if (isDirector(employee)) {
      console.log(employee.workDirectorTasks());
    } else {
      console.log(employee.workTeacherTasks());
    }
  }
  
  type Subjects = 'Math' | 'History';
  
  function teachClass(todayClass: Subjects) {
    if (todayClass === 'Math') {
      return 'Teaching Math';
    } else if (todayClass === 'History') {
      return 'Teaching History';
    } else {
      return 'Invalid class';
    }
  }
  
  console.log(teachClass('Math')); // Teaching Math
  console.log(teachClass('History')); // Teaching History
  