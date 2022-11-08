
///////////////////////////// Intermediate

// exercise 2.1

// let ucFirst = (str) => {
//     let firstLetter = str.charAt(0).toUpperCase() ;
//     let restOfString = str.slice(1);
    
//     return firstLetter + restOfString;

// }
// console.log(ucFirst("hello"));



// exercise 2.2

// let truncate = (str, maxlength) => {
//     (str.length < maxlength) ? console.log(str) : console.log(str.slice(0,maxlength) + "...");
    
// }

// truncate("What I'd like to say about this topic is blah, blah, blah",5);


// exercise 2.3

// let styles = ["Jazz","Blues"] ;

// styles.push("Rock-n-Roll")

// styles.splice(1,1,"classics")

// console.log(styles.shift());

// styles.unshift("Rap","Reggae");


// console.log(styles);




// exercise 2.4

// function camelize(str){
//     let result = "";
//     let lastValueWasDash = false;

//      for (let i in str){
//         //   console.log(str[i]);

//         if(str[i] === "-"){
//             lastValueWasDash = true;
            
//         }
//         else if(lastValueWasDash === true){
//             lastValueWasDash = false;
//             result = result + str[i].toUpperCase();
//         }
//         else{
//             result = result + str[i] ;
//         } 
//      }

//     return result;
// }

// console.log(camelize("Hello-you-cool-cat"))




// exercise 2.5


// class Calculator{

//     methods = {
//       "-": (a, b) => a - b,
//       "+": (a, b) => a + b
//     };
  
//     calculate = function(str) {
  
//       let split = str.split(' '),
//         a = +split[0],
//         op = split[1],
//         b = +split[2];
  
//       if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//         return NaN;
//       }
  
//       return this.methods[op](a, b);
//     };
  
//     addMethod = function(name, func) {
//       this.methods[name] = func;
//     };
//   }


// let calc = new Calculator();

// console.log(calc.calculate("3 + 7"))    //(Step 1)

// calc.addMethod("*", ((a, b) => a * b));

// console.log(calc.calculate("3 * 7"))    //(Step 2)








// exercise 2.6

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
//     ];

// function unique(arr) {
    
//     let result = new Set();

//     for(let indice in arr){
//         result.add(arr[indice])
//     }
    
//     return result
//     }

// console.log(unique(values));




// exercise 2.7

// let map = new Map();
// map.set("name1", "John");
// map.set("name2", "Mike");
// map.set("name3", "Lee");

// // let keys = Array.from(map.keys());    // Answer 1 - Array.from 

// let keys = [...map.keys()];              // Answer 2 - Spread 


// keys.push("something");

// console.log(keys);




// exercise 2.8



// weak set - data structure 









// exercise 2.9

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250,
//     "Lee" : 450
//     };

// function sumSalaries(obj){
//     let result =0;
//     let objValuesArray = Object.values(obj);

//     for(let item in objValuesArray){
//          result += objValuesArray[item];
//     }

//     return result;
// }

// console.log( sumSalaries(salaries) ); // 650





// exercise 2.10

// const salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250,
//     "Lee" : 500
//     };

// function topSalary(salaries){

//     let topSalaryValue = 0;
//     let topSalaryName = null;

//     for (const [key, value] of Object.entries(salaries)) {
    
//         if(value > topSalaryValue){
//             topSalaryValue = value;
//             topSalaryName = key;
//         }
//     }

//     return `The top salary is ${topSalaryName}`
// }

// console.log(topSalary(salaries));





// exercise 2.11

// function getSecondsToday(){
//     let result = 0;

//     let today = new Date();
//     let hours = today.getHours()
//     let minutes = today.getMinutes()
//     let seconds = today.getSeconds()

//     result = seconds + (minutes * 60) + (hours * 60 * 60);
    
//     return result;
// }

// console.log(getSecondsToday());




///////     exercise 2.12 

// let room = {
//     number: 23
// };

// let meetup = {
// title: "Conference",
// occupiedBy: [{name: "John"}, {name: "Alice"}],
// place: room
// };


// // circular references
// room.occupiedBy = meetup;
// meetup.self = meetup;

// const getCircularReplacer = () => {         //copied from mdn wesite 
//     const seen = new WeakSet();
//     return (key, value) => {
//         if (typeof value === "object" && value !== null) {
//         if (seen.has(value)) {
//             return;
//         }
//         seen.add(value);
//         }
//         return value;
//     };
// };
      
// console.log(JSON.stringify(meetup, getCircularReplacer())) ;        // function above is called in stringify parameters


////////////////////////////////// below not needed

// {"otherData":123}));


/* result should be:
{
"title":"Conference",
"occupiedBy":[{"name":"John"},{"name":"Alice"}],
"place":{"number":23}
}
*/




