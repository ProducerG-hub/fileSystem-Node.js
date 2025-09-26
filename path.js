const file = require('fs');
const path = require('path');

const folder = path.join(__dirname,'users'); // this creates a directory (folder)
if(!file.existsSync(folder)){
    file.mkdirSync(folder);
    console.log("The folder user is successfully made");
}

const content = path.join(folder,'user.txt'); // this creates something inside the created directory
file.writeFileSync(content,'My name is Producer G');
    const data = file.readFileSync(content,'utf8');
    console.log(data);
