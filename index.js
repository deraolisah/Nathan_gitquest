// document.getElementById("count").innerText = 5;



//let firstBatch = 5;
//let secondBatch = 7;
//
//let count = firstBatch + secondBatch;
//
//console.log(count);


/*
// 1. Create a variable, myAge and set it's value to your age
let myAge = 21;

// 2. Log the myAge variable to the console
console.log(myAge);
*/





/*
// 1. creat two variables, myAge and humanDogRatio
let myAge = 21;
let humanDogRatio = 7;

// 2. Multiply the two together and store the result in myDogAge
let myDogAge = myAge * humanDogRatio;

// 3. Log myDogAge to the console
console.log(myDogAge);
*/





// 1. Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// 2. Decrease it down to 25, and then finally increase it to 70.
// 3. Console.log the value after each step.
/*
let bonusPoints = 50;
console.log(bonusPoints);

bonusPoints = bonusPoints + 50;
console.log(bonusPoints);

bonusPoints = bonusPoints - 75;
console.log(bonusPoints);

bonusPoints = bonusPoints + 45;
console.log(bonusPoints);
*/





// 1. create a function (you decide the name) that logs out the number 42.
// 2. Call or invoke the function.
/*
function number(){
    console.log(42);
}
number();
*/





/*
let lap1 = 34;
let lap2 = 33;
let lap3 = 36;
// 1. Create a function that logs out the sum of all the lap times
function lapSum(){
    let totalTime = lap1 + lap2 + lap3;
    console.log(totalTime);
}
lapSum();
*/




/*
let lapsCompleted = 0;
// 1. Create a function that increments the lapsCompleted varaiable with one.
// 2. Run it three times

function incrementLap(){
    lapsCompleted = lapsCompleted + 1;
}
incrementLap();
incrementLap();
incrementLap();

console.log(lapsCompleted);
*/





/*
let username = "dera";
let message = "You have 3 new messages";

// 1. Create a variable, messageToUser, that contains the message we have logged.

let messageToUser = message + ", " + username + "!";

console.log(messageToUser);
*/






/*
// 1. Create two variables, name and greeting. The name variable should store your name, and the greeting should store e.g, "Hi, my name is "
// 2. Create a third variable, myGreeting, that concatenates the two strings together.
// 3. Log myGreeting to the console.

let name = "Chidera Olisah";
let greeting = "Hi, my name is ";

let myGreeting = greeting + name + ".";

console.log(myGreeting);
*/




/*
let points = 4;
let bonusPoints = "10";

let totalPoints = points + bonusPoints;

console.log(totalPoints);

console.log(4 + 5); // 9
console.log("2" + "4"); // "24"
console.log("5" + 1); // "51"
console.log(100 + "100"); // "100100"
*/





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// 1. Grab the welcome paragraph and store it in variable called welcome.
// 2. Create two variables (name & greeting) that contains your name and the greeeting we want to render on the page
// 3. Render the welcome message using welcome.innerText

let welcome = document.getElementById("welcome");

let name = "Chidera Olisah";
let greeting = "Welcome back ";

welcome.innerText = greeting + name;

// Add an emoji to the end!
welcome.innerText += " 👋";




// Initialize the count as 0
// Listen for clicks on the increment button
// Increment the count variable when the button is clicked (log it out)
// Change the Count Element in the HTML to reflect the new count

// A function can be used to remove repetition by calling the function whenever you want to use it, only after it has been created.

let count = 0;

    // grab the count element, store it in a variiable
let countNum = document.getElementById("count");

function increment(){
    // increment the count variable
    count += 1;
    // set the innerText of the count element to the new incremented value.
    countNum.textContent = count;
}




// Create a funcion, save(), which logs out the count whenever it is called.
// 1. Grab the "saved" paragraph and store it in a variable called entry.
// 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
// 3. Render the variable in the saveEl using innerText
// NB: Make sure to not delete the existing content of the paragraph

let saved = document.getElementById("save");

function save(){
    let entry = " - " + count ;
    
    saved.textContent += entry;
    
    countNum.textContent = 0;
    count = 0;
}


console.log("Let's count people in the subway, that enters a train.");



