/*V. Objects

A. Make a user object
Create an object called user.
Write in to the object the key-value pairs for name, email, age, and purchased. 
Set the value of purchasedto an empty array []. Set the other values to whatever you would like. */
const user = {
    name: "name",
    email: "email@gmail.com",
    age: 17,
    purchased: []
}

/*B. Update the user
Our user has changed his or her email address. 
Without changing the original user object, update the email value to a new email address.
Our user has had a birthday! Without changing the original userobject, 
increment the agevalue using the postfix operator. Hint: age++ */
user.email = "newemail@gmail.com"
user.age++;
console.log(user);

/*C. Adding keys and values
You have decided to add your user's location to the data that you want to collect.
Without changing the original userobject, add a new key locationto the object, 
and give it a value or some-or-other location (a string).*/
user.location = "Jersey"
console.log(user);

// D. Shopaholic!
// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), 
// add the string "carbohydrates" to the purchasedarray.
user.purchased.push('carbohydrates');
console.log(user);
// Our user has purchased an item! They have purchased some "peace of mind". 
// Using .push(), add the string "peace of mind" to the purchasedarray.
user.purchased.push("peace of mind");
console.log(user);
// Our user has purchased an item! They have purchased some "Merino jodhpurs". 
// Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
user.purchased.push("Merino jodhpurs");
console.log(user);
// Console.log just the "Merino jodhpurs" from the purchasedarray.
console.log(user.purchased[2]);

// E. Object-within-object
// Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.
// Write a friend object into your user object and give the friend a name, age, location, 
// and purchased array (empty for now)

user.friend ={ 
    name: "Frodo",
    location: "Mars",
    age: 19,
    purchased: []
};
console.log(user);
// Console.log just the friend's name
console.log(user.friend.name);
// Console.log just the friend's location
console.log(user.friend.location);
// CHANGE the friend's age to 55
user.friend.age = 55;
console.log(user.friend.age);
// The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchased array.
user.friend.purchased.push("The One Ring");
// The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
user.friend.purchased.push("A latte");
// Console.log just "A latte" from the friend's purchasedarray.
console.log(user.friend.purchased[1]);

// F. Loops
// Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), 
// and prints each element to the console.
for (let i = 0; i < user.purchased.length; i++)
console.log( user.purchased[i]);
// Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.
for (let i = 0; i < user.friend.purchased.length; i++)
console.log( user.friend.purchased[i]);


// G. Functions can operate on objects
// Write a single function updateUserthat takes no parameters. When the function is run, it should:
// it should increment the user's age by 1
// make the user's name uppercase
// The function does not need a returnstatement, it will merely modify the user object.
function updateUser() {
    user.age += 1;
    user.name = user.name.toUpperCase();
}
// Write a function oldAndLoudthat performs the exact same tasks as updateUser, 
// but instead of hard-coding it to only work on our user object, make it take a parameter person, 
// and have it modify the object that is passed in as an argument when the function is called. 
// Call your oldAndLoudfunction with user as the argument.
function oldAndLoud(person) {
    person.age += 1;
    person.name = person.name.toUpperCase();
}

oldAndLoud(user);