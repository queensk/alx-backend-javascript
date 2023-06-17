import { readDatabase } from '../utils.js';

export class StudentsController {
  static async getAllStudents (request, response) {
    try {
      const database = await readDatabase('./database.csv');
      const fields = Object.keys(database).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));

      let output = 'This is the list of our students\n';

      for (const field of fields) {
        const students = database[field];
        output += `Number of students in ${field.toUpperCase()}: ${students.length}. List: ${students.join(', ')}\n`;
      }

      response.status(200).send(output);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor (request, response) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const database = await readDatabase('./database.csv');
      const students = database[major.toUpperCase()] || [];

      response.status(200).send(`List: ${students.join(', ')}`);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }
}
