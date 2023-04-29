import { Subjects } from "./Subjects";

const { Cpp, Java, React } = Subjects;

const cTeacher = { firstName: "John", lastName: "Doe", experienceTeachingC: 10 };

console.log("C++");
const cpp = new Cpp();
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log("Java");
const java = new Java();
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log("React");
const react = new React();
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
