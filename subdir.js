const file = require('fs');
//This condition will check the avaiability of the files if it is present you have to read it's content 
if(file.existsSync('new') && file.existsSync('./new/mlue.txt')){
    console.log('It is present');
    const data = file.readFileSync('./new/mlue.txt','utf8');
    console.log(data);
}
//If it doesn't exist the file will be created 
else{
    file.mkdirSync('new'); //This creates a folder within a folder mkdir(Make Directory)
file.writeFileSync('./new/mlue.txt','That is Producer');
console.log("Created Successfully");
}