var num = 1;
do{
    console.log(num);
    num++;
}
while(num <= 0);



let userInput;
let positiveNumber;
do{
    userInput = prompt("Enter any positive number");
    postiveNumber = parseFloat(userInput);
}
while(isNaN(positiveNumber) || positiveNumber < 0);
console.log("you entered a valid positive number : ", positiveNumber);
