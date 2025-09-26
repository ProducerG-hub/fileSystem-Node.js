//Remember that in any situation don't forget to inlude the 'fs' module
const file = require('fs');
console.log('\n');
//So as to read from a writen file don't forget 'utf8' since it prevents to display buffers eg. <buffer 65 6c 6e 46>
const data = file.readFileSync('mlue.txt','utf8');
console.log(data);
const read = file.readFileSync('daudi.txt','utf8');
console.log(read);

