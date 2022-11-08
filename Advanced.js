
///////////////////////     advanced JS

/////   3.1      <-Done

// function makeCounter() {
    
//     let count = 0;
//     return function() {
//         return count++;
//     };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();
// console.log( counter() ); // 0
// console.log( counter() ); // 1
// console.log( counter2() ); // 0
// console.log( counter2() ); // 1      // Yes they are seperate






//////  3.2     <-Done


// function makeCounter(){
//     let count = 0;
//     function counter(){
//         return count++;
//     }
//     counter.set = value => count = value;
//     counter.decrease = ()=>count--;
//     counter.increase = ()=>count++;
//     return counter;
// }
// let myCounter = makeCounter();

// myCounter.set(15);

// console.log(myCounter());
// myCounter.decrease();

///////////////alt version


// class makeCounter {
//     constructor(count){
//         this.count = count;
//     }    
    
//     set(num){this.count=num};

//     getNextNumber(){
//         this.count++;
//         return this.count;
//     }

//     decrease(){
//         this.count--
//         return this.count;
//     }

// }

// let counter = new makeCounter(5);

// console.log(counter.getNextNumber());   // step 1

// counter.set(8)

// console.log(counter.getNextNumber());   // step 2

// counter.decrease();
// counter.decrease();

// console.log(counter.getNextNumber());   // step 2








/////// 3.3 - Set Interval  <-Done

// function printNumbers(from,to){

//     let start = from;

//     let interval = setInterval(printNext,1000) 

//     function printNext(){
//         if(typeof start!== "number" || typeof to !== "number" ){   
//             console.log("one value is not a number");
//             clearInterval(interval);
//         }
//         else if(start > to){        //count down 
//             console.log(start);
//             start--;
//         }
//         else if(start<to){          //count up
//             console.log(start);
//             start++;

//         }
//         else if(start === to){      //stop
//             console.log(start);
//             clearInterval(interval);
//         }

//     }

// }

// printNumbers(3, 6)  








/////// 3.3 - Set Timeout  <-Done

// function printNumbers(from,to){

//     let start = from;
//     let finish = to;

//     let timeout = setTimeout(printNext,1000)

//     function printNext(){
//         if(typeof start!== "number" || typeof finish !== "number" ){
//             console.log("one value is not a number");
//         }
//         else if(start > finish){
//             console.log(start);
//             start--;
//             setTimeout(printNext,1000);
//         }
//         else if(start<finish){
//             console.log(start);
//             start++;
//             setTimeout(printNext,1000);
//         }
//         else if(start === finish){
//             console.log(start);
//         }
//     }

// }

// printNumbers(3,6);







///////  3.4    call with latest parameters after 1000ms of inactivity    <-Come back to this

// function debounce(func, ms) {
//     let timeout;
//     return function () {
//       clearTimeout(timeout);
//       timeout = setTimeout(() => func.apply(this, 
//         arguments), ms);
//     }}
  
//   let f = debounce(console.log, 1000);
//   f("a"); //this was called first //in the debounce ready to be called after 1 sec
  
//   setTimeout( () => f("b"), 200); //this was called instantly after f"a"
//   setTimeout( () => f("c","d"), 500); //this was called instantly as well
  
  
//   setInterval(console.log, 1000, "hello")
  
//   console.log("hello")
  





/////// 3.5       <-Done



// let prompt = require('prompt-sync')();

// function askPassword(ok, fail) {

//     let password = prompt("Password?", '');

//     if (password == "rockstar") ok();

//     else fail();

//     }

//     let user = {
//         name: 'John',
//         login(result) {
//             console.log( this.name + (result ? ' logged in' : ' failed to log in') );
//             }
//     };

// askPassword(() => user.login(true), () => user.login(false));






/////// 3.6       <-Done

// let head = {
//     glasses: 1
// };

// let table = {
//     pen: 3,
//     __proto__:head,
// };

// let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__:table,
// };

// let pockets = {
//     money: 2000,
//     __proto__:bed,
// };

// console.log(pockets.pen);
// console.log(bed.glasses);

//  answer - it's faster because it references one memory






//////  3.7     <-Done

// class User {
//     constructor(name){
//         this.name = name;
//     }
// }
  
// let user = new User('Lee');
// let user2 = new user.constructor('Steve');
  
// console.log( user2.name );  // Correct works!






//////  3.8     <-Done

// class deferAdd{

//     add(a,b){
//         console.log(a+b)
//     }

//     defer(mili,a,b){
//         setTimeout(this.add,mili,a,b);
        
//     }
// }

// let f = new deferAdd;

// f.defer(500,5,5)






//////  3.9 <-- done


// let dictionary1 = Object.create(null,{      //Enumerable function (Param 2) 
//     toString:{
//         value(){
//             return Object.keys(this).join();
//         }
//     }
// });

// dictionary1.property1 = "Value1";
// dictionary1.property2 = "Value2";
// dictionary1.property3 = "Value3";

// // for(let keys in dictionary1){
        
// //     console.log(keys + ",")
// // }

// dictionary1.toString();






///////   3.10  <come back to this one

// class Clock {
//     constructor() {
//         this.template = "h m s";
//     }
//     render() {
//         let date = new Date();
//         let hours = date.getHours();
//         if (hours < 10) hours = '0' + hours; //01.. 05... 09.. 10 11 01 02 03 04
//         let mins = date.getMinutes();
//         if (mins < 10) mins = '0' + mins;
//         let secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;
//         let output = this.template
//             .replace('h', hours)
//             .replace('m', mins)
//             .replace('s', secs);
//         console.log(output);
//     }
//     stop() {
//         clearInterval(this.timer);
//     }
//     start() {
//         this.render();
//         this.timer = setInterval(() => this.render(), 1000);
//     }
// }



// class ExtendedClock extends Clock {
//     constructor(options) {
//         super();
//         this.precision = options;
//     }
//     start() {
//         this.render();
//         this.timer = setInterval(() => this.render(),this.precision);
//     }
// };



// //this to run the normal clock

// let myClock = new Clock()

// // myClock.start()

// //this is to run the extended clock with 3000ms
// let exClock = new ExtendedClock(3000)
// exClock.start()






///////   3.11  <-Done


// class FormatError3243234 extends SyntaxError{
//   constructor(message){
    
//     super(message);                   //gets message from new instance 
//     this.name = this.constructor.name;      //gets name from class name
 
//   }
// }

// let err = new FormatError3243234("showing the new formatting error");

// console.log(err.message);
// console.log(err.name);
// console.log(typeof err.stack);   
// console.log("Anything")






//////    3.12  <-Done



// function delay(mili) {

//   return new Promise((resolve)=>{setTimeout(resolve,mili)},(reject)=>{setTimeout(reject,mili)} )    // returns resolve after setTimeout
 
// }

// delay(3000).then(() => {console.log("Runs after 3 seconds")}).catch(() => {console.log("Rejected")}) 








///////     3.13   <-- Done



// async function loadJson(url) { // (1)
  
//     let response = await axios(url);
  
//     if (response.status == 200) {
//       let json = await response; // (3)
//       console.log(response.status)
//     };
//     // throw new Error(response.status);
//   }

// loadJson('https://fakestoreapi.com/products/').catch(console.log()); // Error: 404 (4)
