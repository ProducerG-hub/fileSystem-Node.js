const file = require('fs');
//This is used to check if the particular fie is present or not
if(file.existsSync('steve.txt') && file.existsSync('daudi.txt')){
    console.log("The files checked are present");
}
else{
    console.log("The files checked are unavailable");
}