//unlinkSync is required for deleting a created file 
const file = require('fs');
file.unlinkSync('mlue.txt');
if(file.existsSync('mlue.txt')){
    console.log('Boe the action was unsuccessfully');
}
else{
    console.log('Nice step you are good to go');
}