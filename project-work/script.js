
let x = 20;
let y =10
let z = x + y;
console.log(z);

var name = "Nsikak", number_ = "10", IsTrue = true;
var number_ = 10;
let condition = false
var varVariable = "This variable is declared with the var keyboard!"
console.log(varVariable);

let xscope = "global variable" 
function GlobalFunction () {
console.log(xscope);
}

function NameOfFunction () {
    let xscope = "global variable222";
    if (true) {
        let xscope = "scope variable new one";
        console.log(xscope)
    }
}

console.log(xscope);
NameOfFunction();

const NameOfNewFunction = () => {
   console.log("This is an alert message!")
}
NameOfNewFunction()

let concateValue = 10 % 4;
console.log(concateValue);

let text1 = "What a very ";
text1 += "nice day";
console.log(typeof(text1))

let letter1 = 5;
let letter2 =2;
let finalResult = letter2 ^ letter1;
console.log(finalResult);

//this is an object of a car Object
let carObject = {
    steering: "automatic",
    color: "red",
    wheels: 4,
    speed: 100,
    engine: "V8",
    doors: {
        front: 4,
    }
}
console.log(carObject.speed);
