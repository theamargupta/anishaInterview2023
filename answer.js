let var1 = 10;
let var2 = 20;
var1 = var1 + var2;
var2 = var1 - var2;
var1 = var1 - var2;

console.log(var1, var2);

/////////////////////////////

const obj = {
    name: "Anisha",
    age: "25",
    city: "Noida",
};

const getDetails = (obj) => {
    const {
        name,
        age,
        city
    } = obj;
    return `Name: [${name}], Age: [${age}], City: [${city}]`;
};

console.log(getDetails("Anisha", 25, "Noida"));

////////////////////////////////////////////

const getType = (param) => {
    return typeof param;
};
console.log(getType("Anisha"));
console.log(getType(34));
console.log(getType([]));
console.log(getType({}));
console.log(getType());
console.log(getType(null));

//////////////////////////////

// Global scope
let globalVariable = "I am a global variable";

function globalFunction() {
    // Function scope
    let functionVariable = "I am a function-scoped variable";
    console.log(globalVariable); // Accessible in the function scope
    console.log(functionVariable); // Accessible within the function

    if (true) {
        // Block scope
        let blockVariable = "I am a block-scoped variable";
        console.log(blockVariable); // Accessible within the block
    }

    console.log(blockVariable); // Error: blockVariable is not defined
}

globalFunction();
console.log(globalVariable); // Accessible in the global scope
console.log(functionVariable); // Error: functionVariable is not defined
console.log(blockVariable); // Error: blockVariable is not defined

//////////////////////////////////////////////////////////////////////////

// When accessing a variable before its declaration, it exists but holds the value undefined until it is assigned a different value.

console.log(myVariable); // Output: undefined
var myVariable = 10;
console.log(myVariable); // Output: 10

/////////////////////////////////////////

const convertToNumber = (parameter) => {
    return isNaN(parameter) ? Number(parameter) : parameter;
    // let param =  isNaN(parameter) ? Number(parameter) : parameter;
    // return param;
}
console.log("ConvertToNumber", convertToNumber("Anisha"));
console.log("ConvertToNumber", convertToNumber("73473"));
console.log("ConvertToNumber", convertToNumber("74.36"));

////////////////////////////////////////////////////////////////
// Lengthy Method
const capitalize = (string) => {
    return string && typeof (string) === "string" ? string[0].toUpperCase() + string.slice(1) : "Not A Valid Data";
}
// console.log("capitalize", capitalize("anisha"));

//Short & Optimized Method

const capitalizedWords = (text) => {
    let words = text.split(" ")
    for (let i = 0; i < words.length; i++) {
        return words[i].length > 0 ?
            //  words[i] = capitalize(words[i]) : "Length is less than 1 means 0"
            words[0].toUpperCase() + words.slice(1) : "Length is less than 1 means 0"
    }
    return words.join(" ");
}
console.log('Test Result', capitalizedWords("This is a text for testing purpose."))

///////////////////////////////////////////////////////////////////////////

//Type coercion is the automatic conversion of values from one data type to another by JavaScript during operations or comparisons. 
//It occurs when an operator or function expects a certain data type, but receives a different one. 
//JavaScript attempts to convert the values to the appropriate types before performing the operation or comparison.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const isSameType = (value1, value2) => {
    return typeof value1 === typeof value2;
}

///////////////////////////////////////////

/**
 * NULL : 
 * It is a special value that represents the intentional absence of any object value. 
 * It is often used to indicate that a variable or object property has no value or is explicitly set to nothing. 
 * It is a primitive value that is assigned to a variable when it is explicitly set to null or when it doesn't have a value.
 * 
 * Ex- let myVariable = null;
 * console.log(myVariable); 
 * 
 * UNDEFINED : 
 * It is a value that indicates an uninitialized variable or an object property that has not been assigned a value. 
 * It is also returned when a function does not explicitly return a value. Unlike null, undefined is a built-in value in JavaScript.
 * 
 * Ex- let myVariable;
 * console.log(myVariable);
 */


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Important points to keep in mind while naming a variable
/**
 * Use descriptive names,
 * CamelCase,
 * Avoid using reserved keywords,
 * Use meaningful abbreviations,
 * Constants,
 * Global variables
 */


/////////////////////////////////////////////////

/**
 * Primitive Types:

Primitive types are immutable and directly store their values.
They include number, string, boolean, null, undefined, and symbol (added in ECMAScript 2015).
When you assign a primitive value to a variable, the actual value is stored in that variable.
Primitive types are compared by value, meaning that when you compare two variables, their values are compared directly.

Ex- let num = 42;
let str = "Hello";
let bool = true;
let n = null;
let u = undefined;

Reference Types:

Reference types are objects and are stored by reference rather than directly containing their values.
They include object, array, function, and date, among others.
When you assign a reference value to a variable, the variable holds a reference (memory address) to the actual value stored in memory.
Reference types are compared by reference, meaning that when you compare two variables, their references (memory addresses) are compared, not their actual values.
Examples:
javascript
Copy code
let obj = { name: "John", age: 30 };
let arr = [1, 2, 3];
let func = function() // function body 
let now = new Date();


Copying and Passing:

When you assign a primitive value to a new variable or pass it as an argument to a function, 
a copy of the value is created.
When you assign a reference value to a new variable or pass it as an argument to a function, 
the reference to the original value is copied, not the value itself. 
So, both variables will point to the same underlying object.
Example:
javascript
Copy code
let a = 42;
let b = a;  // a copy of the value is assigned to b
b = 10;    // changing b doesn't affect a

let obj1 = { name: "John" };
let obj2 = obj1;   // both obj1 and obj2 refer to the same object
obj2.name = "Alice";  // changing obj2 affects obj1 as well
It's important to understand the distinction between primitive types and reference types, 
as it impacts how variables behave and how values are stored and accessed in memory. 
Primitive types are simple values stored directly, while reference types are objects 
stored by reference, allowing for more complex data structures and behaviors.

*/

//////////////////////////////////////////////////

/**
 * When you declare a variable with var inside a for loop, the variable has function scope or global scope, depending on where the loop is defined. 
 * This means that the variable is accessible within the entire function, regardless of the block it is declared in.
 * function example() {
  for (var i = 0; i < 5; i++) {
    console.log(i); // Outputs 0, 1, 2, 3, 4
  }
  console.log(i); // Outputs 5
}
example();
 * 
 * When you declare a variable with let or const inside a for loop, the variable has block scope. 
 * Block scope means that the variable is only accessible within the block where it is defined (in this case, the for loop block).
 * 
 * Example:
function example() {
  for (let i = 0; i < 5; i++) {
    console.log(i); // Outputs 0, 1, 2, 3, 4
  }
  console.log(i); // Throws an error: ReferenceError: i is not defined
}
example();
 * 
 * 
 */

//////////////////////////////////////////////////////////////

/**
 * In JavaScript, NaN stands for "Not a Number." To check if a value is NaN, you can use the isNaN() function or the Number.isNaN() method.
 * The isNaN() function converts the argument to a Number and checks if it is NaN. 
 * However, it has some quirks. It attempts to convert non-numeric values to a number before checking, so it may produce unexpected results.
 * 
In JavaScript, NaN stands for "Not a Number." It is a special value that represents an unrepresentable or undefined value resulting from an invalid mathematical operation. It is often returned as a result when you perform arithmetic operations or other mathematical computations that fail or produce nonsensical results.

Here are a few examples of operations that can result in NaN:

javascript
Copy code
console.log(0 / 0);       // NaN
console.log(Math.sqrt(-1));  // NaN
console.log(parseInt("Hello"));  // NaN
To check if a value is NaN, you can use the isNaN() function or the Number.isNaN() method.

isNaN() function:
The isNaN() function converts the argument to a Number and checks if it is NaN. However, 
it has some quirks. It attempts to convert non-numeric values to a number before checking, so it may produce unexpected results.

Example:
console.log(isNaN("Hello"));      // true
console.log(isNaN("123"));        // false
console.log(isNaN(123));          // false
console.log(isNaN(NaN));          // true
*
*
*
*The Number.isNaN() method is a more reliable and stricter way to check for NaN. 
It only returns true if the argument is NaN, and it does not try to convert non-numeric values.

Example:
console.log(Number.isNaN("Hello"));      // false
console.log(Number.isNaN("123"));        // false
console.log(Number.isNaN(123));          // false
console.log(Number.isNaN(NaN));          // true

As shown in the example, Number.isNaN("Hello") returns false because it 
doesn't attempt to convert the string to a number, and Number.isNaN(NaN) returns true as expected.
 */

///////////////////////////////////////////////////////////////////////////////

//Arrays:
//An array in JavaScript is an ordered list-like object that stores a collection of values. 
//The values can be of any type, including other arrays or objects. Unlike objects, arrays 
//use numeric indices to access elements, and the order of elements is preserved. 
//The indices start from zero, and arrays have a length property that indicates the number of elements in the array.

//Objects:
//An object in JavaScript is an unordered collection of key-value pairs, 
//where each value is identified by a unique key (also called a property name). 
//Objects are dynamic, mutable, and can hold various types of data, including functions. 
//The keys are usually strings or symbols, and the values can be any JavaScript data type.
