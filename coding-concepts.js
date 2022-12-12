// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

//--------------------1) What will this log?

const cohort = "Hotel 2022"
// console.log(cohort.split(""))

// a) Your answer: I predict that the .split method string will log each letter individually. It will split up the sentence. 
// b) Verify and explain: 
// When I console logged :
// console.log(cohort.split(""))
// ['H', 'o', 't', 'e', 'l', ' ', '2', '0', '2', '2']
// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: I think that console.log(greeter("LEARN Student") will log undefined because there is no return. The function  is incomplete. 
// b) Verify and explain: The answer is undefined because functions must have a return. 

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: [8,10,12,14,8]
// b) Verify and explain: The .map iterates accross all elements. Only one line of code was written and so a return is automatic and does not have to be written out.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: The .filter in this code lets me know that it will return a subset of the original array. .filter also serves as an iterator.
// b) Verify and explain: [11, 13, 15] given the fact that .filter serves an iterator, it passed every number that was even and only filtered out the odd numbers.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: I predict that this code will log "JavaScript"
// b) Verify and explain: We have our object that has key value pairs. Languages was called on and at the 0 index, was the element Javascript.

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Hotel"
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: I do not think that this will log much. We have our function and we have key value pairs of student, cohort and year. When I look at the const learnStudent = new Learn("George"), I noticed that none of the key value pairs were used here and console.log(learnStudent) would give us an answer of undefined. 
// b) Verify and explain:
// It gave an answer of undefined because there is no assigned value using the key value pairs. There is not enough information in const learnStudent = new Learn("George") to ouitput anything. 