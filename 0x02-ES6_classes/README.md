# 0x02. ES6 classes

## 0x02. ES6 Classes
This repository contains code examples and explanations related to ES6 classes.

## What are Classes?
In JavaScript, a class is a type of object constructor that allows you to define a blueprint for creating objects with specific properties and methods.
Classes are used to create reusable code, encapsulate data, and organize functionality into logical units.

## Code Examples
This repository contains several code examples demonstrating how to use classes in JavaScript.

### basic-class
An example of a basic class with a constructor and a method.

### inheritance
demonstrates how to use class inheritance to create a child class that inherits properties and methods from a parent class.

### getters-setters
shows how to use getter and setter methods to control access to class properties.

### static-methods
demonstrates how to use static methods, which are methods that belong to the class itself, rather than to its instances.

## Running the Examples
To run any of the examples, simply run the corresponding file using Node.js:
```
npm run dev 9-main.js 
```
## code example
```
/**
 * This repository contains code examples and explanations related to ES6 classes.
 * 
 * @class MyClass
 * @description A basic class with a constructor and a method.
 */
class MyClass {
  constructor(name) {
    this.name = name;
  }

  /**
   * Greet method to greet with the instance's name.
   * @method greet
   * @returns {string} Greeting string with the instance's name.
   */
  greet() {
    return `Hello, my name is ${this.name}`;
  }
}

/**
 * This is a child class that inherits properties and methods from the parent class.
 * 
 * @class MyChildClass
 * @extends MyClass
 */
class MyChildClass extends MyClass {
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  /**
   * Greet method to greet with the instance's name and age.
   * @method greet
   * @returns {string} Greeting string with the instance's name and age.
   */
  greet() {
    return `Hello, my name is ${this.name} and I'm ${this.age} years old`;
  }
}

/**
 * A class that demonstrates the use of getter and setter methods to control access to class properties.
 * 
 * @class Person
 * @property {string} _name - The name of the person.
 */
class Person {
  constructor(name) {
    this._name = name;
  }

  /**
   * Getter method to get the person's name.
   * @method name
   * @returns {string} The person's name.
   */
  get name() {
    return this._name;
  }

  /**
   * Setter method to set the person's name.
   * @method name
   * @param {string} name - The new name for the person.
   */
  set name(name) {
    this._name = name;
  }
}

/**
 * A class that demonstrates the use of static methods, which belong to the class itself, rather than to its instances.
 * 
 * @class MathHelper
 * @static
 */
class MathHelper {
  /**
   * Static method to calculate the area of a circle.
   * @method circleArea
   * @param {number} radius - The radius of the circle.
   * @returns {number} The area of the circle.
   */
  static circleArea(radius) {
    return Math.PI * radius * radius;
  }

  /**
   * Static method to calculate the area of a rectangle.
   * @method rectangleArea
   * @param {number} length - The length of the rectangle.
   * @param {number} width - The width of the rectangle.
   * @returns {number} The area of the rectangle.
   */
  static rectangleArea(length, width) {
    return length * width;
  }
}
```

node basic-class.js
## Resources
For more information on classes and their usage in JavaScript, refer to the following resources:

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) - Classes
- [Metaprogramming](https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/#symbolspecies)
