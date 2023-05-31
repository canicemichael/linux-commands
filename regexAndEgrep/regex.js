// we have some methods for using regex in javascript
// search() replace() test() exec()

// In javascript, regular expressions are also objects. These patterns
// are used with the exec() and test() methods of RegExp, with the 
// match(), matchALl(), replace(), replaceAll(), search(), and
// split() methods of String.


let text = "Visit Wisedom";
let text2 = "AAAL";
let res = text.match(/wise/i);
let res2 = /[A-Z]{3}/.exec(text2);

let word1 = "look";
let ans1 = word1.match(/lo{2}k/);


let word2 = "looking";
let ans2 = word2.match(/lo+k/);

let income = 58327;
let expense = 3467;
let word3 = "Today I earned $58327 but lost $3467";
let ans3 = word3.match(/\$\d{4}/);

let word4 = "Now that's the truth and you know it.";
// console.log(word4.match(/\bt\w+\b/g));
let ans4 = word4.match(/\bt\w+\b/g);

let word5 = "Now we still match 4010 but not 4000";
// let ans5 = word5.match(/\b4(?!000)\d\d\d\b/);
let ans5 = word5.match(/\b4(?=000)\d\d\d\b/);
// console.log(ans5);

// positive lookbehind
let word6 = "Now we won't identify Smith Francis but we will identify Harold Smith.";
let ans6 = word6.match(/(?<=[A-Z]\w* )Smith/)
console.log(ans6);

