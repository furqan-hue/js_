let userAge = 22;
let isCitizen = false;
let isRegistered = false;
if(userAge >= 18){
    if(isCitizen){
        if(isRegistered){
            console.log("you are eligible to vate");
        }
        else{
            console.log("you are not eligible due to registration status");
        }

    }
    else{
        console.log("you are not eligible due to citizen status");
    }
}
else{
    console.log("You are not eligible to vote");
}