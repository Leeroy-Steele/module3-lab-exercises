
//////////////// Fundamentals


// exercise 1.2

// let result1 = "" + 1 + 0;
// let result2 = "" - 1 + 0;

// let result3 = true + false;
// let result4 = 6 / "3";

// let result5 = "2" * "3";
// let result6 = 4 + 5 + "px";

// let result7 = "$" + 4 + 5;
// let result8 = "4" - 2;

// let result9 = "4px" - 2;
// let result10 = " -9 " + 5;

// let result11 = " -9 " - 5;
// let result12 = null + 1;

// let result13 = undefined + 1;
// let result14 = " \t \n" - 2;


// console.log(`result 1 equates to: ${result1} and the data type is a ${typeof(result1)}`);
// console.log(`result 2 equates to: ${result2} and the data type is a ${typeof(result2)}`);
// console.log(`result 3 equates to: ${result3} and the data type is a ${typeof(result3)}`);
// console.log(`result 4 equates to: ${result4} and the data type is a ${typeof(result4)}`);
// console.log(`result 5 equates to: ${result5} and the data type is a ${typeof(result5)}`);
// console.log(`result 6 equates to: ${result6} and the data type is a ${typeof(result6)}`);
// console.log(`result 7 equates to: ${result7} and the data type is a ${typeof(result7)}`);
// console.log(`result 8 equates to: ${result8} and the data type is a ${typeof(result8)}`);
// console.log(`result 9 equates to: ${result9} and the data type is a ${typeof(result9)}`);
// console.log(`result 10 equates to: ${result10} and the data type is a ${typeof(result10)}`);
// console.log(`result 11 equates to: ${result11} and the data type is a ${typeof(result11)}`);
// console.log(`result 12 equates to: ${result12} and the data type is a ${typeof(result12)}`);
// console.log(`result 13 equates to: ${result13} and the data type is a ${typeof(result13)}`);
// console.log(`result 14 equates to: ${result14} and the data type is a ${typeof(result14)}`);



//  exercise 1.3

// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);

// a=Number(a);
// b=Number(b);

// alert(a + b);



//  exercise 1.4

// let result1 = "apple" > "pineapple"
// let result2 = "2" > "12"
// let result3 = undefined == null
// let result4 = undefined === null
// let result5 = null == "\n0\n"
// let result6 = null === +"\n0\n"

// console.log(`result 1 equates to: ${result1} and the data type is a ${typeof(result1)}`);
// console.log(`result 2 equates to: ${result2} and the data type is a ${typeof(result2)}`);
// console.log(`result 3 equates to: ${result3} and the data type is a ${typeof(result3)}`);
// console.log(`result 4 equates to: ${result4} and the data type is a ${typeof(result4)}`);
// console.log(`result 5 equates to: ${result5} and the data type is a ${typeof(result5)}`);
// console.log(`result 6 equates to: ${result6} and the data type is a ${typeof(result6)}`);




//  exercise 1.5

// if ("0") {
//     alert( 'Hello' );
//     }




//  exercise 1.6

// let result;

// function underFour (a,b){
    
//     result = a+b<4;

//     result ? console.log("below") : console.log("Over");
// }

// underFour(4,2);




//  exercise 1.7

// const delayHelloFunction = (word) => {
//     return = setTimeout(hello(word),8000)
//     
// };

// const hello = (word) => console.log("hello " + word );

// delayHelloFunction('yes it\'s a big fat world');




// exercise 1.8

// let schedule = {};


// function isEmpty(object){ 
//     for(let i in object){ 
//         return false; } 
    
//     return true; 

//     }

// let result = isEmpty(schedule);

// console.log(result);                //Yes

// schedule.SevenThirty = "get up";    //Push property onto schedule

// result = isEmpty(schedule);         //Update result

// console.log(result);                //No 




// exercise 1.9

// let ladder = {
//     step: 0,

//     up() {
//     this.step++;
//     return this;

//     },
    
//     down() {
//     this.step--;
//     return this;
//     },

//     showStep: function() { // shows the current step
//     console.log( this.step );
//     return this;
//     }
// };


// ladder.up().up().up().down().up().showStep()




// exercise 1.10


// function Accumulator(startingValue){
//     this.currentValue = startingValue;
//     this.read = function(num){
//         this.currentValue = prompt("Please enter new value ", 5 );   // get value from prompt
//         // this.currentValue = num;    //Alternative for terminal
//     }
// }

// let x = new Accumulator(55);

// x.read();

// console.log(x.currentValue);

/////// alt version

// const prompt = require("prompt-sync")();

// function Accumulator(startingValue){
    
//     this.currentValue = startingValue;
    
//     this.read = function(){
//         let a = prompt("Please enter new value ");   // get value from prompt
//         this.currentValue += Number(a);              // add with current value
      
//     }

// }

// let x = new Accumulator(1);

// x.read();

// console.log(x.currentValue);



