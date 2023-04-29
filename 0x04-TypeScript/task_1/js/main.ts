interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [propName: string]: any,
    
}

interface Directors extends Teacher{
    numberOfReports: number,
}


const printTeacher = (firstName: string, lastName: string) => `${firstName.charAt(0)}. ${lastName}`

class StudentClass{
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomeWork = (): string => "Currently working"

    displayName = (): string => this.firstName
}

interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClass;
}

interface StudentInterface {
    workOnHomework(): string;
    displayName(): string;
}

const student = new StudentClass("Paul", "jerry");
console.log(student.displayName())
console.log(student.workOnHomeWork())
