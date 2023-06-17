# 0x06. Unittests in JS

## Learning Objectives

- How to use Mocha to write a test suite
- How to use different assertion libraries (Node or Chai)
- How to present long test suites
- When and how to use spies
- When and how to use stubs
- What are hooks and when to use them
- Unit testing with Async functions
- How to write integration tests with a small node server

## Requirements

- All your files will be interpreted/compiled on Ubuntu 18.04 LTS using node (version 12.x.x)
- All your files should end with a new line
- The first line of all your files should be exactly #!/usr/bin/node
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the const or let statement
- Your code should be semistandard compliant. Rules of Standard + semicolons on top. Also as reference: AirBnB style
- All your files must be executable
- The length of your files will be tested using wc
- You are not allowed to use var

## Tasks

### 0. Basic test with Mocha and Node assertion library

Write a script that executes a basic test using Mocha and Node assertion library.

Requirements:

- Install Mocha using npm (version 6.x.x)
- Create a file named 0-basic.js that contains the following code:

```js
#!/usr/bin/node
const assert = require('assert');

function calculateNumber(type, a, b) {
  if (type === 'SUM') {
    return Math.round(a) + Math.round(b);
  } else if (type === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  } else if (type === 'DIVIDE') {
    if (Math.round(b) === 0) {
      return 'Error';
    }
    return Math.round(a) / Math.round(b);
  } else {
    return 'Error';
  }
}

module.exports = calculateNumber;
```
- Create a file named 0-basic.test.js that contains the following code:

```js
#!/usr/bin/node
const calculateNumber = require('./0-basic');
const assert = require('assert');

describe('calculateNumber', function () {
it('should return the rounded sum of two numbers', function () {
assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
assert.strictEqual(calculateNumber('SUM', -1.4, -4.5), -6);
assert.strictEqual(calculateNumber('SUM', -1.4, 4.5), 4);
assert.strictEqual(calculateNumber('SUM', 1.4, -4.5), -4);
assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
assert.strictEqual(calculateNumber('SUM', -1.5, -3.7), -6);
assert.strictEqual(calculateNumber('SUM', -1.5, 3.7), 3);
assert.strictEqual(calculateNumber('SUM', 1.5, -3.7), -3);
assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
assert.strictEqual(calculateNumber('SUM', -1, -3), -4);
assert.strictEqual(calculateNumber('SUM', -1, 3), 2);
assert.strictEqual(calculateNumber('SUM', 1, -3), -2);
assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
assert.strictEqual(calculateNumber('SUM', NaN, NaN), 'Error');
assert.strictEqual(calculateNumber('SUM', NaN, 'hello'), 'Error');
assert.strictEqual(calculateNumber('SUM', 'hello', NaN), 'Error');
assert.strictEqual(calculateNumber('SUM', 'hello', 'world'), 'Error');
assert.strictEqual(calculateNumber('SUM'), 'Error');
assert.strictEqual(calculateNumber(), 'Error');
assert.strictEqual(calculateNumber(1), 'Error');
assert.strictEqual(calculateNumber(1, 'hello'), 'Error');
assert.strictEqual(calculateNumber(1, NaN), 'Error');
assert.strictEqual(calculateNumber(1, undefined), 'Error');
assert.strictEqual(calculateNumber(undefined, undefined), 'Error');
assert.strictEqual(calculateNumber(null, null), 'Error');
assert.strictEqual(calculateNumber('SUM', null, null), 0);
assert.strictEqual(calculateNumber('SUM', null, 1), 1);
assert.strictEqual(calculateNumber('SUM', 1, null), 1);
assert.strictEqual(calculateNumber('SUM', null, NaN), 'Error');
assert.strictEqual(calculateNumber('SUM', NaN, null), 'Error');
assert.strictEqual(calculateNumber('SUM', null, 'hello'), 'Error');
assert.strictEqual(calculateNumber('SUM', 'hello', null), 'Error');
});

it('should return the rounded difference of two numbers', function () {
assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -4.5), 3);
assert.strictEqual(calculateNumber('SUBTRACT', -1.4, 4.5), -6);
assert.strictEqual(calculateNumber('SUBTRACT', 1.4, -4.5), 6);
assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
assert.strictEqual(calculateNumber('SUBTRACT', -1.5, -3.7), 2);
assert.strictEqual(calculateNumber('SUBTRACT', -1.5, 3.7), -6);
assert.strictEqual(calculateNumber('SUBTRACT', 1.5, -3.7), 6);
assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
assert.strictEqual(calculateNumber('SUBTRACT', -1, -3), 2);
assert.strictEqual(calculateNumber('SUBTRACT', -1, 3), -4);
assert.strictEqual(calculateNumber('SUBTRACT', 1, -3), 4);
assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
assert.strictEqual(calculateNumber('SUBTRACT', NaN, NaN), 'Error');
assert.strictEqual(calculateNumber('SUBTRACT', NaN, 'hello'), 'Error');
assert.strictEqual(calculateNumber('SUBTRACT', 'hello', NaN), 'Error');
assert.strictEqual(calculateNumber('SUBTRACT', 'hello', 'world'), 'Error');
assert.strictEqual(calculateNumber('SUBTRACT'), 'Error');
assert.strictEqual(calculateNumber(), 'Error');
assert.strictEqual(calculateNumber(1), 'Error');
assert.strictEqual(calculateNumber(1, 'hello'), 'Error');
assert.strictEqual(calculateNumber(1, NaN), 'Error');
assert.strictEqual(calculateNumber(1, undefined), 'Error');
assert.strictEqual(calculateNumber(undefined, undefined), 'Error');
assert.strictEqual(calculateNumber(null, null), 'Error');
assert.strictEqual(calculateNumber('SUBTRACT', null, null), 0);
assert.strictEqual(calculateNumber('SUBTRACT', null, 1), -1);
});
});
```

- To run the test suite, use the command `npm test` or `mocha`
- The test suite should output something like this:

```sh
$ npm test

> unittests-in-js@0.0.0 test /home/queens/alx-backend-javascript/0x06-unittests_in_js
> mocha

calculateNumber
✔ should return the rounded sum of two numbers
✔ should return the rounded difference of two numbers
✔ should return the rounded quotient of two numbers


3 passing (9ms)
```

## More Info

### Mocha

Mocha is a JavaScript test framework that runs on Node.js and in the browser. It allows you to write tests in a simple and expressive way using a describe-it syntax.

To install Mocha globally on your system, use the command `npm install --global mocha`.

To use Mocha in your project, add it as a dev dependency in your package.json file:

```json
{
  "name": "unittests-in-js",
  "version": "0.0.0",
  "description": "Unittests in JS",
  "main": "index.js",
  "scripts": {
    "test": "mocha"
  },
  "devDependencies": {
    "mocha": "^6.2.3"
  }
}
```

Then run `npm install` to install the dependencies.

To write a test suite with Mocha, you need to use the `describe` function to group your tests by a common topic or functionality. Inside each `describe` block, you can use the `it` function to write individual test cases that describe the expected behavior or outcome of your code.

For example:

```js
// my-test.js
describe('myFunction', function () {
  it('should do something', function () {
    // write your test logic here
  });
});
```

- To run the test suite, use the command `npm test` or `mocha`
- The test suite should output something like this:

```sh
$ npm test

> unittests-in-js@0.0.0 test /home/queens/alx-backend-javascript/0x06-unittests_in_js
> mocha

calculateNumber
✔ should return the rounded sum of two numbers
✔ should return the rounded difference of two numbers
✔ should return the rounded quotient of two numbers


3 passing (9ms)
```

## More Info

### Mocha

Mocha is a JavaScript test framework that runs on Node.js and in the browser. It allows you to write tests in a simple and expressive way using a describe-it syntax.

To install Mocha globally on your system, use the command `npm install --global mocha`.

To use Mocha in your project, add it as a dev dependency in your package.json file:

```json
{
  "name": "unittests-in-js",
  "version": "0.0.0",
  "description": "Unittests in JS",
  "main": "index.js",
  "scripts": {
    "test": "mocha"
  },
  "devDependencies": {
    "mocha": "^6.2.3"
  }
}
```

Then run `npm install` to install the dependencies.

To write a test suite with Mocha, you need to use the `describe` function to group your tests by a common topic or functionality. Inside each `describe` block, you can use the `it` function to write individual test cases that describe the expected behavior or outcome of your code.

For example:

```js
// my-test.js
describe('myFunction', function () {
  it('should do something', function () {
    // write your test logic here
  });
});
```

To run the test suite, use the command `npm test` or `mocha`.

### Assertion Libraries

An assertion library is a tool that allows you to check if your code behaves as expected by making assertions about values, objects, functions, etc. There are different assertion libraries that you can use with Mocha, such as Node's built-in assert module or Chai.

Node's assert module provides a set of methods that you can use to compare values, check for errors, verify types, etc. For example:

```js
// my-test.js
const assert = require('assert');

describe('myFunction', function () {
  it('should return true', function () {
    assert.strictEqual(myFunction(), true);
  });
});
```

Chai is a popular assertion library that offers three different styles of writing assertions: assert, expect, and should. For example:

```js
// my-test.js
const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

describe('myFunction', function () {
  it('should return true', function () {
    // using assert style
    assert.strictEqual(myFunction(), true);
    // using expect style
    expect(myFunction()).to.equal(true);
    // using should style
    myFunction().should.equal(true);
  });
});
```

To use Chai in your project, you need to install it as a dev dependency and require it in your test files.

```json
{
  "name": "unittests-in-js",
  "version": "0.0.0",
  "description": "Unittests in JS",
  "main": "index.js",
  "scripts": {
    "test": "mocha"
  },
  "devDependencies": {
    "mocha": "^6.2.3",
    "chai": "^4.3.4"
  }
}
```

```js
// my-test.js
const chai = require('chai');
// choose your preferred style
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();
```
