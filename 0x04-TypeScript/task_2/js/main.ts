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
  
  executeWork(createEmployee(200)); // Getting to work
  executeWork(createEmployee(1000)); // Getting to director tasks
  