# 0x00. ES6 Basics

This repository contains examples of ES6 (ECMAScript 6) features.

## Table of Contents
- let and const
- Arrow Functions
- Default Parameters
- Rest Parameters
- Spread Operator
- Destructuring Assignment
- Template Literals
- Classes
- Inheritance
- Getters and Setters

## Modules
let and const
The let and const keywords were introduced in ES6 to provide block scope variables.

```
let x = 1;
if (true) {
  let x = 2;
  console.log(x); // 2
}
console.log(x); // 1

const PI = 3.14;
```

## Arrow Functions
Arrow functions are a more concise syntax for writing function expressions.

```
const sum = (a, b) => a + b;
console.log(sum(1, 2)); // 3
```

## Default Parameters
Default parameters allow you to specify default values for function parameters.

```
const greet = (name = 'World') => {
  console.log(`Hello, ${name}!`);
};
greet(); // Hello, World!
greet('Alice'); // Hello, Alice!
```

## Rest Parameters
Rest parameters allow you to pass an arbitrary number of arguments to a function.

```
const sum = (...numbers) => {
  return numbers.reduce((acc, val) => acc + val, 0);
};
console.log(sum(1, 2, 3, 4, 5)); // 15
```

## Spread Operator
The spread operator allows you to expand an array or object into individual elements.

```
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3); // [1, 2, 3, 4, 5, 6]
```

## Destructuring Assignment
Destructuring assignment allows you to extract values from arrays or objects and assign them to variables.

```
const person = { name: 'Alice', age: 30 };
const { name, age } = person;
console.log(name); // Alice
console.log(age); // 30

const numbers = [1, 2, 3];
const [a, b, c] = numbers;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
```
## Template Literals
Template literals allow you to embed expressions inside strings.

```
const name = 'Alice';
const greeting = `Hello, ${name}!`;
console.log(greeting); // Hello, Alice!
```
## Classes
Classes are a new syntax for defining objects and their behavior.

```
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const alice = new Person('Alice', 30);
alice.greet(); // Hello, my name is Alice and I am 30 years old.
```
## Inheritance
Classes can inherit from other classes using the extends keyword.

class Student





