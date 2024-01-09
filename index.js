/* --------------------Object Oriented Programming---------------------- */

// ----------------------Encapsulation------------------------------ //
/* ---
Encapsulation
 --------------------In object oriented programming combining a group of related variables and functions
                     into a single unit which is called as Object
                     variables are referred as properties and functions are methods
---
*/

/* ---------- Example ----------------- */

// let baseSalary = 30_000;
// let rate = 20;
// let overtime = 10;

// function getWage(baseSalary , rate , overtime){
//     return baseSalary + (overtime * rate);
// };

// /* -------In Oops----------- */

// let employee = {
//     baseSalary : 30_000,
//     overtime : 10,
//     rate : 20,
//     getWage : function() {
//         return this.baseSalary + (this.overtime * this.rate);
//     }
// };
// console.log(employee.getWage());

/* -------------------------------Abstraction---------------------------------- */
/*

Lets say we have bunch of properties and it is unnecessary to display so inorder to hide
unnecessary information and display only necessary information to the user interaction
Abstraction is used.

/ -----------------REMEMBER----------------------ITS DOESNOT EXPOSE--------------------/
*/
//Example---------

// function createCar(make, model, year) {
//     let _make = make;
//     let _model = model;
//     let _year = year;

//     // Function to get the car details
//     function getDetails() {
//         return `${_year} ${_make} ${_model}`;
//     }

//     // Return an object with public methods
//     return {
//         getDetails: getDetails
//     };
// }

// function createCarShowroom() {
//     let cars = [];

//     // Function to add a car to the showroom
//     function addCar(car) {
//         cars.push(car);
//     }

//     // Function to display details of all cars in the showroom
//     function displayCars() {
//         console.log("Cars in the showroom:");
//         cars.forEach((car, index) => {
//             console.log(`${index + 1}. ${car.getDetails()}`);
//         });
//     }

//     // Return an object with public methods
//     return {
//         addCar: addCar,
//         displayCars: displayCars
//     };
// }

// const car1 = createCar("Toyota", "Camry", 2022);
// const car2 = createCar("Honda", "Accord", 2021);

// const showroom = createCarShowroom();

// showroom.addCar(car1);
// showroom.addCar(car2);
// showroom.displayCars();

/* -----------------------------------Inheritance-------------------------------------------- */

/* 

Programming pillar that allows to reuse code by referencing the behaviour and data of an other object.

Like class that inherits from another class shares all the attributes and methods of the referenced class.

[
    Prototype is a mechanism that allows objects to inherit properties and methods from another object 
    which also a part of constructor

    Constructor is responsible for creating and initializing the objects
]

*/

//Example------

// // Parent class (superclass)
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// // Adding a method to the Person class prototype
// Person.prototype.sayHello = function () {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
// };

// // Child class (subclass) inheriting from Person
// function Employee(name, age, jobTitle) {
//     // Call the constructor of the parent class
//     Person.call(this, name, age);
//     this.jobTitle = jobTitle;
// }

// // Inherit from Person's prototype
// Employee.prototype = Object.create(Person.prototype);

// // Add a method specific to Employee
// /* ------REMEMBER-------
// Setting up the prototype chain for the employee constructor to inherit the person constructor functions.
// */
// Employee.prototype.sayJobTitle = function () {
//     console.log(`I work as a ${this.jobTitle}.`);
// };

// // Creating instances of the classes
// const person1 = new Person("John", 25);
// const employee1 = new Employee("Alice", 30, "Software Engineer");

// // Using inherited methods
// person1.sayHello();  // Output: Hello, my name is John and I am 25 years old.
// employee1.sayHello(); // Output: Hello, my name is Alice and I am 30 years old.

// // Using subclass-specific method
// employee1.sayJobTitle(); // Output: I work as a Software Engineer.

// //Modern Approach using classes----
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     sayHello() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }

// const person12 = new Person("John", 25);
// person12.sayHello();

/* ------------Polymorphism----------------------- */
/*

Technique that allows to get rid of multiple if else and switch case statement
ability of a variable , func , object to make multiple form

Poly means --> Many 
Morphism mean --> forms

[
    4 types of polymorphism

    runtime
    compile time
    overloading
    casting

    important types are[
        runtime and compile time
    ]
]
*/

// Exampe-------------------

// Base class
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     // Common method for all animals
//     makeSound() {
//         console.log("Some generic sound");
//     }
// }

// // Derived class 1
// class Dog extends Animal {
//     // Override the makeSound method
//     makeSound() {
//         console.log("Woof! Woof!");
//     }
// }

// // Derived class 2
// class Cat extends Animal {
//     // Override the makeSound method
//     makeSound() {
//         console.log("Meow!");
//     }
// }

// // Function that takes an Animal and calls makeSound
// function animalMakesSound(animal) {
//     animal.makeSound();
// }

// // Creating instances
// const genericAnimal = new Animal("Generic Animal");
// const dog = new Dog("Buddy");
// const cat = new Cat("Whiskers");

// // Polymorphic behavior
// animalMakesSound(genericAnimal); // Output: Some generic sound
// animalMakesSound(dog);           // Output: Woof! Woof!
// animalMakesSound(cat);           // Output: Meow!

/* ----------------------------------------------------------------------------------------- */

//Creating Object literals

// const circle = {
//     radius : 1,
//     location : {
//         x : 1,
//         y : 1,
//     },
//     draw : function(){
//         console.log('draw');
//     }
// };

// // In circle there are two properties and one method. 
// // Properties used to hold the value.
// // Methods used to define the logic.
// circle.draw();

//----------------Creating factories--------

// if say we use objects in multiple places and  any properties needs
//to be changed it ll be difficult to do the modification in every object
//inorder to overcome factories are used to create the object and 
//returned while using

// function createCircle(radius){
//     return{
//         radius, // if both key and value are same need to add the value [ES6]
//         draw : function(){
//             console.log('draw!!!')
//         }
//     }
// }

// const circle1 = createCircle(1);
// circle1.draw();

/* ------------------Using Constructor function to create objects-------- */

//In constructor function function name should start with caps

// function Circle(radius){
//     console.log('this' , this) // use two variables one with creating object with new word and without it u ll see the difference
//     this.radius = radius;
//     this.draw = function(){
//         console.log('Draw!');
//     }
// };

// const createAnotherCircle = new Circle(1);
// createAnotherCircle.draw();

// 'NEW' creates empty object {}
// Then points the 'this' to the created object
//and finally returned by using function name

//This keyword points global object by default
// if you try to create same Circle object without new word the this present 
// inside the func points out to the global object
// Example if u try this is browser global object is window

// const anotherCircle = Circle(1); /// see the line number 278

/* ---------------------------------Value types vs Reference types----------------------- */

/* ---    Value types                          Reference types
            Number                               Objects
            String                               Functions
            Boolean                              Arrays
            Symbol[ES6]
            undefined
            null  
                                                                      -----------------------*/
// In js Functions are objects

//Primitives are copied by their value
//Objects are copied by their reference

//lets see with one example

// let x = 20;
// let y = x;

// x = 10;
// console.log(`x = ${x}`);  // x = 10
// console.log(`y = ${y}`);  // y = 20       

// You may think 'y' should be 20 too that is not the case
// As said earlier primitives are copied by their values which means
// initially we initialized value of x = 20 
// then y = x which means 'y' value is set to the value of the x that is 20;
//then we changed the value of x to 10
//Y remains the same 
 //because  there is no sign that if the value x changes values of y must be changed 
 // we are only changing the value of x in line number 320
 
 /* ---------------------------------------------------------------------------------------- */
 //Now we will do that in objects

//  let a = {value  : 10};
//  let b = a;

//  a.value = 20;
// console.log(`a = ${a.value}`); // a = {value :20 }   
// console.log(`b = ${b.value}`); // b = {value : 20 } 
//because ==> Objects are copied by their reference

/* ---------------------------------Adding and Deleting Properties------------------------------ */

// function Circle(radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log('Draw!!!!');
//     }
// }

// const circle  = new Circle(10);

//Adding properties by two ways Dot notation or by brackets

//Dot notation
// circle.location = { x : 10};

// //Bracket
// circle['range'] = { c : 20};

// Deleting properties can be done in both the ways

// delete circle.location; //Dot notation
// delete circle['range']; // Brackets

/* --------------------------------------------------------------------------- */

