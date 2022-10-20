// ## Iteration 1: Names and Input

//   1.1 Create a variable `hacker1` with the driver's name.
let hacker1 = "Alice";

//   1.2 Print `"The driver's name is XXXX"`.
console.log("The drivers name is " + hacker1 + ".");

//   1.3 Create a variable `hacker2` with the navigator's name.
let hacker2 = "Bob";

//   1.4 Print `"The navigator's name is YYYY"`.
console.log("The navigators name is" + hacker2);

// ### Iteration 2: Conditionals

//   2.1. Depending on which name [is longer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length), print:
// 	  - `The Driver has the longest name, it has XX characters` or 
// 	  - `Yo, navigator got the longest name, it has XX characters` or
// 	  - `Wow, you both got equally long names, XX characters!`
if ((hacker1.length) > (hacker2.length)) {
  console.log("The driver has the longest name it has " + hacker1.length + " " + characters);
} else if ((hacker1.length) < (hacker2.length)) {
  console.log("The navigator has the longest name it has " + hacker2.length + " " + characters);

} else {
  console.log("Wow you both have equally long names, " + hacker1.length + " characters!");
}

// ### Iteration 3: Loops

//   3.1 Print all the characters of the driver's name, separated by a space and [in capitals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
//   i.e. `"J O H N"`
let output = '';
for (let i = 0; i < hacker1.length; i++) {
  output += hacker1[i].toUpperCase() + ' ';

}
console.log(output.trim())

//   3.2 Print all the characters of the navigator's name, in reverse order. 
//   i.e. `"nhoJ"`
for (let i = hacker1.length - 1; i >= 0; i--) {
  console.log(hacker1[i])
}


//   3.3 Depending on the [lexicographic order](https://en.wikipedia.org/wiki/Lexicographical_order) of the strings, print:
//     - `The driver's name goes first.`
//     - `Yo, the navigator goes first definitely.`
//     - `What?! You both got the same name?`
if (hacker1.localeCompare(hacker2) === -1) console.log("The driver's name goes first");
else if (hacker1.localeCompare(hacker2) === 1) console.log("Yo, the navigator goes first definitely.")
else console.log("What?! You both got the same name?")


// ### Bonus Time!
// Go to [lorem ipsum generator](http://www.lipsum.com/) and:
//   - Generate 3 paragraphs. Store the text in a variable type of string.
//   - Make your program count the number of words in the string.
//   - Make your program count the number of times the Latin word [`et`](https://en.wiktionary.org/wiki/et#Latin) appears.
let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere quam sed ornare mattis. Pellentesque maximus eros semper aliquet rhoncus. Ut ac molestie enim. Suspendisse dictum, mi non mattis aliquet, urna ipsum auctor metus, vehicula finibus quam turpis sit amet lacus. Vivamus lacinia tortor odio, at scelerisque sapien scelerisque at. Nunc id elit a eros elementum commodo porttitor ut enim. Praesent at ultrices orci. Integer sagittis odio at libero interdum, sit amet pellentesque turpis scelerisque.
Suspendisse vitae ante quis nunc ullamcorper faucibus. Quisque sed purus sollicitudin arcu congue aliquam. Pellentesque sollicitudin sapien non nibh vehicula, ac faucibus orci lacinia. Mauris risus arcu, efficitur ut lacus eget, accumsan facilisis ligula. Vivamus nec porttitor lorem. Integer semper nisi non elit commodo, non sollicitudin dolor volutpat. Vivamus mollis ex eu facilisis feugiat. Nulla facilisi. Nam sapien ipsum, ultrices id sodales ac, porta ac lectus. Nulla et nulla iaculis, efficitur diam ac, eleifend libero.
Mauris mattis ligula euismod, rutrum ipsum eget, mattis nulla. Praesent nec augue eget libero eleifend mattis. Suspendisse faucibus arcu ut ligula tempor volutpat. Pellentesque nec molestie turpis. Donec mollis ex in magna ultrices, et placerat mi auctor. Praesent eu arcu vel ipsum pharetra euismod. Donec augue est, blandit sed pharetra sed, laoreet nec augue. Sed ultricies, ante in tempor ultrices, neque felis convallis erat, eget convallis orci elit in sem. Nulla blandit augue eros, quis egestas elit commodo interdum. Donec imperdiet imperdiet lectus, ac scelerisque odio semper eget. Donec vulputate tellus nec tincidunt pharetra. Aliquam accumsan tincidunt mi, in tristique velit egestas id. Nullam in magna urna. Maecenas tincidunt quam non lorem rhoncus vulputate.`


let wordCount = 1;
for (let i = 0; i < lorem.length - 1; i++) {
  if (lorem[i] === ' ') {
    wordCount++;
  }
}
console.log(wordCount)

// counts also 'amet' as an occurence
// for exact match : console.log(string.split(/\et\b/).length - 1);

let foundEt = 0;
for (let i = 0; i < newbonus.length; i++) {
  if (newbonus[i].includes("et"))
    foundEt += 1;
}

console.log(foundEt)

// Ask the user for a new string and check if it's a *palindrome*. Examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw" and "No x in Nixon".

let palindrome = "stack cats";

function isPalindrome(str) {
  // remove whitespace
  var re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, '');

  var len = str.length;
  for (var i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome(palindrome));