let codeOutput = document.getElementById("code-output");
// Assignment Operator 
let x = 3; 
console.log("The assignment operator is the equal sign", x);

// The astrick is the multiplication operator 
let z = x * 3; 
console.log("x * 3 = ", z);

// The plus sign can be used as an addition operator for numbers 
let y = x + 5;
console.log("x + 5 = ", y);

// The plus sign can be used as a concatenator operator for strings 
let a = "" 
let b = a + y; 
console.log("a + y = ", b); 

// The percentage sign is the modulus operator 
// It returns the remainder of a number afte division
console.log("y % 3 = ", y % 3);

//The comparison operators compares two values
// The compariosn operator is a double or triple equal sign 
// Double equal tests for equal values 
// Triple equal test for equal value and equal data type 
if(b === y){ 
    console.log("If b == y", b === y);
}
else{
    console.log("b did not equal y", b === y);
}
codeOutput.innerHTML = 'Check operators in console'

