// 2-read_file.js
const fs = require('fs');

function countStudents (path) {
  try {
    // read the file synchronously
    const data = fs.readFileSync(path, 'utf8');
    // split the data by line
    const lines = data.split('\n');
    // remove the header and any empty lines
    lines.shift();
    lines.filter((line) => line !== '');
    // initialize an object to store the number and list of students by field
    const fields = {};
    // loop through each line
    for (const line of lines) {
      // split the line by comma
      const [firstName, , , field] = line.split(',');
      // if the field is not in the object, create a new entry with an empty array
      if (!fields[field]) {
        fields[field] = [];
      }
      // push the first name to the array
      fields[field].push(firstName);
    }
    // log the total number of students
    console.log(`Number of students: ${lines.length}`);
    // loop through each field in the object
    for (const [field, students] of Object.entries(fields)) {
      // log the number and list of students in each field
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    // if the file is not available, throw an error
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
