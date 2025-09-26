//Appending means to add more content (text) without deleting the present one
const file = require('fs');
file.appendFileSync('steve.txt','\nAm a new line here');
const data = file.readFileSync('steve.txt','utf8');
console.log(data)