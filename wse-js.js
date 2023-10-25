/* Problems and solutions */


// Problem 1: Write a function to calculate the area of a triangle.

function areaOfTriangle (base, height) {
    return (base * height) / 2;
}
areaOfTriangle(2, 4);


// Problem 2: Write a function to convert degrees to radians.

function degreeToRadian (degree) {
    let radian = degree * (3.1416 / 180); // formula is: radian = degree * π/180 | π = 3.1416
    return radian;
};
degreeToRadian(15); // for example 15 degree
 

// Problem 3: Create a function calculateFactorial that takes a number and returns its factorial.

function calculateFactorial(num) { 
    if (num == 0) {
        return 1;
    } 
    else{
        return num * calculateFactorial(num - 1); 
    }
  };
calculateFactorial(9);


// Problem 4: Create a function isPrime that takes a number as a parameter and returns true if it's a prime number, and false otherwise.

function isPrime (num) {
    if ( num <= 1 && num == 0 ) {
        return false;
    }
    else {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }
}
isPrime(4);


// Problem 5: Create a function mergeArrays that takes two arrays as parameters and returns a new array that merges both arrays.

function mergeArrays (favCars, favCities) 
{
    const favCarsCities = favCars.concat(favCities);
    return favCarsCities;
}
const favCars = ['Rolls Royce Ghost', 'Aston Martin 007', 'Mercedes G Wagon'];
const favCities = ['Shanghai', 'Kuala Lumpur', 'Doha'];
mergeArrays(favCars, favCities);


// Problem 6: Create a function isLeapYear that takes a year as a parameter and returns "This is a leap year" if it's a leap year, and "Not Leap year" otherwise.

function isLeapYear (year) 
{
    if ( (year % 4 == 0 || year % 400 == 0) && year % 100 != 0) { // 3 conditions here
        return "This is a leap year";
    }
    else {
        return "Not leap year";
    }
}
isLeapYear(3100);


// Problem 7: Create a function removeDuplicates that takes an array and returns a new array with duplicates removed.

function removeDuplicates (favFoodItems) 
{

}
const favFoodItems = ['Faluda', 'Nachos', 'Kacchi', 'Alur Vorta', 'Faluda', 'Chicken Fry'];
removeDuplicates(favFoodItems);


// Problem 8: Create a function convertToCelsius that takes a temperature in Fahrenheit and returns the equivalent temperature in Celsius.

function convertToCelsius (tempInFahrenheit) 
{
    const celsius = ( tempInFahrenheit - 32 ) * 5 / 9;
    return Math.floor(celsius);
}
convertToCelsius(80);


// Problem 9: Write a function to find the maximum of five numbers.

function maxNum (maxNumArr) {
    return Math.max(...maxNumArr);
};
const maxNumArr = [5, 9, 59087, 90, 87, 54, 119, 908, 789, 66, 9, 0];
maxNum(maxNumArr);


// Problem 10: Create a function called evenOdd() that takes a string as a parameter. Now you have to give the output based on the total number of characters in your String. The output will be 'even' or 'odd'. [ Input: ‘JavaScript’ Output: even, Input: ‘Hello’ Output: odd]

function evenOdd (stringParam) 
{
    let numOfChars = stringParam.length;
    if ( numOfChars % 2 == 0) {
        return 'even';
    }
    else {
        return 'odd';
    }
}
const stringParam = 'Miles to go before I sleep!';
evenOdd(stringParam);




/* Questions and answers */

/*

1. Explain the difference between 'if...else' and 'switch' statements for conditional logic.

Ans: Difference between 'if...else' and 'switch' statement:
 - Hard to edit and modify if-else statement on the other hand swith case is easy to edit and mofify.
 - Data types for if-else statement is not limited but for switch case is limited to integer and character only.
 - Use to choose between 2 condition and for switch case it's multiple, more than 2.
 - Switch case is much more readable than if-else statement.

*/

/*

2. What is JavaScript, and what is its primary purpose in web development?

Ans: JavaScript is a scripting or Object Oriented programming language. It's a client side scripting language.
Purpose of this language is make websites or web pages interactive / dynamic. Like when I click, it changes onto something else. I can save my data and retrieve it later.

*/

/*

3. Explain the difference between var, let, and const when declaring variables in JavaScript.

Ans: Var, let and const all of them are for same task, VARIABLES. Store variables. But let and cost are introduced in ES6, means these two are latest and var kind of backdated.
Now the differences are:
- var can be redeclared many times with same name. | let can not be redeclared with same name. Inside curly braces let cannot be accessed from outside. | Like let,     const too can not be redeclared with same name. Inside curly braces const cannot be accessed from outside
- var value can be updated within the scope from anywhere | let value can be updated too within scope | const value cannot be updated

*/

/*

5. What is the difference between "null" and "undefined" in JavaScript?

Ans: 
- NULL is intentional. I declared a variable and instead of any I can assign NULL as value of that variable.
- Undefined is unintentional. Declared a variable but no value assigned yet, it'll give undefined.

*/
