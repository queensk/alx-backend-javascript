// HolbertonCourse
export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = typeof name === 'string' ? name : (() => { throw new TypeError('Name must be a string'); })();
    this._length = typeof length === 'number' ? length : (() => { throw new TypeError('Length must be a number'); })();
    this._students = Array.isArray(students) && students.every((student) => typeof student === 'string')
      ? students
      : (() => { throw new TypeError('Students must be an array of strings'); })();
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = typeof name === 'string' ? name : (() => { throw new TypeError('Name must be a string'); })();
  }

  get length() {
    return this._length;
  }

  set length(length) {
    this._length = typeof length === 'number' ? length : (() => { throw new TypeError('Length must be a number'); })();
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = Array.isArray(newStudents) && newStudents.every((student) => typeof student === 'string')
      ? newStudents
      : (() => { throw new TypeError('Students must be an array of strings'); })();
  }
}
