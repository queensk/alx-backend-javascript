# 0x01. ES6 Promises

This repository contains code examples and explanations related to ES6 Promises.

## What are Promises?

Promises are a way to handle asynchronous operations in JavaScript. They are a placeholder for a value that may not yet exist and represent the eventual completion (or failure) of an asynchronous operation.

## Code Examples

This repository contains several code examples demonstrating how to use Promises in JavaScript.

### Basic Promise

The `basic-promise.js` file contains an example of creating a basic Promise that resolves after a certain amount of time.

### Chaining Promises

The `chaining-promises.js` file demonstrates how to chain multiple Promises together, where the output of one Promise becomes the input of another.

### Handling Errors

The `error-handling.js` file shows how to handle errors that may occur while working with Promises.

## Running the Examples

To run any of the examples, simply run the corresponding file using Node.js:
```
npm run dev 9-main.js 
```

## node basic-promise.js

```
new Promise(function(resolve, reject) {
  // Do some asynchronous operation
  // If successful, call resolve(value)
  // If unsuccessful, call reject(error)
})
.then(function(value) {
  // Do something with the resolved value
})
.catch(function(error) {
  // Handle any errors that may have occurred
});

```

## Resources

For more information on Promises and their usage in JavaScript, refer to the following resources:

- [MDN Web Docs - Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JavaScript.info - Promises](https://javascript.info/promise-basics)
- [ES6 Promises in Depth](https://ponyfoo.com/articles/es6-promises-in-depth) by Nicolás Bevacqua
