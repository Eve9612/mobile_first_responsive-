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
    let trimValue = val_.trim();
    console.log("The trimeValue is",trimValue);
    let splitValue = trimValue.split(".");
    console.log("The Split value is", splitValue)
    splitValue.pop();
    console.log("The popValue is", splitValue);
    let len2 = splitValue.length;
    console.log("The len2 is", len2);
    let result = "";
    
    for(let i=0;i<splitValue.length; i++ ){
       console.log("the index is ", i);
       console.log("when the value is ", val_[i]);
       // if (val_[i]== "/"){
            console.log("here",typeof Number(splitValue[i]));
       // }
       // The algorithym for decoding goes here 
       let codeValue = alphabet[Number(splitValue[i])];
       console.log("The codeValue is", codeValue);
       if(splitValue[i] === "-1"){
        result += " "
       }
       else{
        result += codeValue
       }
    }   
        console.log("The final result is", result);
        output2.innerHTML = result.toLocaleLowerCase();
}

//function call