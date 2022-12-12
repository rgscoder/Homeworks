// III. Arrays & Control flow

// A. Talk about it
// What are the things in an array called?
"Each variable in an array is called an element"
// Do Arrays guarantee those things will be in order?
"Not necessarily. Only ordered arrays can put elements in ascending/descending order"
// What real-life thing could you model with an array?
"Phone numbers, or a list of songs from an album"

// B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes
const quotes = [
    "Every",
    "Villian",
    "Is Lemons",
];

// // C. Accessing elements
// // Given the following array const randomThings = [1, 10, "Hello", true]
// // How do you access the 1st element in the array?
// const randomThings = [1, 10, "Hello", true];
// const firstEle = randomThings[0];
// console.log(firstEle);
// // Change the value of "Hello"to "World"
// randomThings[2] = "World";
// console.log(randomThings);

// // D. Change values
// // Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
// // What would you write to access the 3rd element of the array?
// ourClass[2];
// // Change the value of "Github" to "Octocat"
// ourClass[4] = "Octocat";
// // Add a new element, "Cloud City" to the array
// ourClass[5] = "Cloud City";
// //or
// // ourClass.push("Cloud City");
// console.log(ourClass);

// E. Mix It Up
// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

// // Given the following array: const myArray = [5, 10, 500, 20]
// const myArray = [5, 10, 500, 20]
// // Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
// myArray[4] = "Aegon";
// myArray.push("The Great");
// // console.log(myArray);
// // Remove the 5 from the beginning of the array.
// myArray.shift([1]);
// console.log(myArray);
// // Add the string "Bob Marley"to the beginning of the array.
// myArray.unshift("Bob Marley");
// console.log(myArray);
// // Remove the string of your choice from the end of the array.
// myArray.pop();
// console.log(myArray);
// // Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?

// console.log(myArray.reverse());
// "mutate means changing a properties value"

// // F. Biggie Smalls
// // Create a variable that contains an integer.
// let num = 100;
// // Write an if ... elsestatement that:
// // console.log()s "little number" if the number is entered is less than 100
// if (num < 100) {
//     console.log("little number")
// }
// // console.log()s big numberif the number is greater than or equal to 100.
// else {
//     console.log("big number")
// }

// // G. Monkey in the Middle
// // Write an if ... else if ... elsestatement:
// let num = 11
// // console.log()little numberif the number entered is less than 5.
// if (num < 5) {
//         console.log("little number")
//     }
// // If the number entered is more than 10, log big number.
// else if (num > 10) {
//         console.log("big number")
//     }
// // Otherwise, log "monkey".
// else {
//     return console.log("monkey");
// }

// H. What's in Your Closet?

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

// //   What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
// console.log("Kristyn is rocking that " +  kristynsCloset[3] + " today!")
// // Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
// kristynsCloset.splice(5, 0, 'raybans');
// console.log(kristynsCloset);
// // Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
// kristynsCloset[6] = "stained knit hat";
// console.log(kristynsCloset);
// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
console.log(thomsCloset[0][0]);
// In the same way, access one item from Thom's pants array.
console.log(thomsCloset[1][2]);
// Access one item from Thom's accessories array.
console.log(thomsCloset[2][1]);
// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " + thomsCloset[1][2] + " and " + thomsCloset[2][1] + "!");
// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = "Footie Pajamas";
console.log(thomsCloset[1]);