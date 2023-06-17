import fs from 'fs';

export function readDatabase (filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.split('\n');
        lines.shift();
        lines.filter((line) => line !== '');
        const fields = {};
        for (const line of lines) {
          const [firstName, , , field] = line.split(',');
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstName);
        }
        resolve(fields);
      }
    });
  });
}
