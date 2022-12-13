// ASSESSMENT 2: Coding Practical Questions with Jest

const { it } = require("node:test")
const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes an object as an argument and decides if the number inside it is evenly divisible by three or not.

//PSEUDOCODE: Declare a function named evenlyDiv
//         Input:An object that takes an argument/parameter
//         Operator used to check if a number is divisble: % modulo           
//         Expected Output:A Boolean that lets us know whether or not the number evenly is divisble by 3       
//        
   const evenlyDiv = {
   evenlyDivbyThree: "3",
   notEvenlyDivbyThree: "19",
   getData: function () {
     return `${evenlyDiv['3'] % 3 == 0 }`
    }
   }  
   console.log(evenlyDiv.getData())

 
// a) Create a test with expect statements for each of the variables provided.
//PSEDUO CODE
// Write a test for each of the statements
// See a "good failure"
//Use the "decribe()" convention
//yarn add jest
//yarn jest
const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
describe("anItem", () => {
   it("returns a number", () => {
     expect(thisItem("yes")).toEqual("15 is divisible by three")
   })
 })
 const object2 = { number: 0 }
 // Expected output: "0 is divisible by three"
 describe("thisOtherItem", () => {
    it("returns a number", () => {
      expect(object2("yes")).toEqual("0 is divisible by three")
    })
  })
 const object3 = { number: -7 }
 // Expected output: "-7 is not divisible by three"
 describe("lastItem", () => {
    it("returns a number", () => {
      expect(object1("yes")).toEqual("-7 is is not divisible by three")
    })
  })

// I wrote a test for each of the statements above, with expect statements but each of them failed the test with the output in terminal (look below). Instead of getting "gppd failure" of ReferenceError: greeter is not defined, terminal told me that "object1" is not a function. 
//orginally, inside of the describe statement I had "object 1" "object 2" and "object 3". But after the test failed, I changed it to "anItem" "thisOtherItem" and "lastItem" because I figured that it needed to be different from the expect statement. Both the describe and expect being the same is the reason I think the jest result told me that it was not a function. By the time I ran the test again, the Jest test suite failed to run.

// FAIL  ./code-challenges.test.js
  //object1
 // ✕ returns a number

●// object1 › returns a number

 // TypeError: object1 is not a function

   // 40 | describe("object1", () => {
   // 41 |    it("returns a number", () => {
  //> 42 |      expect(object1("yes")).toEqual("15 is divisible by three")
   //   |             ^
   // 43 |    })
  // 44 |  })
   // 45 |
   // at Object.object1 (code-challenges.test.js:42:13)


// b) Create the function that makes the test pass.

// function 
//PSEUDO CODE
//Input: Self-invoked
//Output: string "15 is divisible by three"
//Declare a function

const object1 = (answer) => {
   if (answer [15] % 3 == 0) {
      return "15 is divisible by three"
   }


// function 
//PSEUDO CODE
//Input: Self-invoked
//Output: "0 is divisible by three"
//Declare a function


const object2 = (answer) => {
   if (answer [0] % 3 == 0) {
      return "0 is divisible by three"
   } 


// function 
//PSEUDO CODE
//Input: Self-invoked
//Output: "-7 is not divisible by three"
//Declare a function


const object3= (answer) => {
   if (answer [-7] % 3 == 0) {
      return "15 is divisible by three"
   } else {
      return "this number is not evenly divisible by three"
   } 



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.


// function 
//PSEUDO CODE
//Input: Self-invoked
//Output: An array with all words capitalized
//Declare a function
//const randomNouns1  = () => {
//    return
//}


// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

describe(randomNouns1, () =>
it("returns ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]")
expect(randomNouns1("yes")).toEqual("no")

const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

describe(randomNouns2, () =>
it("returns "temperature", "database", "chopsticks", "mango"")
expect(randomNouns2("yes")).toEqual("no")

// With this portion, I was confused because comparing it to the coding challenges, Ie: Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired. <--- there were conditions provided and if the condition was yes there was a certain output and if no, another. But with this question, I was not too sure what the expect statement should have been. Not only that but from the previous question and jest test, my terminal produced the output of : (cont'd on line 161)
 //FAIL  Desktop/react-challenges/intro-bora-octavio/src/App.test.js
// ● Test suite failed to run

 //  Jest encountered an unexpected 
 // and I was not too sure how to troubleshoot this error

// b) Create the function that makes the test pass.

//Because of the first part of the question not fully being understood, I had a difficult time creating a defined function for both of these questions.

// function 
//PSEUDO CODE
//Input: Self-invoked
//Output: An array with all words capitalized
//Declare a function
const randomNouns1  = (answer) => {
   if (answer === ?)
   return ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
}

// function 
//PSEUDO CODE
//Input: Self-invoked
//Output: An array with all words capitalized
//Declare a function
//const randomNouns2  = (answer) => {
//    return
//}
const randomNouns2  = (answer) => {
   if (answer === ?)
   return ["temperature", "database", "chopsticks", "mango"]
}


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.
//PSEDUO CODE
// Create a function and declare it
//const firstVowel is the variable
//output: a string with a vowel first
//.search?


//const vowel = () => {
//return  
//}

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
//test("learn"), () => {
//  return 1
//}, timeout)
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.

// function 
//PSEUDO CODE
//Input: Self-invoked
//Output: "e"
//Declare a function
//const randomNouns1  = () => {
//    return
//}
//console.log(vowelTester1.indexOf[1])
// function 
//PSEUDO CODE
//Input: Self-invoked
//Output: "a"
//Declare a function
//const randomNouns1  = () => {
//    return
//}

// function 
//PSEUDO CODE
//Input: Self-invoked
//Output: "a"
//Declare a function
//const randomNouns1  = () => {
//    return
//}