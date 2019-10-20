//coding challenge 1
let mark = 78;
let markHeight = 1.69;

let john = 92;
let johnHeight = 1.95;

let markBmi = mark / markHeight * markHeight;
console.log(markBmi);
let johnBmi = john / johnHeight * johnHeight;
let isMarkBmiHigher = markBmi > johnBmi;
console.log(`is mark's bmi higher than john's? ${isMarkBmiHigher}`);

//terniary operator
//you can use "?" as in if statement and ":" as an else statement.

let drink = age >= 18 ? "beer" : "juice";
console.log(drink)
//  vs
if (age >= 18) {
    let drink = "beer";
}
else {
    let drink = "juice";
}

// switch statements
// They can be used instead of "else if statements". use "default" instead of "break" for  "else"  statement.


const age = 18;
switch (true) {
    case age < 18:
        console.log("you are too young")
        break;
    case age >= 18:
        console.log("you are good to go");
        break;
    default:
        console.log("you are too old");
}

//truthy and falsey values


//falsy value: undefined, null, 0,"", NAN
//truthy values: Not falsy value

let height;
if (height) {
    console.log("variable is defined")
} else {
    console.log("variable has Not been defined");
}

//will give false because height is undefined 

//coding challenge 2
let avgJohn = (60 + 120 + 103) / 3;
let avgMike = (116 + 94 + 123) / 3;
let avgMary = (97 + 134 + 105) / 3;
console.log(`${avgJohn} ${avgMike} ${avgMary}`);
if (avgJohn > avgMike && avgJohn > avgMary) {
    console.log(`with an average of ${avgJohn}, John has the highest average`);
} else if (avgMike > avgJohn && avgMike > avgMary) {
    console.log(`with an average of ${avgMike}, Mike has the highest average`);
} else if (avgMary > avgJohn && avgMary > avgMike) {
    console.log(`with an average of ${avgMary}, Mary has the highest average`);
} else {
    console.log(`There is a draw`);
}


//functions statements and expressions

//function declaration
function whatYouDo() {
    stuff here
}
//function expression
let whatYouDo = function (job, firstName) {
    stuff here
};


//code challenge 3

/* John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip). */


let johnTipPrice = [];
let johnTotalPrice = [];
function tipCalculator(bill) {
    if (bill < 50) {
        let tipPrice = bill * 0.2;
        let totalPrice = tipPrice + bill;
        johnTipPrice.push(tipPrice);
        johnTotalPrice.push(totalPrice);
    } else if (bill >= 50 && bill < 200) {
        let tipPrice = bill * 0.15;
        let totalPrice = tipPrice + bill;
        johnTipPrice.push(tipPrice);
        johnTotalPrice.push(totalPrice);
    } else if (bill > 200) {
        let tipPrice = bill * 0.1;
        let totalPrice = tipPrice + bill;
        johnTipPrice.push(tipPrice);
        johnTotalPrice.push(totalPrice);
    }
    else {
        console.log("error")
    }
};
//or
function tipCalculator(bill) {
    if (bill < 50) {
        percentage=0.2;
    } else if (bill >= 50 && bill < 200) {
        percentage=0.15;
    } else if (bill > 200) {
        percentage=0.1;
    }
    else {
        console.log("error")
    }
    return percentage *bill;
};

let bills=[124,48,268];
let tips= [tipCalculator(bills[0]),tipCalculator(bills[1]),tipCalculator(bills[2])];
let total=[bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];

console.log(tips);
console.log(total);

//coding challenge 4
/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter). */