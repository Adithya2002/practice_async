import * as Rx from "rxjs/Observable";

console.log(Rx);
console.log("Hello All");

// Function defination
function greetings() {
    var addressTo = "World";
    function callback() {
      console.log("Hello " + addressTo);
    }
    addressTo = "Heavens";
    // Returning the callback
    return callback;
}
// alert('Out of function');
console.log('Out of function');
// Uncommenting the line below shows that the variable addressTo is out of scope
// addressTo = "Hell";

console.log("Calling in main body");
const greet = greetings();
greet();
// addressTo is still available to the function. But look at the value. 
// This tells that the variable is overwritten and the function still has access 
// to the updated variable

// Have a look at the function. It looks more like an object than a function
console.dir(greet);

// Ok, now we create another function which accepts a functin and excutes it
const foo = (func: any) => {
    func();
};
// Nothing fancy here

// Now lets call the function with the internal function
console.log("Calling inside function");
foo(greetings());
// addressTo is still available

// Final test. Lets set an call after 5 seconds.
setTimeout(() => {
    console.log("But I still have access to the varaible addressTo");
    foo(greetings());
}, 5000);

// Meanwhile we reach the end of the file and will exit
console.log(`This is final bye`);
// alert('Final Bye');
// Bye Bye