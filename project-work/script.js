//Assignment
//Using prompt, program a simple calculator (user can perform addition, substraction, multiplication, division, modulus, log, cosine and sine function)
//

let x = 20;
let y = 10;
let z = x + y;
console.log(z);

var name = "Nsikak",
  number_ = "10",
  IsTrue = true;
var number_ = 10;
let condition = false;
var varVariable = "This variable is declared with the var keyboard!";
console.log(varVariable);

let xscope = "global variable";
function GlobalFunction() {
  console.log(xscope);
}

function NameOfFunction() {
  let xscope = "global variable222";
  if (true) {
    let xscope = "scope variable new one";
    console.log(xscope);
  }
}

console.log(xscope);
NameOfFunction();

const NameOfNewFunction = () => {
  console.log("This is an alert message!");
};
NameOfNewFunction();

let concateValue = 10 % 4;
console.log(concateValue);

let text1 = "What a very ";
text1 += "nice day";
console.log(typeof text1);

let letter1 = 5;
let letter2 = 2;
let finalResult = letter2 ^ letter1;
console.log(finalResult);

//write a function that adds two numbers.

//write a function calculates fahrenheit and converts to celsius.
function fahrenheitCalculator(fahrenheitValue) {
  return (5 / 9) * (fahrenheitValue - 32);
}
let result = fahrenheitCalculator(10);
console.log("The result is", result);

//this is an object of a car Object with an object method
let carObject = {
  steering: "unautomatic",
  color: "red",
  wheels: 4,
  speed: 100,
  engine: "V8",
  doors: {
    front: 4,
    sideDoor: {
      Height: 20,
    },
  },
  ObjectMethod: function functionName() {
    return (
      "The is" +
      this.steering +
      "and the color is " +
      "with a " +
      this.engine +
      " Engine"
    );
  },
};


let Sentence = carObject.ObjectMethod();
console.log(Sentence);
console.log(carObject.steering);

let objectVarible = {
  name: "Nsikak",
};

// let operator = prompt("Please input the operator for calculation!");
// let operator2 = prompt("Please input the operator2 for calculation!")

// let mathresult = operator + operator2;
// console.log(parseInt(mathresult));

let newcarObject = {
  steering: "unautomatic",
  color: "red",
  wheels: 4,
  speed: 100,
  engine: "V8",
  doors: {
    front: 4,
  },
};
let newEngine = newcarObject;
newEngine.engine = "V10";
console.log(newEngine.engine);

newcarObject.selfDriving = "Tesla";
console.log(newcarObject.selfDriving);

delete newcarObject.selfDriving;
console.log(newcarObject);


console.log(carObject.doors.sideDoor.Height)
