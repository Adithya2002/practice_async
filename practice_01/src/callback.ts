import { setInterval, getFirstName, getLastName, getEarning } from './utils';

// setInterval functions defines the delay in getting the resule
// getFirstName takes the first name as input and returns back the value if it is a valid one. Else returns "Joker"
// getLastName takes  the first name as input and returns back the last name if it is a valid one. Else returns "Joker"
// getEarning takes first name and last name as input and returns earnings if the name is valid. Else returns "Loser"


setInterval(3000);

var actorFName = "";
var actorLName = "";

// On click of the button, this gets the name entered by the user
// Your job here is to call the async function getFirstName along with the call back to validate that the name is valid
document.getElementById("start").onclick = function() {
    
    actorFName = (<HTMLInputElement>document.getElementById("actor")).value;
    getFirstName(actorFName, callbackFirstName);
    
    getLastName(actorFName, (lastname:any) => {
        if(lastname != 'Joker'){
            callbackLastName(lastname)
            getEarning(actorFName, lastname, callbackEarning)
        }
        else{
            callbackLastName('Joker')
            getEarning(actorFName, lastname, callbackEarning)
        }
    });
    
}

// If the name is valid, this callback function should populate the html with the first name
// It should then call getLastName to get the Last name of the  actor

function callbackFirstName(val: string) {
    document.getElementById("fname").innerHTML = val;
}

// If the last name is valid, write the name to html file. Now with first name and last name, get the actors earning
function callbackLastName(val: string) {
    document.getElementById("lname").innerHTML = val;
}

// And populate the html
function callbackEarning(val: string) {
    document.getElementById("earning").innerHTML = val;
}