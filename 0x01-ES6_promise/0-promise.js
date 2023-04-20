// make a promise
function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve();
    } else {
      reject();
    }
  });
}

export default getResponseFromAPI;
