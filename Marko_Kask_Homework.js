
let randomNumber = Math.floor((Math.random() * 10) + 1);
console.log("Random number is " + randomNumber);
guessCount = 1;

console.log("Enter magic number! You can guess 3 times.")

let input = prompt("Enter magic number: ");

while(input!=randomNumber && guessCount <3){

    if(input == randomNumber + 1 || input == randomNumber - 1){
        console.log("You guessed quite close!");
    }

    if(input<randomNumber){
        console.log("Number is too small. Enter bigger number:");
        guessCount++;
        console.log(4-guessCount + " tries left!");
        input = prompt("Number is too small. Enter bigger number:");
    }else if(input>randomNumber){
        console.log("Number is too big. Enter smaller number:")
        guessCount++;
        console.log(4-guessCount + " tries left!");
        input = prompt("Number is too big. Enter smaller number:");
    }
}

if(input == randomNumber){
    console.log("You won !")
    console.log("Right number is " + randomNumber)
}else{
    console.log("You LOST !")
    console.log("Right number was " + randomNumber)
}


