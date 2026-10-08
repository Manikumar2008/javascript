//conditioanl statements
//we will perform operation only once not loop

//simple if statement
let num = 10;
if (num > 0) {
    console.log("Number is positive");
}
//if else statement
let num1 = -10;
if (num1 > 0) {
    console.log("Number is positive");
} else {
    console.log("Number is not positive");
}
//if else if statement
let num2 = 0;
if (num2 > 0) { 
    console.log("Number is positive");
} else if (num2 < 0) { 
    console.log("Number is negative");
} else {
    console.log("Number is zero");
}

//eligible to vote or not
let age = 18;
if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}

//check whether the given number is a multiple of 5 or not
let num3 = 25; 
if (num3 % 5 === 0) {
    console.log("Number is a multiple of 5");
} else {
    console.log("Number is not a multiple of 5");
} 

//check whether the given numbers last digit is 7 or not
let num4 = 27; 
if (num4 % 10 === 7) {
    console.log("Last digit is 7");
} else {
    console.log("Last digit is not 7");
}

//check whether the given number is digit or not
let num5 = 5;
if (num5 >= 0 && num5 <= 9) {
    console.log("Number is a digit");
}   
//check whether the given number is digit or not  
let a=(prompt("enter the number"));
if (a%1==0) {
    console.log("It is digit");
}      
    else {
        console.log("Not a digit");
    }

//else if ladder---more than 1 condition =many operations (anyone)
//Syntax:
if (condition1) {
    // code block 1
} else if (condition2) {
    // code block 2
} else if (condition3) {
    // code block 3
}else {
    // code block 4
}   


let score = 85; 
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}

//MAXIMUM OF 3 NUMBERS
let num6 = 10;
let num7 = 20;
let num8 = 15;
if (num6 >= num7 && num6 >= num8) {
    console.log("Maximum number is: " + num6);
} else if (num7 >= num6 && num7 >= num8) {
    console.log("Maximum number is: " + num7);
} else {
    console.log("Maximum number is: " + num8);
}       
