

//Assignment
//Using prompt, program a simple calculator (user can perform addition, substraction, multiplication, division, modulus, log, cosine and sine function)
//

// let x = 20;
// let y = 10;
// let z = x + y;
// console.log(z);

// var name = "Nsikak",
//   number_ = "10",
//   IsTrue = true;
// var number_ = 10;
// let condition = false;
// var varVariable = "This variable is declared with the var keyboard!";
// console.log(varVariable);

// let xscope = "global variable";
// function GlobalFunction() {
//   console.log(xscope);
// }

// function NameOfFunction() {
//   let xscope = "global variable222";
//   if (true) {
//     let xscope = "scope variable new one";
//     console.log(xscope);
//   }
// }

// console.log(xscope);
// NameOfFunction();

// const NameOfNewFunction = () => {
//   console.log("This is an alert message!");
// };
// NameOfNewFunction();

// let concateValue = 10 % 4;
// console.log(concateValue);

// let text1 = "What a very ";
// text1 += "nice day";
// console.log(typeof text1);

// let letter1 = 5;
// let letter2 = 2;
// let finalResult = letter2 ^ letter1;
// console.log(finalResult);

// //write a function that adds two numbers.

// //write a function calculates fahrenheit and converts to celsius.
// function fahrenheitCalculator(fahrenheitValue) {
//   return (5 / 9) * (fahrenheitValue - 32);
// }
// let result = fahrenheitCalculator(10);
// console.log("The result is", result);

//this is an object of a car Object with an object method
// let carObject = {
//   steering: "unautomatic",
//   color: "red",
//   wheels: 4,
//   speed: 100,
//   engine: "V8",
//   doors: {
//     front: 4,
//     sideDoor: {
//       Height: 20,
//     },
//   },
//   ObjectMethod: function functionName() {
//     return (
//       "The is" +
//       this.steering +
//       "and the color is " +
//       "with a " +
//       this.engine +
//       " Engine"
//     );
//   },
// };

// let Sentence = carObject.ObjectMethod();
// console.log(Sentence);
// console.log(carObject.steering);

// let objectVarible = {
//   name: "Nsikak",
// };

// let operator = prompt("Please input the operator for calculation!");
// let operator2 = prompt("Please input the operator2 for calculation!")

// let mathresult = operator + operator2;
// console.log(parseInt(mathresult));

// let newcarObject = {
//   steering: "unautomatic",
//   color: "red",
//   wheels: 4,
//   speed: 100,
//   engine: "V8",
//   doors: {
//     front: 4,
//   },
// };
// let newEngine = newcarObject;
// newEngine.engine = "V10";
// console.log(newEngine.engine);

// newcarObject.selfDriving = "Tesla";
// console.log(newcarObject.selfDriving);

// delete newcarObject.selfDriving;
// console.log(newcarObject);


// console.log(carObject.doors.sideDoor.Height)


// //program to add numbers in the array;
// //program to calculate the average of the array
// const OurArray = [20, 40];
// const SumArray =OurArray.reduce((accumulator, currentValue) => accumulator + currentValue)/OurArray.length;
// console.log(SumArray);

// //program to calculate the maximum and minimum in an array;
// const maxarray =[5,8,21, 44,9]
// console.log("sorted array is ")
// console.log(maxarray.sort())

// const points = [40, 100, 1, 5, 25, 10];

// // Sort the Array
// points.sort(function(a, b){return a-b});


// "use strict";
// x = 3.14; 
// console.log(x);

// class Car {
//   constructor(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }

//   // Method to display car details
//   displayDetails() {
//     console.log(`Car: ${this.make} ${this.model}, Year: ${this.year}`);
//   }
// }

// // Create an object of the Car class
// const myCar = new Car("Toyota", "Camry", 2023);
// myCar.displayDetails(); // Output: Car: Toyota Camry, Year: 2023

// try {
//   variableX = 20;
// console.log(variableX);
// }

// catch (error) {
//   console.log(error);
// } 

//document.getElementById("writetext").innerHTML =`Text written into the element`;

let CheckVariable = 10;
if (CheckVariable === "10" ) {
  console.log("CheckVariable is equal to 10")
}
else {
  console.log("CheckVariable is not equal to 10")
}


// Fetch data from the JSONPlaceholder API
fetch('https://fakestoreapi.com/products')
  .then((response) => {
    // Check if the response is successful
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json(); // Parse JSON data
  })
  .then((data) => {
    // Log the fetched data to the console
    console.log(data);
  })
  .catch((error) => {
    // Handle errors
    console.error('There was a problem with the fetch operation:', error);
  });

