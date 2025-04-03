// the users input word is declared for js
let input1 = document.getElementById("word");
let button = document.getElementById("button");
let output1 = document.getElementById("code-output");

console.log(button, " is the button.");

// defines the function
const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
function encoder1(){
    let val_ = input1.value;
    let value = val_.toUpperCase()
    console.log("INPUT IS: ", value);


    let len = value.length;
    console.log(" The word is ", len, " letters long.");

    let encodedValue = "";

    for(let i=0;i<len; i++) {
        console.log("the letter is ", value[i]);
        //encryption algorithm
        //convert letters to numbers
        let result = alphabet.indexOf(value[i]);
        encodedValue += result +"."; 
    }
    output1.innerHTML = encodedValue; 
}

//user input word is decoded 
let input2 = document.getElementById("word2");
let button2 = document.getElementById("button2")
let output2 = document.getElementById("code-output2")

//decoder 1 
function decoder1(){
    let val_ = input2.value;
    console.log(val_, " is the value");

    let len = val_.length;
    console.log(" The variable len is ", len);


    for(let i=0;i<len; i++ ) {
        console.log("the index is ", i);
        console.log("when the value is ", val_[i]);
    }

}

//function call